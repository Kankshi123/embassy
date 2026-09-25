import { NextResponse } from 'next/server';

// Replace this with the URL provided by the user after setting up Apps Script
const GOOGLE_SCRIPT_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxyNY7gx7tVb9_eADJOXxgm6vHb2OzmH-SbAtFOaWoYe-15NbmQ8U-g38fMpNfMxuLf/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real scenario without a Webhook URL, we just log it and simulate success
    // Once the user provides the Webhook URL, we actually POST to it.
    if (GOOGLE_SCRIPT_WEBHOOK_URL === "YOUR_WEBHOOK_URL_HERE") {
      console.log('--- LEAD RECEIVED (No Webhook Configured) ---');
      console.log(body);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return NextResponse.json({ success: true, message: 'Simulated success' });
    }

    // POST to Google Apps Script Webhook
    const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow', // Crucial for Google Apps Script
      signal: AbortSignal.timeout(9000),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Google Scripts Error Text:', text);
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('API /leads error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
