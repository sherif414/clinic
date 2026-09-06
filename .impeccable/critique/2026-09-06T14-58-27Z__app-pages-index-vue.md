---
target: homepage
total_score: 27
max_score: 32
na_heuristics: 7, 10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\projects\\clinic\\app\\pages\\index.vue"
target_fingerprint: "sha256:44c70b5c4449663a65a5fec8f38ec25be980ba8d6a7a6802c48ee20c6461b1de"
target_path: "C:\\projects\\clinic\\app\\pages\\index.vue"
timestamp: 2026-09-06T14-58-27Z
slug: app-pages-index-vue
---
Method: dual-agent (A: 99fbff3a-95d8-483c-9821-a201bfc5e216 · B: 46619a92-d5d5-4963-b454-357c7375fff5)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | Visibility of System Status | 3 | Real-time clinic hours active; sticky nav maintains position. Deducted for static mock "Today, 3:30 PM" slot badge. |
| 2 | Match System / Real World | 4 | Excellent translation of doctoral concepts (ICD-10, CPT, dynamometry, directional preference) into patient-friendly recovery language. |
| 3 | User Control and Freedom | 4 | Esc/backdrop dismissal on mobile drawer; scroll-lock cleanup; predictable anchor links with smooth scroll offsets. |
| 4 | Consistency and Standards | 3 | Container radii and flat tonal depth are strictly disciplined. Deducted: Card 2 links to `initial_eval` despite "Spine" label; bottom CTA button has hardcoded color class. |
| 5 | Error Prevention | 3 | Clear upfront pricing ($175–$195) and Texas Direct Access callouts eliminate insurance surprises. Deducted: lacks booking commitment reassurance microcopy. |
| 6 | Recognition Rather Than Recall | 4 | Pricing, durations, clinical inclusions, clinician credentials, and parking directions are co-located at point of action. |
| 7 | Flexibility and Efficiency | n/a | *Persuade surface mode; linear public landing page where power-user shortcuts and batch actions are not applicable.* |
| 8 | Aesthetic and Minimalist Design | 3 | Warm linen canvas with pure zero-shadow flat layering. Deducted: competing floating badges in hero right column; terracotta clay over-used on list bullets. |
| 9 | Error Recovery | 3 | Section anchor offsets (`scroll-mt-20`) prevent navigation obscuration; sticky header provides persistent recovery to telephone and booking triggers. |
| 10 | Help and Documentation | n/a | *Persuade surface mode; standalone documentation is not applicable beyond on-page interactive FAQ.* |
| **Total** | | **27 / 32** | **Good (84.4%)** |

*(Applicable maximum is 32 points across 8 scored heuristics; heuristics 7 and 10 scored n/a per Persuade mode applicability rules).*

#### Design Specificity Verdict

**LLM Assessment**:
Apex Sports & Physical Therapy's visual atmosphere succeeds in executing its "Performance Sanctuary" thesis—warm Bleached Linen (`#F9F8F6`), authoritative Alpine Forest Pine (`#1B382B`), Roman arch framing, and Newsreader serif typography reject the sterile blues, harsh whites, and plastic clutter of typical in-network physical therapy clinics. 
However, the underlying layout relies on an orthodox SaaS/agency formula: hero with dual buttons and floating badges → dark stats bar → 2×2 feature grid → 3-step explainer → 3 testimonial cards → 3 team cards → accordion FAQ → map/schedule → dark CTA banner.
Crucially, Apex positions itself around **doctoral biomechanical motion analysis, force plates, and objective return-to-sport metrics**, yet there is **zero visual demonstration of kinematic data** on the page. The site *describes* force plates and dynamometry in text bullets rather than *demonstrating* them through rich visual craft (e.g. force-vector curves, limb symmetry comparison visualizations, or motion-capture wireframes).

**Deterministic Scan**:
Deterministic scan (`impeccable detect --json app/pages/index.vue`) returned **0 syntax/rule violations** (`[]`), confirming clean code structure, correct tag hygiene, and zero deprecated attribute patterns.

**Browser Inspection (via `/browser` at `http://localhost:3000`)**:
Visual and functional audit on the live Nuxt dev server confirmed:
- Zero JavaScript console errors, zero hydration mismatches, and zero 404 asset failures.
- Interactive FAQ accordion behaves smoothly with single-open toggle and dynamic `+` / `−` icon rotation.
- Sticky header reliably maintains backdrop blur and spatial anchoring without jitter during scrolling.
- Pure flat tonal layering is respected with zero decorative drop shadows.
- Visual polish issues identified in the browser: header booking button uses `rounded-lg` rather than the system's signature pill `rounded-full`; bottom CTA button uses hardcoded `bg-[#EAE6DF]`; and hero floating overlay cards overlap the Roman arch photograph, pushing critical vertical rhythm downward.

#### Overall Impression
The page is sophisticated, serene, and clinically credible. It completely demolishes the depressing "insurance mill" vibe of conventional physical therapy. However, it currently reads as a high-end wellness spa rather than an elite, data-driven sports science clinic because its cutting-edge biomechanics diagnostics remain hidden inside paragraphs of text rather than brought to life through interactive visual evidence.

#### What's Working
1. **The "Performance Sanctuary" Materiality**: The tactile palette of warm bleached linen, deep alpine pine, and ecru border framing provides profound psychological calm to patients suffering from acute pain or post-surgical anxiety.
2. **Exemplary Financial Transparency Explainer**: The 3-step breakdown of out-of-network cash pricing, itemized medical Superbills (ICD-10/CPT), and PPO/HSA/FSA reimbursement directly dismantles the #1 barrier to booking cash physical therapy.
3. **Uncompromising DPT-Only Care Model**: Clear, repetitive reinforcement that all sessions are 100% 1-on-1 with a board-certified Doctor of Physical Therapy (with zero aides, techs, or double-booking) builds instant clinical trust.

