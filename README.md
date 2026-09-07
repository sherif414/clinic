# Apex Sports & Physical Therapy

Web application and appointment booking interface for Apex Sports & Physical Therapy, an out-of-network sports medicine practice based in Austin, Texas.

The site provides clinical practice details, transparent fee-for-service pricing, and a multi-step booking flow for initial evaluations, post-operative rehabilitation, and biomechanical movement analysis.

## Features

- **Practice overview.** Detailed breakdowns of clinical specialties, doctoral staff credentials, fee schedules, and direct-access policy FAQs.
- **Interactive booking flow.** A four-step appointment scheduler at `/book` covering service selection, clinician matching, date and time slot picking, and patient intake validation.
- **Accessible UI primitives.** Accessible accordions, form controls, calendars, and badges built on Reka UI.
- **Design system implementation.** Styled according to the clinic design system documented in `DESIGN.md`, using an Alpine Forest Pine and Terracotta Clay palette, Newsreader serif headings, and Plus Jakarta Sans body copy.
- **Structured SEO.** Search engine metadata, Open Graph tags, sitemap generation, and JSON-LD `MedicalBusiness` schema using `@nuxtjs/seo`.

## Tech stack

- **Framework:** [Nuxt 4](https://nuxt.com) with Vue 3 (Nuxt 5 compatibility mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Component primitives:** [Reka UI](https://reka-ui.com)
- **Icons:** `@nuxt/icon` with Lucide icon sets
- **Typography:** Newsreader (display) and Plus Jakarta Sans (body) via Google Fonts
- **SEO and structured data:** `@nuxtjs/seo` with `nuxt-schema-org`
- **Linting and types:** ESLint (`@nuxt/eslint`) and TypeScript (`vue-tsc`)
- **Deployment target:** Cloudflare Pages via Nitro

## Project structure

```
clinic/
├── app/
│   ├── assets/css/        # Tailwind v4 theme configuration and base styles
│   ├── components/
│   │   ├── booking/       # Multi-step booking components (steps, summary ribbon)
│   │   ├── ui/            # Reusable UI primitives (buttons, selects, inputs, badges)
│   │   ├── AppHeader.vue  # Main navigation header
│   │   └── AppFooter.vue  # Clinic footer and contact details
│   ├── composables/       # Vue composables (e.g., mobile navigation)
│   ├── pages/
│   │   ├── index.vue      # Main landing page
│   │   └── book/index.vue # Appointment scheduling page
│   ├── types/             # TypeScript interfaces for booking and clinic models
│   └── utils/             # Clinic configuration, hours, address, and pricing
├── design/                # Visual reference mockups
├── public/                # Static assets, logo, and icons
├── DESIGN.md              # Design system tokens, color rules, and component specs
├── PRODUCT.md             # Product positioning, user personas, and operating scope
└── nuxt.config.ts         # Nuxt modules, Nitro prerender routes, and build settings
```

## Getting started

### Prerequisites

- Node.js 20 or higher
- pnpm 11 or higher

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development server

Start the local development server at `http://localhost:3000`:

```bash
pnpm dev
```

### Type checking and linting

Run TypeScript verification and code linting:

```bash
# Run type checks
pnpm typecheck

# Run ESLint
pnpm lint
```

## Production and deployment

### Static build

Generate the static production build:

```bash
pnpm build
```

Preview the local production build:

```bash
pnpm preview
```

### Cloudflare Pages

The application is configured to deploy to Cloudflare Pages using Nitro static prerendering.

To preview locally using Wrangler:

```bash
pnpm preview:cf
```

To build and deploy directly to Cloudflare Pages:

```bash
pnpm deploy:cf
```

## Related documentation

- [DESIGN.md](DESIGN.md): Visual design specifications, color palette, typography scales, and spacing tokens.
- [PRODUCT.md](PRODUCT.md): Clinical product scope, patient journey details, clinician roster, and constraints.
