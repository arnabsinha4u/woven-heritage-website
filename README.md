# Woven Heritage

Static Astro site for Cloudflare Pages.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

## Add New Images

Put images here:

- product images: `public/images/products/`
- editorial images: `public/images/editorial/`
- artisan images: `public/images/artisans/`

Use lowercase kebab-case names only.

Examples:

- `wildflower-bloom.jpg`
- `wildflower-bloom-detail-2.jpg`
- `maria.jpg`

## Add a New Product

1. Upload the images to `public/images/products/`
2. Create a new file in `src/content/products/`
3. Name the file with the product slug, for example:

```text
src/content/products/handwoven-lotus.md
```

4. Add frontmatter like this:

```md
---
slug: handwoven-lotus
id: WH-FLWR-006
title: Handwoven Lotus
subtitle: Botanical cotton bloom with a softly structured silhouette
collection: Woven Heritage
price_label: "$48 study piece"
hero_image: /images/products/handwoven-lotus.jpg
alt: Handwoven lotus bloom resting on a neutral linen surface.
gallery:
  - src: /images/products/handwoven-lotus.jpg
    alt: Handwoven lotus bloom resting on a neutral linen surface.
    slot: 1
  - src: /images/products/handwoven-lotus-detail-2.jpg
    alt: Close-up of the lotus petals showing layered hand-shaped stitch work.
    slot: 2
  - src: /images/products/handwoven-lotus-archive-3.jpg
    alt: Archive texture image for the lotus piece.
    slot: 3
materials:
  - Organic cotton
  - Botanical dye
summary: A sculptural floral piece designed as an heirloom study.
story:
  - First story paragraph.
  - Second story paragraph.
technique:
  - First technique paragraph.
  - Second technique paragraph.
featured: false
sort_order: 6
list_name: woven_heritage_collection
archive_note: Short archive note shown on the detail page.
making_window: 1-2 weeks reference lead time
quote: ""
---
```

This creates:

```text
/products/handwoven-lotus
```

## Show The Product On Home or Collection

Edit `src/data/site.ts`.

- Home cards: add the slug to `homeContent.featuredSlugs`
- Collection large card: set `collectionContent.featureSlug`
- Collection small cards: add the slug to `collectionContent.listSlugs`

The slug in `site.ts` must exactly match the `slug` in the product file.

## Gallery Slots

- `slot: 1` = main product image
- `slot: 2` = supporting image on the detail page
- `slot: 3` = archive image in the values section

## Quick Checklist

1. Upload image files to the right folder
2. Keep names lowercase and kebab-case
3. Create `src/content/products/<slug>.md`
4. Match `slug` and image paths exactly
5. Update `src/data/site.ts` if the product should appear on Home or Collection
6. Run `npm run build`
