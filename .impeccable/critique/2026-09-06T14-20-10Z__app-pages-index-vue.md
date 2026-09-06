---
target: app/pages/index.vue
total_score: 17
max_score: 32
na_heuristics: 7,9
p0_count: 2
p1_count: 2
target_identity: "file:C:\\projects\\clinic\\app\\pages\\index.vue"
target_fingerprint: "sha256:f62964c322e512905f3ef1ebf43925389ac1cf8f06183378fcaa177b30c092ae"
target_path: "C:\\projects\\clinic\\app\\pages\\index.vue"
timestamp: 2026-09-06T14-20-10Z
slug: app-pages-index-vue
---
Method: dual-agent (A: 56c2753f-7647-4659-8103-0304309b1a28 · B: 5dbc9ca5-98a8-44bd-8a18-2532002c1805)

### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 3 | Good status badges ("Accepting New Patients"), but "Next Open Slot: Today, 3:30 PM" is hardcoded and risks inaccurate availability. |
| 2 | Match System / Real World | 3 | Authoritative clinical vocabulary, but leans into medical jargon without plain-language translations for how patients describe pain. |
| 3 | User Control and Freedom | 3 | Smooth anchor scrolling and accessible mobile drawer with Escape/backdrop dismiss. |
| 4 | Consistency and Standards | 1 | **Critical Incoherence:** Header lists 1204 S. Congress Ave / (512) 555-0199; page lists 742 Performance Way / (555) 019-4820; conflicting operating hours; drop shadows used despite Zero Decorative Shadow Rule. |
| 5 | Error Prevention | 1 | **Broken Navigational Contracts:** Clinician cards append `?clinician=xyz` which `/book` ignores (defaults to Dr. Vance); service cards link to `/book` without setting `service` param; Maps link points to blank `maps.google.com`. |
| 6 | Recognition Rather Than Recall | 2 | Crucial logistical facts (pricing, $175 evaluation fee, superbill insurance reimbursement, session duration) are hidden from the page. |
| 7 | Flexibility and Efficiency | n/a | *Landing page / Persuade surface; expert accelerator shortcuts are not applicable.* |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined palette and Newsreader serif typography, but dense 4-item bullet lists and competing hero overlays clutter visual rhythm. |
| 9 | Error Recovery | n/a | *Persuade surface without form validation or interactive error recovery (handled in `/book`).* |
| 10 | Help and Documentation | 1 | **Missing FAQ Section:** Zero self-serve answers for critical patient friction (referral laws, insurance reimbursement, surgeon co-management, attire). |
| **Total** | | **17/32** | **Poor to Moderate — Immediate Hardening Required** |

---

### Design Specificity Verdict

**LLM Assessment:**
Apex’s design tokens (Alpine Pine, Warm Bleached Linen, Terracotta Clay) and Newsreader serif typography establish an authentic, high-end "Performance Sanctuary" aesthetic that successfully avoids generic sterile medical tropes. However, the surface execution collapses into category clichés:
- **Headline cliché:** The hero H1 *"Targeted Sports Rehab to Get You Back in the Game"* is standard physical therapy billboard marketing.
- **Biomechanical "Tell, Don't Show":** The copy cites force plates, high-speed kinematics, and Delfi BFR, but visuals rely on standard stock photos of treatment tables rather than real data artifacts (force vector graphs, limb symmetry charts).
- **Transactional widget:** The floating "Next Open Slot" overlay mimics discount booking apps rather than an elite doctoral sanctuary.

**Deterministic Scan (Assessment B):**
- **0 Critical Anti-Patterns / Errors:** Clean exit code 0; no layout overflows or invalid CSS classes.
- **9 Advisory Findings:** All clustered under `design-system-font-size`:
  - 6 instances of sub-ramp micro-type (`text-[10px]` in lines 86, 95, 454, 491, 528, 797) violating the 11px / `0.6875rem` `label` token floor.
  - 3 instances of off-ramp heading overrides (`lg:text-[42px]` in lines 179, 441, 574) bypassing the `headline` (`32px`) and `display` (`clamp(2.5rem, 5vw, 3.5rem)`) design system ramp.
- **Cross-Component Correlation:** `AppHeader.vue` and `BookingStepDateTime.vue` also exhibit `text-[10px]` drift, confirming a systematic need for typography token harmonization.

**Visual Overlays:**
Skipped; local dev server is offline (ports 3000/5173 inactive). Static AST deterministic scan completed cleanly.

---

### Overall Impression
Apex has the architectural DNA of an award-winning clinical experience—the palette, typography, and clinical certifications are world-class. However, severe content contradictions (two conflicting addresses and phone numbers), broken query-parameter handoffs to the booking engine, and the complete concealment of the cash-pay/superbill pricing model undermine user trust at the most critical conversion moments.

---

