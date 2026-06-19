This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Brand Colors

The site and the email signature share one palette, derived from the company logo
and defined as design tokens in `styles/globals.css` (`@theme`):

| Role | Hex | Usage |
| --- | --- | --- |
| Navy (primary) | `#16294C` | Headings, text, footer |
| Orange (accent) | `#F26C21` | CTAs, icons, links, dividers |
| Slate (muted) | `#5B6678` | Secondary text |
| Section | `#F3F6FB` | Light section backgrounds |

## Logo & Email Signature

### Logo location and public URL

- The logo lives in the public assets folder: `public/images/logo_final.jpg`
- The site is hosted on **Vercel** at **`https://inteka.pl/`**.
- Next.js serves everything in `public/` from the site root, so the logo is
  reachable at a clean URL:
  - **`https://inteka.pl/images/logo_final.jpg`**

### Test the logo URL

1. The site auto-deploys on Vercel (or run `npm run dev` and use `http://localhost:3000/images/logo_final.jpg`).
2. Open the URL directly in a browser — you should see only the logo image.
3. The Outlook signature image **must** point at this hosted URL. Do **not** use
   `raw.githubusercontent.com`, local file paths, or base64.

### Email signature (Outlook / Gmail / Apple Mail)

- The ready-to-copy signature is `public/email-signature.html`, also served at
  `https://inteka.pl/email-signature.html` after deployment.
- It uses table-based HTML with inline styles only (no external CSS, no JS, no
  base64), which is what email clients render reliably.

**Copy it into Outlook desktop:**

1. Open `public/email-signature.html` in a browser.
2. Fill in the `[placeholders]` (Name, Position, Company, MC#, USDOT#, Phone,
   Email, Website, Address).
3. Select everything inside the dashed orange box and copy (`Ctrl/Cmd + C`).
4. Outlook → *File ▸ Options ▸ Mail ▸ Signatures* → create a new signature →
   paste (`Ctrl/Cmd + V`) → Save.

**Outlook on the web / Gmail / iPhone Mail:** copy the same boxed region and
paste into the client's signature editor. For iPhone, set the signature on
desktop Outlook/Gmail so it syncs to mobile.

**If Outlook blocks the logo:** external images may be hidden until the recipient
clicks "Download pictures." Make sure the hosted logo URL loads, keep it on the
same domain as the website, and recipients can permanently allow images from your
domain in their trust settings.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
