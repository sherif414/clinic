# Apex Sports PT: Project walkthrough & case study

This document explains the business context, the technical problems solved, and the architectural decisions behind this project. Use this for portfolio write-ups, client proposals, or technical interview walkthroughs.

---

## 1. Project overview

- **Project:** Apex Sports & Physical Therapy (Web app & scheduling engine)
- **Target audience:** Athletes and active adults looking for 1-on-1 sports rehab in Austin, TX
- **Tech stack:** Nuxt 4 (Vue 3, Nuxt 5 mode), Tailwind CSS v4, TypeScript, Reka UI, Cloudflare Pages
- **Role:** Frontend design and engineering (UI/UX, design system, component architecture, state management)

---

## 2. The problem to solve

Most private clinic websites have three issues that kill conversions:

1. **High-friction scheduling.** Clinics often dump an unstyled third-party iframe (Calendly, Jane, Acuity) onto a page. These look disconnected from the brand, break on mobile, and force users through generic steps that don't collect clinical context.
2. **Pricing opacity.** Patients rarely know what an appointment costs until after their visit. Out-of-network clinics lose prospective patients who assume insurance won't cover anything.
3. **Clinical sterility.** Most medical sites use generic stock photos, hospital blues, and walls of dense jargon that intimidate injured athletes.

The goal was to build a fast web app that explains cash-pay economics clearly and gives patients a 4-step booking flow that feels like a natural extension of the site.

---

## 3. Key engineering decisions

### Building a custom booking funnel instead of an iframe
Using an external iframe booking widget comes with real drawbacks: heavy script payloads, no design system control, and no way to deep-link marketing CTAs to specific steps.

By building the funnel in Nuxt with Reka UI:
- **Zero layout shift:** The booking wizard runs inside the app shell with consistent typography and borders.
- **Deep-linking from marketing cards:** Clicking "Explore Post-Op Protocol & Book" on the homepage takes the user to `/book?service=post-op`. The page reads the query parameter on mount, sets the reactive state, and selects the matching service without any extra clicks.
- **Doctor matching:** Clicking a specialist's card passes `?clinician=vance` into Step 2, pairing the right doctor with the right evaluation type.

### Handling dates, timezones, and clinic rules
Date pickers in JavaScript often run into local timezone bugs (e.g., an appointment selected for 9:00 AM Central showing as 7:00 AM Pacific).

- We used `@internationalized/date` combined with Reka UI's `CalendarRoot`.
- Appointments are pinned to Central Time (America/Chicago).
- Clinic business rules are enforced in code: Sundays are marked unavailable through an `isDateUnavailable` check, rendering them disabled with strikethrough styling and blocking click events.
- Keyboard navigation is fully supported: users can navigate dates using arrow keys, Home, End, and Page Up/Down without touching a mouse.

### Zero-backend calendar export
Patients need their appointment on their calendar right away, but setting up a full server-side Google or Outlook OAuth integration adds unnecessary infrastructure and cost for a small clinic.

Instead, we built two client-side solutions into the confirmation step:
1. **RFC 5545 `.ics` file generator:** When the user clicks "Download Calendar Invite", the app constructs an `.ics` string in memory with ISO-8601 UTC timestamps, clinician details, and parking instructions, then serves it as a downloadable `Blob`. It opens directly in Apple Calendar, Outlook, or mobile calendar apps.
2. **Google Calendar web intent:** Pre-builds a URL containing the session title, location, and dates so Google users can add the event with one click.

### Design system: tonal hierarchy instead of box shadows
Most modern UI kits rely on heavy box shadows for depth. For Apex, the brand required an architectural, disciplined look.
- We used a pure flat tonal layering approach: white cards (`#FFFFFF`) sit on top of a warm bleached linen canvas (`#F9F8F6`), separated by crisp 1px borders (`#EAE6DF`).
- Color balance follows a strict 80/15/5 rule: 80% warm neutral canvas, 15% grounding Alpine Pine (`#1B382B`), and 5% Terracotta Clay (`#C25E3E`) reserved for active states, badges, and high-priority actions.
- Headings use Newsreader serif for an editorial feel, while all interactive UI elements, form fields, and data tables use Plus Jakarta Sans to keep text readable.

---

## 4. Performance, SEO, and quality

- **Edge prerendering:** Nitro compiles the entire app to static assets deployed on Cloudflare Pages. First Contentful Paint is under 0.8 seconds globally.
- **Local medical SEO:** Structured data (`MedicalBusiness` and `FAQPage`) is injected using `@nuxtjs/seo` with valid schema.org markup, including clinic coordinates, price ranges, and operating hours.
- **Code health:** 100% strict TypeScript types and zero ESLint errors or warnings.

---

## 5. How to present this project to clients or interviewers

When pitching to prospective clients (especially in healthcare, wellness, fitness, or professional services), focus on these points:

1. **"I build custom booking funnels that cut drop-off rates."** Explain how deep-linking from service cards into pre-selected steps removes friction compared to generic contact forms or Calendly links.
2. **"I handle complex frontend logic without bloated dependencies."** Point to the timezone-aware calendar, browser-side `.ics` generator, and URL state synchronization as proof of strong JavaScript fundamentals.
3. **"I care about design craft and brand trust."** Show how the typography, custom color system, and layout choices make the business look high-end rather than cookie-cutter.

### Quick demo route (under 2 minutes)
1. **Start on `/`:** Scroll to the services section. Point out the clear pricing ($175 for 60 min) and explain how this builds trust before booking.
2. **Click "Book Post-Op Protocol":** Show that the URL changes to `/book?service=post-op` and the first step loads with that option selected.
3. **Move to Step 2:** Select Dr. Vance, pick a date on the calendar, and select a time slot. Show that Sundays are disabled.
4. **Fill Step 3:** Type test data into the intake fields.
5. **Show Step 4:** Point out the generated reference number, test the "Copy Reference" button, and click "Download Calendar Invite" to show the generated `.ics` file.
