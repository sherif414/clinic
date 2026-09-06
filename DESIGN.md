---
name: Apex Sports & Physical Therapy
description: Clinical Performance & Human Rehab
colors:
  primary: "#1B382B"
  primary-light: "#284E3D"
  primary-dark: "#12261D"
  primary-muted: "#345545"
  secondary: "#C25E3E"
  secondary-hover: "#AD4F32"
  secondary-soft: "#F4ECE7"
  secondary-dark: "#8E3F27"
  neutral-bg: "#F9F8F6"
  neutral-darker: "#F3F0E8"
  surface: "#FCFBF9"
  card: "#FFFFFF"
  border: "#EAE6DF"
  border-muted: "#E3DDD2"
  text-primary: "#1E2320"
  text-muted: "#525B54"
  text-light: "#768179"
typography:
  display:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
  arch: "224px 224px 32px 32px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "{colors.card}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.neutral-darker}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-subtle:
    backgroundColor: "{colors.secondary-soft}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
---

# Design System: Apex Sports & Physical Therapy

## Overview

**Creative North Star: "The Performance Sanctuary"**

Apex Sports & Physical Therapy exists at the intentional intersection of elite athletic sports science and serene, warm architectural wellness. The visual atmosphere completely rejects the cold, sterile blues, harsh fluorescent whites, and crowded plastic aesthetics of conventional clinical therapy. Instead, it invites the athlete into a restorative sanctuary characterized by organic bleached linen textures, authoritative alpine evergreen framing, and vibrant terracotta clay highlights.

The density is open, disciplined, and calm. Generous negative space and measured typographic pacing convey doctoral confidence and unhurried 1-on-1 care. Every element is deliberate: structural clarity provides reassurance to post-operative and injured patients, while precise data presentation communicates cutting-edge biomechanical rigor.

**Key Characteristics:**
- **Warm Architectural Clinical:** Organic linen surfaces, warm ecru borders, and deep alpine greens replace clinical sterility.
- **Doctoral & Editorial Typography:** Expressive Newsreader serif display headings paired with crisp, highly legible Plus Jakarta Sans functional copy.
- **Architectural Arch & Pill Geometry:** Hero anchors framed in sculpted Roman arches balanced by tactile pill-capsule action triggers.
- **Pure Flat Tonal Layering:** Zero decorative drop shadows; visual hierarchy is established through clean tonal shifts and crisp 1px borders.

## Colors

The palette grounds doctoral authority in deep alpine botanical tones, energized by terracotta clay accents and cushioned by warm bleached linen surfaces.

