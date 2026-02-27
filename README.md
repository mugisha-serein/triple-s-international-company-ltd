# Triple S International Company Ltd Frontend

Modern ecommerce frontend built with Vite, React, TypeScript, and Tailwind CSS.

## Tech stack

- Vite + React 19 + TypeScript
- React Router
- Tailwind CSS
- React Hook Form + Zod

## Available pages

- `/` Home
- `/products` Products listing with search, sorting, and filters
- `/about` About
- `/contact` Contact
- `/cart` Cart
- `/login` Login
- `/register` Register
- `/forgot-password` Forgot password
- `*` 404 fallback page

## Quick start

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Typecheck + production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Project structure

- `src/pages` route-level pages
- `src/features` feature modules (`home`, `products`, `auth`)
- `src/components` shared form/button UI
- `src/layouts` app shell (navbar + footer)
- `src/hooks/products.ts` local product dataset + product type

## Notes

- Product and auth behavior are currently frontend-only (no backend wiring yet).
- Product filters support: category, brand, price min/max, rating, in stock, and on sale.
