# Netto Concrete Construction

Marketing website for **Netto Concrete Construction Corp.** — a commercial, farm &
residential concrete contractor in Watertown, NY, serving Jefferson, Lewis and
St. Lawrence counties and all of Northern New York.

Rebuilt from the previous WordPress/Divi site as a modern, fast, SEO-optimized
**Next.js** application.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS 3.4](https://tailwindcss.com)
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Project structure

```
src/
  app/                # Routes: /, /residential, /commercial, /agricultural,
                      #         /our-work, /contact  (+ sitemap, robots)
  components/         # Header, Footer, ContactForm, Gallery, CtaBand, icons…
  lib/                # site.ts (business info), services.ts, seo.ts (schema)
public/
  brand/              # Logo
  photos/             # Project & service photography
```

## Editing content

Almost everything is data-driven:

- **Business info** (phone, email, hours, service area) → `src/lib/site.ts`
- **Services & audience copy** → `src/lib/services.ts`
- **Gallery photos** → drop images in `public/photos/` and reference them in
  `src/app/our-work/page.tsx`

## Contact form

The contact form composes a pre-filled email to `info@nettoconcrete.com` and
opens the visitor's mail client — no backend required, works on day one. To
capture leads server-side instead (SES SMTP + reCAPTCHA v3), add a `POST`
handler at `src/app/api/quote/route.ts` and point `ContactForm`'s submit at it.
