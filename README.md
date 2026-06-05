# Hero Landing

Marketing site for the [Hero](https://gizatech.de) iOS app series by GizaTech.

## Apps

- Hero: German Citizenship — `/hero-einbuergerungstest`
- Hero: B2 Beruf Vokabeln — `/hero-b2-beruf`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Structure

- `app/` — Next.js App Router pages and components
- `lib/i18n/` — locale dictionaries (EN, DE, RU)
- `lib/legal/` — privacy policy and terms content
- `public/apps/` — app icons and screenshot assets

## Deploy

Built for [Vercel](https://vercel.com) with Next.js 16. Set optional App Store URL overrides in `.env.local`:

- `NEXT_PUBLIC_CITIZENSHIP_APP_STORE_URL`
- `NEXT_PUBLIC_B2_BERUF_APP_STORE_URL`
