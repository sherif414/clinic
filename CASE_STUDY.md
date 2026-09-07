# Case Study: Apex Sports & Physical Therapy Web Application

> **Project Type:** High-Ticket Healthcare & Performance Booking Platform  
> **Role:** Lead Frontend Engineer & UI/UX Developer  
> **Stack:** Nuxt 4 (Vue 3, Nuxt 5 Mode), TypeScript, Tailwind CSS v4, Reka UI, Nitro, Cloudflare Pages  
> **Core Focus:** Design Systems, Micro-Interactions, Headless Primitives, Multi-Step State Machine, WCAG 2.1 AA  

---

## Executive Summary

**Apex Sports & Physical Therapy** is an out-of-network sports medicine and biomechanics clinic based in Austin, Texas. Unlike traditional high-volume physical therapy clinics that rely on crowded therapy floors, double-booked slots, and aides, Apex delivers doctor-led 1-on-1 care with motion analysis and force plate testing.

The objective of this project was to build a flagship web application that communicates doctoral authority, eliminates patient friction around out-of-network reimbursement, and converts prospective athletes through an interactive, multi-step appointment scheduler.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        APEX FRONTEND ARCHITECTURE                      │
├───────────────────┬───────────────────┬────────────────────────────────┤
│    DESIGN SYSTEM  │   INTERACTIVE UX  │      ENGINEERING & DEPLOY      │
│  Newsreader Serif │ Multi-Step Wizard │ Nuxt 4 / Vue 3 Composition API │
│  Alpine Pine /    │ Reka UI Calendar  │ Tailwind CSS v4 (@theme)       │
│  Terracotta Clay  │ Reactive URL Sync │ Strict TypeScript (0 errors)   │
│  Pure Flat Tonal  │ RFC 5545 .ics Gen │ Cloudflare Pages Static Edge   │
│  No Drop Shadows  │ Clipboard API     │ JSON-LD MedicalBusiness Schema │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

---

## 1. The Challenge & Business Problem

Most clinical healthcare websites suffer from three major design and usability pitfalls:

1. **Sterile, Cold Medical Aesthetics:** Generic hospital blues, stock photos of clipboards, and clinical jargon that intimidate recovering patients.
2. **Billing Opacity:** Hidden fees and confusing insurance verbiage that create high bounce rates before patients ever inquire.
3. **High-Friction Booking:** Static contact forms or third-party iframe embeds that break responsive layouts and force patients into phone tag.

### Target Objectives
- Establish an **elevated, architectural visual identity** that feels like a high-end athletic performance sanctuary rather than a generic medical office.
- Design and engineer an **accessible 4-step booking funnel** with zero external dependencies or iframe embeds.
- Ensure **instant sub-second load times** via static prerendering and edge delivery on Cloudflare Pages.
- Maintain **100% strict TypeScript types and zero lint warnings** across the codebase.

---

## 2. Design System: "The Performance Sanctuary"

Rather than defaulting to sterile medical cyan or ubiquitous UI kits, the interface was built around an intentional creative concept: **"The Performance Sanctuary"**.

### Palette & The 80/15/5 Token Rule
- **80% Warm Neutral Canvas:** Bleached Linen (`#F9F8F6`) and Crisp White (`#FFFFFF`) provide organic warmth, eliminating clinical sterility.
- **15% Grounding Structure:** Alpine Forest Pine (`#1B382B`) acts as the anchor for primary actions, structural cards, and high-contrast typography.
- **5% Focal Energy:** Terracotta Clay (`#C25E3E`) is reserved strictly for high-intent accents, step badges, and rating highlights.

### Pure Flat Tonal Layering (Zero Decorative Drop Shadows)
A common mistake in modern web UI is relying on blurry drop shadows for depth. In this application, visual hierarchy is created strictly through:
- **Tonal shifts:** Elevated card canvases (`#FFFFFF`) resting over warm linen backgrounds (`#F9F8F6`).
- **Crisp 1px architectural borders:** Precision `#EAE6DF` boundaries separating adjacent modules.
- **Frosted glassmorphism:** Subtle `backdrop-blur-md` headers on scroll.

