# Brize boutique landing page

A Hebrew-first, bilingual demo website for Brize, a family women's boutique in
Gan Ha'ir, Tel Aviv. The page is intentionally in preview mode: unfinished
business details and generic editorial imagery are visibly marked as demo
content, and contact actions remain disabled until verified details are added.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local URL. For a production check:

```bash
npm test
npm run build
```

The static production output is written to `dist/`.

## Content and configuration

All business details, hours, bilingual copy, demo flags, and image metadata live
in `src/content.ts`.

- Update matching `he` and `en` values together so the language switch remains
  complete.
- Keep customer-facing claims factual and verified. Do not add price, size, or
  inventory claims without confirmation.
- Replace the title and description strings in both languages; the app updates
  page and Open Graph metadata when the visitor switches languages.
- `business.isDemo` should stay `true` throughout content preparation.

## Replace the demo imagery

The temporary files are in `public/images/` and are referenced by `images` in
`src/content.ts`. They are AI-generated, generic editorial images and do not
represent Brize's current inventory.

1. Add approved Brize photographs to `public/images/` using web-friendly names.
2. Update each `src` and its descriptive Hebrew and English `alt` text in the
   centralized `images` object.
3. Replace the visible demo-image disclosure only after every temporary image is
   gone and the owner has approved the real photography.
4. Optimize images for the web before launch, preserving mixed portrait and
   landscape crops for responsive layouts.

## Activate contact actions safely

Contact actions are disabled by design. Do not use fabricated or test numbers.

1. Verify the real phone number, WhatsApp number, and map URL with the owner.
2. Enter the phone in international dialable format and WhatsApp as digits only
   in `business` inside `src/content.ts`.
3. Add the exact map URL.
4. Keep `contactEnabled: false` while reviewing the rendered links.
5. After a deliberate manual review, set `isDemo: false` and
   `contactEnabled: true`.
6. Test phone, WhatsApp, and directions on mobile and desktop. Confirm each link
   reaches Brize before publishing.

The code requires both flags and a non-empty destination, so clearing a value
automatically returns that action to disabled behavior.

## Pre-launch content checklist

- [ ] Real phone number and real WhatsApp number, both owner-verified
- [ ] Exact location inside Gan Ha'ir and an approved map link
- [ ] Regular opening hours
- [ ] Friday opening hours
- [ ] Holiday and holiday-eve hours or a confirmed update policy
- [ ] Approved owner portrait
- [ ] Storefront photographs
- [ ] Interior photographs
- [ ] 6–10 representative clothing photographs in mixed portrait and landscape orientations
- [ ] Confirmed store history, including language approved for "decades"
- [ ] Verified clothing categories and size range
- [ ] Approved social links
- [ ] Any future logo files and usage guidance
- [ ] Any future domain

## Deployment preparation

This repository does not configure hosting or purchase a domain. Before choosing
a provider:

1. Complete the checklist above and remove every demo disclosure only when true.
2. Run `npm test` and `npm run build` from a clean installation.
3. Manually test Hebrew/RTL and English/LTR at narrow mobile and wide desktop
   widths.
4. Check keyboard navigation, visible focus, heading order, image alternatives,
   contrast, link destinations, titles, descriptions, and social preview data.
5. Publish the generated `dist/` directory using the separately approved hosting
   process.
