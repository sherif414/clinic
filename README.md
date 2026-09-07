# Apex Sports & Physical Therapy

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.5-00DC82?style=flat&logo=nuxtdotjs&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.3-38B2AC?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Reka UI](https://img.shields.io/badge/Reka_UI-Headless-18181B?style=flat)](https://reka-ui.com)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed-Cloudflare_Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=flat)](https://www.w3.org/WAI/WCAG21/quickref/)

A modern web application and appointment scheduling platform engineered for **Apex Sports & Physical Therapy**, an elite out-of-network sports medicine practice based in Austin, Texas.

Designed and built as a **frontend engineering showcase piece**, highlighting modern design systems, headless accessible primitives, complex stateful booking funnels, and sub-second edge performance.

> 📖 **Read the in-depth breakdown:** [Full Case Study (CASE_STUDY.md)](CASE_STUDY.md)  
> 💼 **Freelance materials & pitch templates:** [Freelance Toolkit (FREELANCE_TOOLKIT.md)](FREELANCE_TOOLKIT.md)

---

## 🌟 Key Highlights & Engineering Features

### 1. Interactive 4-Step Booking State Machine (`/book`)
- **Service Selection:** Dynamic pricing, duration badges, and clinical feature tags.
- **Clinician & Time Matching:** Specialist credential filtering, Central Timezone calculation, and custom calendar date picker built with `@internationalized/date`.
- **Intake & Triage Validation:** Responsive form collecting injury details, surgical history, and direct-access authorization flags.
- **Confirmation & Calendar Export:** Native RFC 5545 `.ics` file generation, direct Google Calendar web intent links, and one-click clipboard copying.
- **Bi-directional Deep Linking:** Marketing buttons seamlessly link to pre-selected services and specialists (e.g. `/book?service=post-op&clinician=vance`).

### 2. Design System: "The Performance Sanctuary"
- **Authoritative Editorial Palette:** Alpine Forest Pine (`#1B382B`), Terracotta Clay (`#C25E3E`), and Warm Bleached Linen (`#F9F8F6`).
- **Pure Flat Tonal Layering:** Zero decorative drop shadows; depth is achieved via tonal shifts (`bg-white` over `bg-linen`) and crisp 1px borders (`#EAE6DF`).
- **Typographic Pairing:** Newsreader serif for editorial gravitas and Plus Jakarta Sans for crisp, accessible UI controls.
- Documented in full in [DESIGN.md](DESIGN.md).

### 3. Accessible Headless Primitives
- Built on **Reka UI** with complete keyboard navigation, ARIA landmarks, and focus management across:
  - `UiCalendar`: Month navigation, disabled Sunday slots, keyboard-driven day selection.
  - `UiAccordion`: Expandable FAQ and service disclosure items.
  - `UiSelect` & `UiCheckbox`: Accessible form controls.

### 4. Technical SEO & Edge Performance
- Prerendered static deployment via Nitro on **Cloudflare Pages**.
- Structured JSON-LD schema (`MedicalBusiness` and `FAQPage`) generated using `@nuxtjs/seo`.
- Sub-second First Contentful Paint and zero Cumulative Layout Shift (CLS).

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com) with Vue 3 (Nuxt 5 compatibility mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Headless UI:** [Reka UI](https://reka-ui.com) & `@internationalized/date`
- **Icons:** `@nuxt/icon` with Lucide icon sets
- **Typography:** Newsreader (display serif) and Plus Jakarta Sans (body sans) via Google Fonts
- **SEO & Schema:** `@nuxtjs/seo` with `nuxt-schema-org`
- **Type Safety & Quality:** TypeScript strict mode, ESLint (`@nuxt/eslint` v10) — **0 errors, 0 warnings**
- **Hosting / Edge:** Cloudflare Pages via Nitro static preset

---

## 📁 Project Structure

```
clinic/
├── app/
│   ├── assets/css/        # Tailwind v4 theme configuration & design tokens
│   ├── components/
│   │   ├── booking/       # Multistep booking funnel (steps 1–4, summary ribbon)
│   │   │   ├── BookingStepService.vue
│   │   │   ├── BookingStepDateTime.vue
│   │   │   ├── BookingStepPatient.vue
│   │   │   ├── BookingStepConfirmed.vue
│   │   │   ├── BookingStepper.vue
│   │   │   └── BookingSummaryRibbon.vue
│   │   ├── ui/            # Headless UI primitives (Calendar, Accordion, Select, Checkbox)
│   │   ├── AppHeader.vue  # Sticky header with mobile navigation sheet
│   │   └── AppFooter.vue  # Structured clinic footer & practice metadata
│   ├── composables/       # Shared state composables (useMobileNav, etc.)
│   ├── pages/
│   │   ├── index.vue      # Main marketing showcase & clinical credentials
│   │   └── book/index.vue # Interactive appointment scheduler
│   ├── types/             # TypeScript models (ClinicalService, Clinician, PatientForm)
│   └── utils/             # Clinic configuration, hours, address, and pricing
├── public/                # Static assets and brand SVG logos
├── CASE_STUDY.md          # Comprehensive frontend portfolio case study
├── FREELANCE_TOOLKIT.md   # Pitch templates, Loom scripts, and client FAQs
├── DESIGN.md              # Complete design system tokens and visual guidelines
├── PRODUCT.md             # Product positioning, user personas, and operating scope
└── nuxt.config.ts         # Nuxt modules, Nitro prerender routes, and build settings
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- pnpm 11+

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/sherif414/clinic.git
cd clinic

# Install dependencies
pnpm install

# Start development server at http://localhost:3000
pnpm dev
```

### Verification & Quality Checks
```bash
# Run strict TypeScript check (0 errors)
pnpm typecheck

# Run ESLint (0 errors, 0 warnings)
pnpm lint
```

### Production Build & Local Edge Preview
```bash
# Generate static production build
pnpm build

# Preview static output
pnpm preview

# Or preview locally via Cloudflare Wrangler
pnpm preview:cf
```

---

## 📄 License & Attribution

Designed and engineered by [Sherif](https://github.com/sherif414) as a frontend showcase project. Code released under the [MIT License](LICENSE).