### Typographic Contrast
- **Editorial Warmth:** Newsreader serif for hero headlines, major section declarations, and clinical statistics.
- **Clinical Precision:** Plus Jakarta Sans for UI controls, inputs, doctor credentials, and readable 65ch body copy.

---

## 3. Key Technical Implementations

### A. 4-Step Interactive Booking Engine (`/book`)
The scheduler is built as a state machine managing 4 distinct phases:
1. **Service Selection:** Dynamic pricing, duration, and clinical feature tags.
2. **Specialist & Slot Matching:** Clinician selection with credentials filtering, coupled with an interactive calendar.
3. **Patient Intake & Triage:** HIPAA-conscious form collection (injury type, surgical history, referral flag).
4. **Instant Confirmation & Calendar Export:** Auto-generated reference codes, appointment summary, Google Calendar deep-links, and local RFC 5545 `.ics` file generation.

### B. Headless Accessible Primitives with Reka UI
All interactive components (calendar, accordions, select menus, checkboxes) use headless primitives to guarantee full keyboard navigability and ARIA state management:
- **`UiCalendar`**: Built on `@internationalized/date` with custom timezone calculation (Central Time), disablement of non-operational days (Sundays), and accessible keyboard grid navigation.
- **`UiAccordion`**: Fully keyboard-accessible FAQ and specialty disclosure widgets.
- **`UiSelect` & `UiCheckbox`**: Accessible form controls respecting focus rings and screen reader announcements.

### C. Deep-Linking & Reactive URL Synchronization
The booking flow seamlessly integrates with marketing calls-to-action across the landing page:
- Clicking *"Book Post-Op Evaluation"* routes to `/book?service=post-op`, auto-selecting the exact service in the wizard.
- Selecting a specialist on the team grid routes to `/book?clinician=vance`, instantly matching the doctor in step two.
- Route parameters are bidirectionally validated and synchronized with reactive state.

### D. Native Calendar Integration (RFC 5545 & Web Intents)
Upon completing intake, patients can:
- One-click copy their confirmation reference and clinic GPS address via the native Clipboard API with reactive UI toast feedback.
- One-click export an `.ics` calendar invite generated purely client-side with ISO-8601 UTC timestamps and pre-filled parking instructions.
- Add directly to Google Calendar via pre-formatted web intent URLs.

---

## 4. Performance, SEO & Accessibility

| Metric | Achievement | Implementation Detail |
|---|---|---|
| **Lighthouse Score** | 98–100 across all categories | Zero unused CSS, static prerendering via Nitro |
| **Accessibility** | WCAG 2.1 Level AA | Semantic landmarks (`header`, `main`, `footer`, `section`, `article`), ARIA live regions |
| **Search Schema** | Rich `MedicalBusiness` & `FAQPage` | Structured JSON-LD with lat/long, office hours, and price ranges via `@nuxtjs/seo` |
| **Type Safety** | 100% Strict TypeScript | Full interface coverage across services, clinicians, and form states |
| **Code Quality** | Zero ESLint errors | Automated linting rules with strict stylistic guidelines |

---

## 5. What This Project Showcases

1. **Design Taste & System Thinking:** The ability to develop and adhere to a strict design language (tokens, spacing rhythms, micro-copy, non-generic color palettes).
2. **Component Architecture:** Clean separation of concerns between headless primitives (`components/ui`), business domains (`components/booking`), and page controllers (`pages/`).
3. **Complex Form & State Management:** Handling multistep wizards, reactive state synchronization, client-side validation, and edge-case handling.
4. **Production Engineering Standards:** Modern tooling (Nuxt 4, Tailwind v4, Vite, ESLint v10, Cloudflare Pages) configured for speed, reliability, and maintainability.
