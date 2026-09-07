# Apex Sports & Physical Therapy — Project Showcase & Feature Walkthrough

> A comprehensive, section-by-section guide detailing the design system, user experience, and frontend engineering architecture of the Apex Sports Physical Therapy web application.

---

## 🧭 Executive Overview & Narrative Architecture

Apex Sports & Physical Therapy is an out-of-network sports medicine and biomechanics clinic based in Austin, Texas. The application was conceived and engineered to solve the primary friction points of modern healthcare websites: **clinical sterility, confusing billing, and high-friction appointment booking.**

The application is architected around the **Patient Conversion Journey**:

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   1. DISCOVER   │ ────> │  2. EVALUATE    │ ────> │    3. ACT       │ ────> │   4. RESOLVE    │
│   Split-Screen  │       │ Benchmark Stats │       │ 4-Step Booking  │       │ Auto-Ref Code   │
│   Hero & Brand  │       │ Doctor Profiles │       │ Headless UI     │       │ .ics Calendar   │
│   Identity      │       │ Pricing & OON   │       │ Central Time Cal│       │ Directions/Info │
└─────────────────┘       └─────────────────┘       └─────────────────┘       └─────────────────┘
```

---

## 🖥️ Section-by-Section Feature Breakdown

### Part 1: The Marketing Platform (`/`)

#### 1. Header & Global Navigation Shell
* **Visual Experience:** Sticky top navigation using Warm Bleached Linen glassmorphism (`bg-linen/95 backdrop-blur-md`) with a crisp 1px `#EAE6DF` bottom border.
* **Key Interactions:**
  * **Brand Anchor:** Monogram clinic mark paired with Newsreader serif wordmark.
  * **Mobile Drawer:** Accessible slide-over sheet powered by `useMobileNav()` for effortless thumb reach on mobile screens.
  * **Direct Quick Dial:** Instant phone link formatted with full accessibility attributes (`aria-label="Call clinic at 512-555-0199"`).
  * **Primary CTA:** High-contrast pill capsule button routing directly into the appointment funnel (`/book`).
