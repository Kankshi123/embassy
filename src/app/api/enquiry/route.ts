// EMBASSY CATERING — src/app/api/enquiry/route.ts
// Bridges frontend enquiry submissions to the CRM portal at port 5000

import { NextRequest, NextResponse } from 'next/server';

const CRM_API_URL = process.env.CRM_API_URL || 'http://localhost:5000';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, eventType, preferredDate, guestCount, budget, cuisines, notes } = body;

    // Validate required fields
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: 'Name, email, and mobile number are required.' },
        { status: 400 }
      );
    }

    // Build CRM lead payload matching schema:
    // id, client, type, dateStr, status, budget, priority, initials, phone, email, guests, daysLeft, notes, stage, outcome, venue
    const leadId = `web_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const initials = name
      .split(' ')
      .map((w: string) => w[0]?.toUpperCase() || '')
      .join('')
      .slice(0, 3);

    // Map event type to CRM type field
    const typeMap: Record<string, string> = {
      wedding: 'wedding',
      corporate: 'corporate',
      tasting: 'tasting',
    };

    // Map guestCount string to a numeric value
    const guestMap: Record<string, number> = {
      'Under 200': 150,
      '200–500': 350,
      '500–1000': 750,
      '1000+': 1200,
    };

    const guestNum = guestMap[guestCount] ?? 150;

    // Map budget string to approximate numeric INR value
    const budgetMap: Record<string, number> = {
      'Under ₹3L': 200000,
      '₹3L–₹5L': 400000,
      '₹5L–₹10L': 750000,
      '₹10L–₹25L': 1750000,
      '₹25L–₹50L': 3750000,
      '₹50L+': 6000000,
    };
    const budgetNum = budgetMap[budget as string] ?? 0;

    // Build notes string
    const cuisineNote = cuisines?.length ? `Cuisine preferences: ${cuisines.join(', ')}.` : '';
    const fullNotes = [cuisineNote, notes].filter(Boolean).join(' ');

    // Calculate days left from preferred date
    let daysLeftStr = 'Date TBD';
    if (preferredDate) {
      const eventDate = new Date(preferredDate);
      const today = new Date();
      const diff = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      daysLeftStr = diff >= 0 ? `${diff} days left` : `${Math.abs(diff)} days past`;
    }

    const crmPayload = {
      id: leadId,
      client: name,
      type: typeMap[eventType] ?? 'wedding',
      dateStr: preferredDate
        ? new Date(preferredDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
        : 'Date TBD',
      status: 'NEW',
      budget: budgetNum,
      priority: 'High Priority',
      initials,
      phone: mobile,
      email,
      guests: guestNum,
      daysLeft: daysLeftStr,
      notes: fullNotes || 'Web enquiry — no additional notes.',
      stage: 'enquiry',
      outcome: 'Active',
      venue: 'TBD — web enquiry',
    };

    // POST to CRM server
    const crmResponse = await fetch(`${CRM_API_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmPayload),
    });

    if (!crmResponse.ok) {
      const errText = await crmResponse.text();
      console.error('CRM server error:', errText);
      return NextResponse.json(
        { error: 'Could not register enquiry with CRM. Please try again.' },
        { status: 502 }
      );
    }

    // Also log an activity for this web enquiry
    await fetch(`${CRM_API_URL}/api/leads/${leadId}/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'enquiry',
        text: `New web enquiry submitted from embassycatering.in — ${typeMap[eventType] ?? 'general'} catering request for ${guestNum} guests.`,
        user: 'Web Portal',
        time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }),
    });

    return NextResponse.json(
      { success: true, leadId, message: 'Enquiry submitted successfully.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