### Primary
- **Alpine Forest Pine** (#1B382B): The primary brand anchor. Used for primary call-to-action buttons, high-level structural headings, brand identity, and dark stats ribbons.
- **Pine Light** (#284E3D): Interactive hover state for primary triggers.
- **Pine Dark** (#12261D): Active/pressed state and deep contrast backgrounds.
- **Pine Muted** (#345545): Secondary structural dividers on dark ribbons and subtle iconography.

### Secondary
- **Terracotta Clay** (#C25E3E): The energetic athletic spark. Used sparingly for status indicators, active step highlights, rating stars, and subtle promotional badges.
- **Clay Hover** (#AD4F32): Hover and focus-active states for secondary accents.
- **Clay Soft** (#F4ECE7): Low-contrast tinted pill badge backgrounds and subtle tag containers.
- **Clay Dark** (#8E3F27): High-contrast text on light clay backgrounds.

### Neutral
- **Warm Bleached Linen** (#F9F8F6): The global canvas background. Provides restorative warmth compared to stark white.
- **Linen Darker** (#F3F0E8): Subtle background differentiation for nested sections, table headers, and hover states.
- **Linen Surface** (#FCFBF9): Elevated card canvas under warm lighting.
- **Crisp Ecru White** (#FFFFFF): Card, modal, and input surface backgrounds.
- **Ecru Border** (#EAE6DF): The canonical 1px divider and structural bounding border throughout the system.
- **Ecru Muted** (#E3DDD2): Secondary borders, separators, and muted outlines.
- **Smoked Charcoal** (#1E2320): High-legibility primary text for headlines, titles, and body content.
- **Charcoal Muted** (#525B54): Secondary body text, metadata, descriptions, and helper hints.
- **Charcoal Light** (#768179): Form placeholders, disabled labels, and quiet captions.

### Named Rules
**The 80/15/5 Balance Rule.** 80% warm neutral canvas (Linen, Ecru, White), 15% grounding Alpine Pine structure, and exactly 5% concentrated Terracotta Clay energy for focal actions and status highlights.
**The Non-Sterile Clinical Rule.** Pure cold stark white and sterile medical cyan/blue are strictly forbidden. Surfaces breathe with organic warmth.

## Typography

**Display Font:** Newsreader (with Georgia, serif fallback)  
**Body Font:** Plus Jakarta Sans (with Inter, sans-serif fallback)  
**Label/Mono Font:** Plus Jakarta Sans (tracked uppercase)

**Character:** An elegant juxtaposition of humanistic, editorial serif warmth for headlines and metrics, paired with geometric, clean sans-serif precision for clinical information and interactive controls.

### Hierarchy
- **Display** (Regular 400, `clamp(2.5rem, 5vw, 3.5rem)`, line-height 1.14): Hero statements, major section declarations, and primary clinical milestone numbers.
- **Headline** (Medium 500, 2rem / 32px, line-height 1.25): Major section headings, modal titles, and specialty group headers.
- **Title** (SemiBold 600, 1.25rem / 20px, line-height 1.35): Clinical service card titles, doctor names, and step headers.
- **Body** (Regular 400, 1rem / 16px, line-height 1.6, max line length 65ch): Service descriptions, testimonials, explanatory clinical copy, and patient FAQs.
- **Label** (SemiBold 600, 0.6875rem / 11px, letter-spacing 0.08em, uppercase): Status badges, step counters, categories, and input field labels.

### Named Rules
**The Editorial Serif Contrast Rule.** Newsreader serif is strictly reserved for emotional hooks, hero headlines, and key clinical metrics. All operational UI, forms, buttons, tables, and dense medical data must use Plus Jakarta Sans.
**The Legible Measure Rule.** Long-form clinical copy and service descriptions must never exceed 65ch line length, ensuring low cognitive fatigue for recovering patients.

## Layout

The spatial model relies on a responsive 12-column grid within a maximum container width of 1280px (`max-w-7xl`). Generous vertical padding (`py-16` to `py-24` on desktop, `py-12` on mobile) gives each clinical offering distinct room to breathe.

Nested cards and multi-column grids adhere to an 8px rhythm (spacing tokens: 4px, 8px, 16px, 24px, 32px, 48px, 64px). Between related components, 16px or 24px gaps maintain cohesion; between disparate thematic blocks, 48px to 64px gaps prevent visual clutter.

## Elevation & Depth

Apex strictly follows a **Pure Flat Tonal Layering** model. There are no ambient, diffuse, or dynamic drop shadows. Visual depth, hierarchy, and physical presence are conveyed through background tonal shifts (`#FFFFFF` resting upon `#F9F8F6`), crisp 1px borders (`#EAE6DF`), and subtle frosted glass surfaces (`backdrop-blur-md`).

### Named Rules
**The Zero Decorative Shadow Rule.** Surfaces are flat and grounded. Depth is achieved strictly through tonal separation (`bg-white` over `bg-linen`) and 1px border frames (`border-ecru-border`), keeping the interface crisp, grounded, and architectural.
**The Ghost Border Fallback.** Whenever two neutral surfaces of similar tone meet, a 1px border in `#EAE6DF` must separate them to preserve spatial definition without artificial elevation.

## Shapes

The form language is built upon two complementary archetypes:
1. **The Architectural Roman Arch:** Used as a signature silhouette for photography and featured hero containers (`border-radius: 14rem 14rem 2rem 2rem` or `12rem 12rem 2rem 2rem`). This references classical restorative architecture and the natural skeletal arches of human anatomy.
2. **The Tactile Pill Capsule:** Used for status badges, tags, and prominent CTA buttons (`border-radius: 9999px`). Smooth, continuous curvature feels organic and reassuring to the touch.

Secondary containers and interactive cards employ refined `12px` (`rounded-xl`) or `16px` (`rounded-2xl`) corners with crisp 1px borders.

### Named Rules
**The Arch Anchor Rule.** Roman arches are reserved for primary visual framing (e.g. hero imagery, signature clinical showcases) to evoke architectural strength and biological structure. Never apply arch masks to interactive buttons or small cards.

## Components

### Buttons
- **Shape:** Full pill capsule (`border-radius: 9999px`) for primary CTAs; rounded rectangle (`border-radius: 12px`) for compact or form-embedded actions.
- **Primary:** Background Alpine Forest Pine (`#1B382B`), text Warm Linen (`#F9F8F6`), padding `14px 28px`, font-size `15px`, font-weight 500. Hover: Pine Light (`#284E3D`). Active: Pine Dark (`#12261D`). Focus: 2px ring in Pine/30.
- **Outline:** Background Crisp White (`#FFFFFF`), border 1px Ecru Border (`#EAE6DF`), text Alpine Pine (`#1B382B`), padding `14px 28px`. Hover: Linen Darker (`#F3F0E8`).
- **Subtle:** Background Clay Soft (`#F4ECE7`), text Terracotta Clay (`#C25E3E`), padding `10px 20px`. Hover: Clay Soft at 80% opacity.

### Chips & Badges
- **Style:** Continuous pill capsule (`border-radius: 9999px`), padding `4px 10px`, font-size `11px`, font-weight 600, uppercase, letter-spacing `0.08em`.
- **Variants:**
  - *Secondary / Accent:* Background `#F4ECE7`, text `#C25E3E`, border 1px `#C25E3E`/20.
  - *Primary / Clinic:* Background `#1B382B`/10, text `#1B382B`, border 1px `#1B382B`/15.
  - *Neutral:* Background `#FFFFFF`, text `#525B54`, border 1px `#EAE6DF`.

### Cards / Containers
- **Corner Style:** Rounded 16px (`rounded-2xl`) or 24px (`rounded-3xl`).
- **Background:** Crisp White (`#FFFFFF`) or Warm Linen Surface (`#FCFBF9`).
- **Border:** 1px solid Ecru Border (`#EAE6DF`).
- **Shadow:** None (`box-shadow: none`).
- **Internal Padding:** 24px to 32px (`p-6` to `p-8`).

### Inputs & Select Fields
- **Style:** Background `#FFFFFF`, border 1px solid `#EAE6DF`, corner radius `12px` (`rounded-xl`), padding `12px 16px`, text `#1E2320`, font-size `15px`.
- **Focus:** Border color shifts to `#1B382B` with a subtle outline ring (`ring-2 ring-pine/20`).
- **Disabled:** Background `#F9F8F6`, text `#768179`, cursor `not-allowed`.

### Navigation Bar
- **Header Shell:** Sticky top header with Linen glassmorphism (`bg-linen/95 backdrop-blur-md`), height 64px (mobile) to 80px (desktop), bottom border 1px `#EAE6DF`.
- **Brand Element:** Square icon logo (rounded 12px) paired with Newsreader bold brand typography.
- **Actions:** Direct telephone link and high-emphasis pill "Book Assessment" CTA button.

## Do's and Don'ts

### Do:
- **Do** pair Newsreader serif headlines with clean Plus Jakarta Sans body copy to balance human warmth with clinical precision.
- **Do** use 1px `#EAE6DF` borders and tone contrast (`#FFFFFF` on `#F9F8F6`) rather than drop shadows to create structure.
- **Do** format status badges and high-emphasis CTAs with continuous pill curves (`rounded-full`).
- **Do** preserve Terracotta Clay (`#C25E3E`) strictly for high-intent accents, badges, and focal interactive states.
- **Do** keep generous whitespace (48px–96px) between thematic sections to maintain calm, uncluttered pacing.

### Don't:
- **Don't** introduce sterile medical blues or clinical cold-gray backgrounds.
- **Don't** use decorative drop shadows or blurred box-shadow halos on cards and panels.
- **Don't** apply serif fonts (`Newsreader`) to body text, form fields, table data, or UI labels.
- **Don't** crowd layout containers; maintain at least 48px to 96px vertical section breathing room.
- **Don't** use arbitrary corner radiuses; adhere strictly to 8px, 12px, 16px, 24px, pill, or arch.