* **Under the Hood:** [`AppHeader.vue`](file:///c:/projects/clinic/app/components/AppHeader.vue), [`useMobileNav.ts`](file:///c:/projects/clinic/app/composables/useMobileNav.ts).

---

#### 2. The Architectural 50/50 Split-Screen Hero
* **Visual Experience:** An authoritative split canvas rejecting generic stock photography. On desktop, a 50/50 full-bleed split frames high-resolution clinical imagery alongside editorial serif headings; on mobile, it transitions into an image-first visual hero with stacked call-to-actions.
* **Key Interactions:**
  * **Headline Hierarchy:** Newsreader display serif (`clamp(2.5rem, 5vw, 3.5rem)`) communicating high-end athletic performance.
  * **Doctoral Credential Badge:** Soft Terracotta Clay pill badge highlighting *"Doctor of Physical Therapy • Austin, TX"*.
  * **Dual Action Cluster:** Primary *"Schedule Evaluation"* CTA paired with an outline *"Explore Specialties"* trigger that smoothly navigates to clinical offerings.
* **Under the Hood:** [`app/pages/index.vue`](file:///c:/projects/clinic/app/pages/index.vue) (lines 246–390).

---

#### 3. Clinical Benchmark Outcomes Ribbon
* **Visual Experience:** Grounded Alpine Forest Pine (`#1B382B`) dark ribbon acting as an immediate quantitative proof statement.
* **Key Data Points:**
  * **94%**: Milestone discharge goal achievement rate.
  * **4.9 / 5.0**: Patient rating across 340+ competitive Austin athletes.
  * **100%**: Doctor-led 1-on-1 care (zero aides or tech handoffs).
  * **0**: Surprise insurance billing statements (transparent Superbill model).
* **Under the Hood:** Pure flat tonal layering using subtle Pine Muted (`#345545`) vertical separators without relying on box shadows.

---

#### 4. Clinical Specialties & Treatment Matrix
* **Visual Experience:** 4-column responsive service grid breaking down the clinic's core competencies:
  1. *Post-Op Surgical Rehabilitation (Phase 1–4)*
  2. *Doctoral Orthopedic & Spine Physical Therapy*
  3. *Biomechanical Running & 3D Gait Analysis*
  4. *Athletic Performance Recovery & Tissue Suite*
* **Key Interactions:**
  * **Interactive Mobile Expansion:** Expandable tag drawers allowing mobile users to inspect clinical techniques (e.g. force plate dynamometry, graft protection loading) without cluttering the viewport.
  * **Deep-Linking Actions:** Each service card features a dedicated booking trigger linking to `/book?service=<id>`, auto-populating that exact treatment in the booking funnel.
* **Under the Hood:** [`app/pages/index.vue`](file:///c:/projects/clinic/app/pages/index.vue) (specialties data and render loop).

---

#### 5. Biomechanical Technology & Diagnostic Suite
* **Visual Experience:** Editorial showcase illustrating how Apex integrates sports technology typically reserved for Olympic training centers.
* **Clinical Capabilities Highlighted:**
  * Synchronized dual-camera high-speed gait analysis.
  * Force vector ground reaction plate baselines.
  * Delfi personalized Blood Flow Restriction (BFR) rehabilitation.
  * Normatec 3 dynamic pneumatic compression systems.

---

#### 6. Doctoral Clinician Profiles
* **Visual Experience:** Clean 3-column doctor profile matrix presenting the board-certified medical staff.
* **Profiles:**
  * **Dr. Marcus Vance, PT, DPT, OCS** (14 yrs exp — Knee & Shoulder Reconstruction)
  * **Dr. Elena Rostova, PT, DPT, SCS** (11 yrs exp — Biomechanics & Running Gait)
  * **Dr. Julian Hayes, PT, DPT, FAAOMPT** (16 yrs exp — Spine & Complex Joint Fellow)
* **Key Interactions:**
  * Direct doctor matching: Clicking *"Book with Dr. Vance"* routes to `/book?clinician=vance`, automatically locking the specialist in the scheduler.

---

#### 7. Metric-Driven Patient Case Studies
* **Visual Experience:** Verified patient testimonials anchored by objective athletic achievements rather than vague compliments.
* **Key Stories:**
  * Marathon runner hitting 98% quad symmetry before Austin Half-Marathon.
  * Masters CrossFit athlete recovering from subacromial decompression to full overhead snatching.
  * Division I swimmer resolving scapular dyskinesis and setting 200m fly PR.
* **Interactive Element:** Mobile carousel tab controls with swipe indicators.

---

#### 8. Transparent Fee Schedule & Superbill Guide
* **Visual Experience:** A clear 3-card breakdown addressing healthcare's biggest objection: hidden billing.
* **Patient Education:**
  1. *Upfront Pricing:* 60-minute doctor sessions locked at $175 (no surprise facility fees).
  2. *Automatic Superbill Generation:* Itemized invoice with ICD-10 diagnostic and CPT procedure codes provided after every session.
  3. *50%–80% OON Direct Reimbursement:* Step-by-step guidance for PPO insurance reimbursement and HSA/FSA card payment at checkout.
* **Direct Access Affirmation:** Highlight banner informing Texas patients they can be evaluated for 10–15 business days without a prior physician referral.

---

#### 9. Accessible Clinical FAQ Accordion
* **Visual Experience:** Accessible expandable accordion built on **Reka UI primitives**.
* **Accessibility Features:**
  * Full keyboard navigation (Arrow Up/Down, Home/End, Space/Enter).
  * Proper ARIA state bindings (`aria-expanded`, `aria-controls`).
  * Automatic height animation without layout shifts.
* **Under the Hood:** [`UiAccordion.vue`](file:///c:/projects/clinic/app/components/ui/UiAccordion.vue).

---

#### 10. Semantic Footer & Practice Landmarks
* **Visual Experience:** Structured 4-column footer containing schema-matched location data, operating hours (Monday–Saturday), Google Maps directions link, and legal compliance disclaimers.

---

### Part 2: The 4-Step Interactive Booking Funnel (`/book`)

The booking engine is built as an accessible state machine supporting **deep-linking query parameters**, **dynamic validation**, and **client-side calendar export**.

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  STEP 1: SERVICE │ ──> │  STEP 2: TIME    │ ──> │ STEP 3: PATIENT  │ ──> │ STEP 4: CONFIRM  │
│  Dynamic Rate /  │     │ Reka UI Calendar │     │ Form Validation  │     │ Ref # Code       │
│  Duration Tag    │     │ Specialist Match │     │ Injury Dropdown  │     │ .ics Export      │
└──────────────────┘     └──────────────────┘     └──────────────────┘     └──────────────────┘
```

#### Step 1: Service Selection
* **Component:** [`BookingStepService.vue`](file:///c:/projects/clinic/app/components/booking/BookingStepService.vue)
* **Features:**
  * Cards display exact duration, upfront pricing, and clinical feature checklists.
  * Query parameter resolution: visiting `/book?service=biomech-gait` automatically selects the Biomechanical Running Analysis card.
  * Active selection highlights with Alpine Forest Pine border and checkmark indicator.

#### Step 2: Clinician & Time Slot Scheduling
* **Component:** [`BookingStepDateTime.vue`](file:///c:/projects/clinic/app/components/booking/BookingStepDateTime.vue)
* **Features:**
  * **Treating Clinician Filter:** Options for "First Available Specialist" or specific doctors with credentials badges.
  * **Headless Calendar ([`UiCalendar.vue`](file:///c:/projects/clinic/app/components/ui/UiCalendar.vue)):**
    * Uses `@internationalized/date` with `CalendarRoot`, `CalendarGrid`, and `CalendarCell`.
    * Automatic **Central Timezone** normalization.
    * Clinic availability rule: **Sundays are automatically disabled** and styled with strikethrough state.
    * Full keyboard navigation: arrow keys move day-by-day; page-up/down shifts months.
  * **Slot Time Pickers:** Morning (8:30 AM – 11:15 AM) and Afternoon (1:00 PM – 4:45 PM) quick-select chips.
  * **Active Summary Ribbon ([`BookingSummaryRibbon.vue`](file:///c:/projects/clinic/app/components/booking/BookingSummaryRibbon.vue)):** Sticky summary banner tracking selected service, price, doctor, and date.

#### Step 3: Patient Intake & Triage
* **Component:** [`BookingStepPatient.vue`](file:///c:/projects/clinic/app/components/booking/BookingStepPatient.vue)
* **Features:**
  * Accessible input fields with floating focus rings (`ring-2 ring-pine/20`).
  * Headless **`UiSelect`** dropdown for injury categories (Knee/ACL, Shoulder/Labrum, Spine, etc.).
  * Accessible **`UiCheckbox`** toggles for First Visit confirmation and Physician Referral status.
  * Form-level client-side validation ensuring required patient contact info is complete before moving to confirmation.

#### Step 4: Instant Confirmation & Native Integrations
* **Component:** [`BookingStepConfirmed.vue`](file:///c:/projects/clinic/app/components/booking/BookingStepConfirmed.vue)
* **Features:**
  * **Dynamic Reference Generator:** Auto-generates unique appointment codes (e.g. `#APX-84920`).
  * **One-Click Clipboard API:** Patients can click to copy their reference number or clinic GPS address with a 2-second reactive checkmark toast.
  * **RFC 5545 `.ics` Calendar Generation:** Generates a real `.ics` iCalendar file entirely in the browser with ISO-8601 UTC timestamps, appointment duration calculation, and pre-formatted arrival/parking notes.
  * **Google Calendar Direct Intent:** Pre-populated web intent link opening Google Calendar with one click.
  * **Print Media Styles:** Clean print stylesheet for printing or saving a paper confirmation.

---

## 🏗️ Technical Architecture & Quality Standards

```
clinic/
├── app/
│   ├── assets/css/main.css         # Tailwind v4 theme tokens (Alpine Pine, Terracotta Clay)
│   ├── components/
│   │   ├── booking/                # Multistep wizard components & summary ribbon
│   │   ├── ui/                     # Reka UI headless accessible primitives
│   │   ├── AppHeader.vue           # Header with mobile sheet navigation
│   │   └── AppFooter.vue           # Semantic clinic footer & practice metadata
│   ├── composables/                # State composables (useMobileNav)
│   ├── pages/
│   │   ├── index.vue               # Landing page & JSON-LD schema integration
│   │   └── book/index.vue          # 4-step appointment state machine
│   ├── types/booking.ts            # Strict TypeScript interfaces
│   └── utils/clinic.ts             # Practice details, pricing, hours, address
├── CASE_STUDY.md                   # Full portfolio case study
├── FREELANCE_TOOLKIT.md            # Proposals, Loom script & pitch copy
├── DESIGN.md                       # Comprehensive design system specification
└── nuxt.config.ts                  # Nitro Cloudflare Pages preset & SEO modules
```

### Verification & Code Standards
* **TypeScript:** Strict type checking with `vue-tsc` — **0 errors**.
* **Linting:** Configured with `@nuxt/eslint` v10 and `@stylistic` — **0 errors, 0 warnings**.
* **SEO & Metadata:** Implemented with `@nuxtjs/seo` and `nuxt-schema-org`:
  * Rich `MedicalBusiness` structured data with latitude/longitude coordinates, fee schedules, and opening hours.
  * `FAQPage` schema indexing all 6 clinical FAQs for search snippets.
* **Edge Prerendering:** Nitro static preset pre-building all routes for deployment on **Cloudflare Pages**.

---

## 🎬 2-Minute Video / Loom Recording Script

Use this exact script to record an impressive screen recording for your portfolio, Upwork profile, or client pitches:

| Time | Visual on Screen | Voiceover Script |
|---|---|---|
| **0:00 – 0:20** | Desktop Homepage Hero | *"Hi there! I'm excited to walk you through Apex Sports Physical Therapy, a high-converting web application I built with Nuxt 4, Vue 3, and Tailwind CSS v4. The goal was to reject the sterile, confusing feel of typical medical websites and create an editorial 'Performance Sanctuary' that builds immediate trust with athletes."* |
| **0:20 – 0:40** | Scroll to Stats & Specialties | *"I implemented a custom design system with Newsreader serif typography, Alpine Forest Pine, and Terracotta Clay accents. Notice how our clinical specialties feature deep-linking—if a patient clicks 'Book Post-Op Protocol', it passes that state straight into our scheduling engine."* |
| **0:40 – 1:05** | Navigate to `/book` (Steps 1 & 2) | *"Here in the booking funnel, I used Reka UI headless primitives for maximum accessibility. In Step 2, the custom calendar calculates Central Time, disables closed clinic days like Sundays, and offers instant morning or afternoon slot picking. Notice the sticky summary ribbon tracking their selections in real time."* |
| **1:05 – 1:30** | Step 3 & Step 4 Confirmation | *"In Step 3, we collect clinical intake data with accessible selects and checkboxes. Once confirmed, the app generates a unique reference code, allows one-click clipboard copying, and produces a native RFC 5545 .ics calendar invite that works seamlessly with Google or Apple Calendar."* |
| **1:30 – 1:50** | DevTools / Architecture | *"Under the hood, the project features strict TypeScript coverage, zero ESLint warnings, rich JSON-LD MedicalBusiness schema for local SEO, and static prerendering on Cloudflare Pages for sub-second edge performance."* |
| **1:50 – 2:00** | Return to Homepage | *"If you're looking for a frontend developer who combines strong engineering architecture with meticulous design taste, I'd love to help build your next platform. Thank you!"* |

---

## 🎯 Live Client & Interview Demo Checklist

When demonstrating this project live on Zoom or Google Meet, follow this sequence to showcase depth:

1. **Test Deep Linking:**
   * Open `/book?service=post-op&clinician=vance` in a new tab.
   * Point out how the scheduler automatically selects *Post-Op Surgical Rehabilitation* and locks *Dr. Marcus Vance* as the treating specialist.
2. **Demonstrate Calendar Keyboard Navigation:**
   * Tab into the `UiCalendar` component.
   * Use the **Arrow Keys** to move between days and press **Enter** to select a date, demonstrating 100% WCAG accessibility without touch.
3. **Showcase Sunday Disablement:**
   * Hover over any Sunday on the calendar to demonstrate that closed clinic dates are non-interactive and styled with strike-through text.
4. **Trigger Clipboard Feedback:**
   * On the confirmation screen (Step 4), click **Copy Reference**. Show the animated 2-second checkmark feedback.
5. **Download the `.ics` Calendar Invite:**
   * Click **Download Calendar Invite (.ics)**. Open the downloaded file to show that it contains valid UTC timestamps, doctor credentials, and clinic address data.