### What's Working
1. **Evocative Brand Materiality:** Deep Alpine Pine (`#1B382B`), warm linen (`#F9F8F6`), and Newsreader serif typography create a calming, high-end architectural space that completely sheds medical sterility.
2. **Outcome-Centric Clinical Proof:** Testimonials feature rigorous athletic metrics (*"98% quad symmetry before return to run"*, *"directional preference loading for L5/S1"*) rather than vague praise.
3. **Accessible Mobile Drawer Architecture:** `AppHeader.vue` implements clean keyboard escape listeners, reactive body scroll locking, and clear touch affordances.

---

### Priority Issues

#### [P0] Critical Metadata Incoherence Across Header and Page Body
- **Why it matters:** The header displays `1204 S. Congress Ave` / `(512) 555-0199`, while the page displays `742 Performance Way` / `(555) 019-4820`, with conflicting operating hours. For injured patients seeking doctoral care, mismatched clinic information looks like an abandoned business or an unfinished template.
- **Fix:** Centralize canonical clinic details (address, phone, hours, Google Maps URL) into a shared config/util and bind all header, page, and footer components to it.
- **Suggested command:** `/impeccable harden`

#### [P0] The "Cash-Based Cliff": Concealed Pricing and Insurance Model
- **Why it matters:** PRODUCT.md mandates "Transparency in Time and Cost". Anxious patients fear surprise bills and out-of-network costs. Concealing the $175 evaluation price and superbill reimbursement process until the booking form creates suspicion and drives abandonment.
- **Fix:** Add a transparent pricing banner or service price tags (`$175 • 60 Min 1-on-1`) and a 3-step Superbill reimbursement explainer on the homepage.
- **Suggested command:** `/impeccable clarify`

#### [P1] Broken Navigation Contracts Between Homepage and Booking Flow
- **Why it matters:** Clinician cards offer "Book Evaluation with Elena", linking to `/book?clinician=rostova`, but `/book` completely ignores the parameter and defaults to Dr. Vance. Specialty cards link to `/book` without setting the `service` query parameter.
- **Fix:** Update `app/pages/book/index.vue` to respect `route.query.clinician` and `route.query.service`, ensuring clicking a specialist preselects them in Step 2.
- **Suggested command:** `/impeccable adapt`

#### [P1] Missing FAQ Section (Unresolved Objections)
- **Why it matters:** Injured athletes and post-op patients have urgent logistical questions: *"Do I need an MD prescription? How do you coordinate with my surgeon? What if I'm not a pro athlete?"* Missing FAQs force users to bounce.
- **Fix:** Implement an accessible FAQ accordion addressing Texas Direct Access laws, superbills, surgeon co-management, and what to expect on visit 1.
- **Suggested command:** `/impeccable onboard`

#### [P2] Design System Violations: Prohibited Drop Shadows & Off-Ramp Typography
- **Why it matters:** `DESIGN.md` explicitly enforces the "Zero Decorative Shadow Rule" (pure flat tonal layering). `index.vue` uses `shadow-sm`, `shadow-md`, and `shadow-xl`, alongside 9 detector-flagged typography token violations (`10px` micro-copy and arbitrary `42px` desktop headings).
- **Fix:** Strip `shadow-*` utility classes, replace `10px` with the `11px` label token, and align section titles to documented heading tokens.
- **Suggested command:** `/impeccable polish`

---

### Persona Red Flags

- **Jordan (Confused First-Timer / Injured Amateur Runner):**
  *Red Flag: Athletic Intimidation.* Bombarded by "Collegiate Swimmer", "Division I", and "High-velocity cutting", Jordan assumes Apex is exclusively for elite pros and feels imposter syndrome.
- **Casey (Distracted Mobile User):**
  *Red Flag: Mobile Hero Card Collisions & Address Confusion.* On phone viewports, the two floating cards crowd the arch photo. Checking the header for the address shows South Congress, but scrolling down shows Performance Way.
- **Riley (Skeptical Athlete / Stress Tester):**
  *Red Flag: Tell, Don't Show.* The text promises force plates and kinematics, but the imagery is standard stock photography of massage and stretching. No diagnostic graphs or data reports are visible.
- **Marcus (Post-Op Surgical Patient):**
  *Red Flag: Lack of Surgeon Coordination Details.* Fresh out of ACL reconstruction, Marcus needs explicit assurance that Apex sends weekly progress notes to his orthopedic surgeon and abides by surgical protocol phases.

---

### Minor Observations
- **Hero Title Line Break:** `<span class="italic font-serif">Back in the<br>Game.</span>` breaks unnaturally between "the" and "Game.".
- **Stats Ribbon Mobile Divider:** On `grid-cols-2`, Tailwind's `divide-y` leaves an uneven top border on the second grid item.
- **Maps Link:** "Open in Google Maps" links to generic `https://maps.google.com` without a pre-filled destination query.

---

### Questions to Consider
1. If Apex's defining mission is eliminating the hurried double-booking and surprise costs of traditional clinics, why is upfront pricing ($175) withheld from the landing page?
2. Does an elite doctoral sanctuary need to rely on the industry's most clichéd sports phrase ("Back in the Game"), or should the headline lead with quiet clinical authority?
3. Why offer individual clinician booking buttons if the booking system drops everyone into Dr. Vance's calendar?
