---
name: The Embassy Catering
description: Luxury Multi-Cuisine Catering Delhi NCR Since 1948
colors:
  primary: "#B11226"
  secondary: "#8B0000"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F9F9F9"
  neutral-ink: "#1A1A1A"
  ivory: "#FFFFF0"
  offwhite: "#FFF7F7"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(48px, 6vw, 92px)"
    fontWeight: 300
    lineHeight: 1.1
  script:
    fontFamily: "Great Vibes, cursive"
    fontSize: "clamp(32px, 3.5vw, 56px)"
  body:
    fontFamily: "Jost, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
  "5xl": "128px"
  "6xl": "192px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
---

# Design System: The Embassy Catering

## 1. Overview

**Creative North Star: "The Heritage Pavilion"**

A cinematic, editorial-focused visual identity that evokes royal heritage, legacy, and culinary mastery. The aesthetic balance reflects the prestige of Delhi's original luxury caterer since 1948. It pairs generous, breathable spacing with deep, regal crimson red and classical display typography to create an experience that feels majestic, orchestrated, and highly premium.

This system rejects SaaS-style card layouts, neon accent elements, gradient text treatments, and arbitrary or flat dark modes. 

**Key Characteristics:**
- Orchestrated luxury pacing with wide, deliberate margins.
- High-contrast typography featuring delicate serif headings and elegant script details.
- Majestic crimson branding applied with restraint and purpose.
- Cinematic, smooth scroll interactions (Lenis) and organic motion transitions.

## 2. Colors

The color system is locked to the brand's heritage Imperial Crimson, Regal Burgundy, and light-filled monochromatic neutral tones.

### Primary
- **Imperial Crimson** (#B11226): Used for dominant brand moments, primary CTAs, and active navigation highlights. It carries the emotional weight of the brand's luxury identity.

### Secondary
- **Regal Burgundy** (#8B0000): A deep, saturated red used for subtle color depth, dark section backgrounds, and shadows.

### Neutral
- **Off-white/Ivory** (#FFF7F7 / #FFFFF0): Near-white warm-tinted neutrals that provide a soft, heritage-feel canvas without feeling sterile.
- **Pure White** (#FFFFFF): Used as the base background for standard text sections.
- **Ink Dark** (#1A1A1A): The canonical dark color for body copy, ensuring strong readability with a high contrast ratio.
- **Muted Dark** (rgba(26, 26, 26, 0.65)): Used for secondary information, meta-data, and helper descriptions.

### Named Rules
**The 10% Crimson Rule.** Imperial Crimson is used on ≤10% of any given screen area (unless it is a drenched legacy highlight section). Its rarity on the screen preserves its prestige.

**The Contrast Rule.** Body text must never be rendered in low-contrast light grays. It must maintain at least a 4.5:1 contrast ratio against light backgrounds.

## 3. Typography

**Display Font:** 'Cormorant Garamond' (serif)
**Script Font:** 'Great Vibes' (cursive)
**Body Font:** 'Jost' (sans-serif)

**Character:** A classic-to-modern contrast pairing where a stately, light serif headline is paired with a clean, highly readable geometric body font and accented with bespoke cursive strokes.

### Hierarchy
- **Display** (Light 300, clamp(48px, 6vw, 92px), 1.1): Used for large hero headings and cinematic section markers.
- **Headline** (Medium 500, clamp(28px, 3.2vw, 44px), 1.2): Used for primary section titles.
- **Title** (Regular 400, clamp(24px, 2.4vw, 36px), 1.3): Used for sub-sections.
- **Body** (Regular 400, 16px, 1.6): Used for description prose and general details. Max reading length capped at 65–75ch.
- **Label** (Medium 500, 10px, 0.26em letter-spacing, uppercase): Used for eyebrows, badges, and uppercase CTAs.

### Named Rules
**The No-Shouting Rule.** Headings must never use uppercase text unless it is an eyebrow or label. The elegant Cormorant Garamond font relies on its natural serif casing for grace.

## 4. Elevation

The system uses cinematic depth. Surfaces are flat at rest, with soft, ambient, large-radius shadows appearing only in response to state transitions or active reveals.

### Shadow Vocabulary
- **Shadow Deep** (`0 32px 80px rgba(0, 0, 0, 0.32)`): Used for major overlays, modals, or dropdown menus.
- **Shadow Card** (`0 16px 40px rgba(0, 0, 0, 0.12)`): Used for interactive card surfaces when elevated.
- **Shadow Red Accent** (`0 8px 24px rgba(177, 18, 38, 0.25)`): Ambient red glow under active buttons.

### Named Rules
**The Hover Elevation Rule.** Shadows are never static on layout elements. They must fade in smoothly during a hover event to signal interactive depth.

## 5. Components

All components reflect a stately and tactile philosophy. Generous internal padding and pill-shaped interactive anchors are preferred.

### Buttons
- **Shape:** Pill (999px border-radius)
- **Primary:** Background (#B11226), text (#FFFFFF), padding (16px 32px), with a subtle shadow-red base.
- **Hover / Focus:** Translate upwards by 3px (`translateY(-3px)`) and expand the red shadow glow (`box-shadow: 0 20px 58px rgba(177, 18, 38, 0.38)`).
- **Secondary:** Background (#FFFFFF), text (#B11226), border (1px solid rgba(255, 255, 255, 0.55)).

### Cards / Containers
- **Corner Style:** Classic subtle curve (4px radius). Never use aggressive curves for content panels.
- **Background:** Solid white (#FFFFFF) or light neutral (#F9F9F9).
- **Shadow Strategy:** Flat at rest, soft elevation on hover.

### Navigation
- **Style:** Background is solid Imperial Crimson (#B11226), with a clean bottom border (1px solid rgba(255, 255, 255, 0.10)). Nav links are uppercase labels in white, with smooth underline drawing hover animations.

## 6. Do's and Don'ts

### Do:
- **Do** maintain a strict 4.5:1 contrast ratio for all descriptive text.
- **Do** use `text-wrap: balance` on all primary display headlines.
- **Do** respect user preferences for reduced motion by utilizing crossfades instead of complex transforms.

### Don't:
- **Don't** use side-stripe borders (border-left or border-right > 1px) as colored accents.
- **Don't** apply gradients to text headers (`background-clip: text` is prohibited).
- **Don't** use neon accent colors or tech-focused dark modes.
- **Don't** animate image elements directly on hover. Animate the background or border container instead.
