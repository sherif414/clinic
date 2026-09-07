# Apex clinic walkthrough

A quick guide to what this app does, how each screen works, and how to demo it.

---

## What the project is

A web app for a sports physical therapy clinic in Austin. It has a marketing homepage and an interactive 4-step booking flow. Built with Nuxt 4, Vue 3, Tailwind v4, and TypeScript.

---

## Homepage (`/`)

### Navigation
- Sticky header with blurred background.
- Direct phone link and "Book Assessment" button.
- Mobile menu drawer for small screens.

### Hero
- Split-screen layout. Photo on one side, headline and actions on the other.
- Links jump down to specialties or straight to `/book`.

### Social proof and stats
- 4 key metrics: 94% goal completion, 4.9 rating (340 reviews), 1-on-1 doctor care, no surprise fees.

### Services grid
- 4 service cards: Post-Op Rehab, Orthopedic PT, Running Gait Analysis, and Recovery Suite.
- Each card shows price, duration, and what is included.
- Clicking a card's booking link passes the service ID to `/book?service=...` so the scheduler opens with that item already selected.

### Clinician profiles
- Photos, credentials (OCS, SCS, FAAOMPT), and bios for the 3 doctors.
- "Book with Dr. [Name]" buttons deep-link into `/book?clinician=...`.

### Case studies and reviews
- Real patient scenarios with measurable outcomes (e.g., reaching 98% quad symmetry after ACL surgery).
- Mobile view has tab controls to switch between stories.

### Pricing and insurance
- Explains the cash-pay and superbill process in 3 steps: upfront price, itemized receipt with medical codes, submit for 50-80% PPO reimbursement.
- Notes Texas direct-access laws (patients can start without a physician referral).

### FAQ
- Accordion component built with Reka UI.
- Full keyboard support (arrow keys, Enter, Space).

### Footer
- Hours, location, parking details, and legal disclaimers.

---

## Booking funnel (`/book`)

A 4-step wizard that keeps state in memory and reads URL query parameters.

### Step 1: Pick a service
- User selects from 4 services with prices ($95 to $195) and session lengths (45 to 75 min).
- Reads `?service=` from the URL on mount.

### Step 2: Choose doctor, date, and time
- Doctor selector (any doctor or pick Vance, Rostova, or Hayes).
- Custom calendar using `@internationalized/date` and Reka UI.
- Sundays are disabled because the clinic is closed.
- Time slots split into morning and afternoon blocks.
- Top banner shows a running summary of the choices made so far.

### Step 3: Patient details
- Inputs for name, email, and phone.
- Dropdown for injury type (ACL, rotator cuff, spine, etc.).
- Checkboxes for first-time visitor and doctor referral.

### Step 4: Confirmation
- Generates a random reference code (`#APX-xxxxx`).
- Copy buttons for the reference code and clinic address, with a temporary "Copied" label.
- "Download Calendar Invite" builds a valid `.ics` file in the browser with dates, doctor name, and parking notes.
- "Add to Google Calendar" opens a pre-filled Google Calendar event.
- Includes print styles if someone wants a paper copy.

---

## Technical details

- **Framework:** Nuxt 4 running in compatibility version 5.
- **Styling:** Tailwind CSS v4 using CSS variables and theme tokens. No heavy shadow effects; layout relies on borders and background contrast.
- **Primitives:** Reka UI for the calendar, accordion, selects, and checkboxes.
- **Code standards:** Strict TypeScript, zero build warnings, zero ESLint errors.
- **Build output:** Static prerender via Nitro targeting Cloudflare Pages.
- **SEO:** Structured data (`MedicalBusiness` and `FAQPage` JSON-LD) configured through `@nuxtjs/seo`.

---

## 60-second live demo steps

1. Start at `/`. Click "Explore Post-Op Protocol & Book" under the first service.
2. Note that `/book` opens with "Post-Op Surgical Rehabilitation" pre-selected.
3. Click "Continue to Date & Time". Pick a date on the calendar and pick a time slot.
4. Show that Sundays cannot be clicked.
5. Click "Continue to Patient Info", type in test info, and submit.
6. On the confirmation screen:
   - Click "Copy Reference" to show the clipboard feedback.
   - Click "Download Calendar Invite" to show the browser-generated `.ics` file.
