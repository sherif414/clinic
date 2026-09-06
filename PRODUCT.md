# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Competitive Athletes & High Performers:** Collegiate, professional, and dedicated amateur athletes recovering from acute injuries, preparing for return-to-sport testing, or seeking biomechanical optimization.
- **Post-Operative Orthopedic Patients:** Patients recovering from surgical interventions (ACL reconstruction, rotator cuff repair, meniscus, labrum) requiring clinical co-management with surgeon protocols and objective limb symmetry validation.
- **Active Professionals:** Individuals dealing with chronic pain, spinal issues, or sports overuse injuries who demand doctoral-level 1-on-1 attention, transparent pricing, and rapid recovery over high-volume insurance clinics.

## Product Purpose

Apex Sports & Physical Therapy delivers evidence-based clinical rehabilitation, biomechanical motion analysis, and dedicated 1-on-1 sports physical therapy. It exists to provide an elite, doctoral-level standard of care that eliminates the rushed, fragmented experience of typical in-network clinics. Success means guiding patients through measurable milestones, pain reduction, and safe, confident discharge to full competitive activity or daily performance.

## Positioning

Unlike conventional in-network clinics that double-book appointments and rely on aides, Apex operates strictly on a 1-on-1 Doctor of Physical Therapy model with 45–75 minute comprehensive evaluations, motion capture diagnostics, force plate baseline testing, and transparent out-of-network pricing (superbills provided). Care is sports-medicine specialized, protocol-co-managed with orthopedic surgeons, and backed by objective return-to-sport criteria rather than arbitrary insurance visit limits.

## Operating Context

- **Patient Journey:** Prospective patients discover the clinic through marketing surfaces (`/`), evaluate clinical credentials, treatment philosophies, and benchmark outcomes, and book evaluations directly via a 4-step scheduling flow (`/book`).
- **Clinical & Financial Model:** Cash-based / out-of-network fee-for-service model. Superbills are provided for patients to seek direct reimbursement from PPO/HSA/FSA accounts.
- **Clinical Facility & Technology:** Doctoral care delivered with specialized rehabilitation equipment, high-speed gait analysis cameras, force vector plates, Blood Flow Restriction (BFR) cuffs, and targeted recovery modalities (Normatec 3, dry needling).

## Capabilities and Constraints

- **Confirmed Capabilities:**
  - High-converting marketing landing page (`/`) featuring clinical benchmark stats, specialties, clinician profiles, patient testimonials, and FAQs.
  - Multi-step booking flow (`/book`) with service selection, specialist and slot selection, patient intake validation, and booking reference confirmation.
  - Modern web application built with Nuxt 4 (Vue 3, TypeScript), Tailwind CSS v4, and Reka UI.
- **Constraints & Boundaries:**
  - No direct in-app insurance processing (operates via Superbills).
  - Scope is currently focused on patient acquisition, clinical discovery, and frictionless appointment booking. Backend EMR integration and dedicated patient portal accounts are out of current scope (explicitly marked for potential future phase).

## Brand Commitments

- **Name:** Apex Sports & Physical Therapy (Apex Clinical Performance & Human Rehab).
- **Voice:** Clinically rigorous, empowering, doctoral, concise, and focused on athletic performance without sounding medicalized or sterile.
- **Existing Visual Assets & Identifiers:**
  - Logo: `public/logo.svg`.
  - Design reference: `design/Homepage.png`.

## Evidence on Hand

- Existing codebase and components under `app/`.
- Concrete clinical services and pricing: Initial Clinical Assessment & Treatment ($175/60 min), Post-Op Surgical Rehabilitation ($175/60 min), Biomechanical Running & Gait Analysis ($195/75 min), Performance Recovery & Tissue Modulation ($95/45 min).
- Clinician roster: Dr. Marcus Vance (PT, DPT, OCS), Dr. Elena Rostova (PT, DPT, SCS), Dr. Julian Hayes (PT, DPT, FAAOMPT).
- Note: Incumbent statistics (e.g. 94% discharge goal achievement, 4.9/5.0 from 340+ athletes) represent established copy; future work must preserve confirmed truth and not fabricate additional external claims or clinical statistics.

## Product Principles

- **Doctoral Rigor Over Generic Therapy:** Every service is doctor-led, evidence-backed, and measurable (force plates, biomechanics, objective return-to-sport metrics).
- **Transparency in Time and Cost:** Upfront pricing, dedicated 1-on-1 durations, and no hidden insurance billing surprises.
- **Empowerment Through Clarity:** Demystify injury recovery with clear clinical roadmaps, surgeon protocol alignment, and direct self-service booking.
- **Athletic Standard of Care:** Treat every patient—from amateur runner to post-op reconstructive patient—with the care quality typically reserved for elite sports programs.

## Accessibility & Inclusion

- Accessible contrast and clear visual hierarchy across all typography and data metrics.
- Keyboard navigability and ARIA compliance throughout the multi-step booking process (`/book`) and interactive components (Reka UI base).
- Responsive, touch-friendly touch targets across mobile and desktop viewports.