#### Priority Issues

- **[P1] WCAG AA Contrast Failure & Terracotta Clay Over-Saturation**
  - **Why it matters**: Terracotta Clay (`#C25E3E`) on white achieves a contrast ratio of only 4.27:1 (failing WCAG AA 4.5:1 minimum for normal text), creating legibility barriers for doctor credentials (`PT, DPT, OCS`) and price badges. Furthermore, using clay on 16 mundane list checkmarks dilutes its focal power, violating the design system's 5% accent rule.
  - **Fix**: Switch text labels to `text-clay-dark` (`#8E3F27`, contrast > 6.8:1) or deep pine. Change list checkmarks to `text-pine` or `text-charcoal-muted`, reserving terracotta clay strictly for high-intent status and action highlights.
  - **Suggested command**: `/impeccable colorize`

- **[P1] Information Architecture Mismatch: Missing General Orthopedic Evaluation Card**
  - **Why it matters**: The 4 Specialty cards list *Post-Op*, *Spine*, *Running Gait*, and *Performance Recovery*. Card 2 ("Spine") routes to `/book?service=initial_eval` (Initial Clinical Assessment). Prospective athletes with acute joint injuries (knee sprains, shoulder impingement, ankle tears) see no card for their condition and risk bouncing under the false impression that Apex only treats surgical, spinal, or running cases.
  - **Fix**: Reframe Card 2 as **"Initial Sports Orthopedic Evaluation & Treatment"** ($175, 60 Min) encompassing shoulder, knee, hip, and spinal injury triage, cleanly aligning the card label with the `initial_eval` booking destination.
  - **Suggested command**: `/impeccable clarify`

- **[P2] Visual Fragmentation & False Urgency in Hero Overlay Cards**
  - **Why it matters**: The hero arch photo is flanked by two competing floating overlays: *"Next Open Slot: Today, 3:30 PM"* (top right) and *"Clinical Benchmark: 94%"* (bottom left). The floating cards fragment eye tracking away from the primary CTA, block the Roman arch photograph, and the static "3:30 PM" slot feels like an artificial marketing widget when clicked.
  - **Fix**: Remove the floating "Next Open Slot" card. Integrate the 94% clinical benchmark metric cleanly into the Alpine Pine stats ribbon or anchor it as an editorial caption beneath the arch frame.
  - **Suggested command**: `/impeccable layout`

- **[P2] High-Stakes Commitment Hesitation on Booking Triggers**
  - **Why it matters**: Out-of-pocket healthcare costs ($175–$195) induce immediate friction. Patients hesitating on "Book Assessment" fear that clicking will demand upfront credit card payment or lock them into an irreversible charge.
  - **Fix**: Add a subtle reassurance microcopy string beneath the hero CTA buttons and bottom banner: *"No upfront payment required to reserve · Free cancellation up to 24h · Direct out-of-network Superbill provided"*.
  - **Suggested command**: `/impeccable polish`

#### Persona Red Flags

- **Jordan (Confused First-Timer)**:
  - *Red flag 1*: Scans the 4 specialty cards for acute basketball knee pain. Sees only "Post-Op", "Spine", "Running Gait", and "Recovery". Jordan assumes Apex cannot evaluate a general joint injury and prepares to leave.
  - *Red flag 2*: Encounters the "$175 · 60 Min" price chip before reaching the Superbill explanation, experiencing immediate sticker shock compared to an in-network $30 copay.
  - *Red flag 3*: Primary "Book Assessment" button lacks reassurance that payment is handled at the clinic, inducing checkout abandonment.

- **Alex (Impatient Power User / Athlete)**:
  - *Red flag 1*: Clicks the floating hero card *"Next Open Slot: Today, 3:30 PM"* expecting an interactive schedule modal or quick-booking slot. The card is completely inert, creating immediate friction.
  - *Red flag 2*: Tries to click Dr. Rostova's doctor card to book with her directly. The large card surface is non-interactive; only the tiny text link at the very bottom responds to clicks.

- **Riley (Deliberate Stress Tester)**:
  - *Red flag 1*: Tests all 8 policy, privacy, and team links in `AppFooter.vue`. All 8 links are dead placeholders (`href="#"`), breaking production confidence.

#### Minor Observations
- **Button Radius Inconsistency**: `AppHeader.vue` line 147 uses `rounded-lg` on the desktop CTA instead of the design system's signature `rounded-full` pill button.
- **Hardcoded Color Token**: In `app/pages/index.vue` line 1085, the bottom CTA button uses hardcoded `bg-[#EAE6DF]` instead of design token `bg-linen` or `bg-white`.
- **Status Dot Color Dissonance**: Hero status badge uses a terracotta clay pulsing dot (`bg-clay`), whereas the operating hours badge uses an emerald green dot (`bg-emerald-600`).
- **Footer Copyright**: Hardcoded to `2025` instead of dynamic year.

#### Questions to Consider
1. **What if Apex replaced static cash prices with an interactive "Out-of-Pocket Superbill Calculator"?** (Letting patients select their PPO provider to see estimated net costs of $35–$65 after reimbursement would eliminate cash anxiety).
2. **What if the hero showcased a dynamic kinematic motion-capture or force-plate pressure vector visualizer?** (Demonstrating live biomechanics data rather than stock photography would immediately prove doctoral superiority).
3. **What if the 4 specialty cards were structured as a 4-phase "Return-to-Sport Roadmap"?** (Transforming passive service cards into an interactive rehabilitation journey would dramatically elevate patient engagement).
