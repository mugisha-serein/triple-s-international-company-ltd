# Project Scan & Inclusion Checklist

## 1) Current Project Snapshot

- **Stack:** Vite + React + TypeScript + Tailwind CSS.
- **Routing:** React Router with pages for `/`, `/products`, `/login`, and `/register`.
- **Feature modules present:**
  - `home` (hero banner, featured products, categories)
  - `products` (header, toolbar, filters, grid, pagination, cards)
  - `auth` (hero section + login/register forms)
- **Global layout:** shared `Navbar` and `Footer` around all routes.
- **Data state:** product catalog is currently local mock data in `src/hooks/products.ts`.

---

## 2) What must be included for a complete MVP handover

## A. Product & business scope

1. **Final page map and route ownership**
   - Keep/confirm existing pages: Home, Products, Login, Register.
   - Add missing routed pages currently linked in UI but not implemented:
     - `/about`
     - `/contact`
     - `/cart`
     - `/forgot-password`

2. **Brand + content pack**
   - Final company name and legal text usage.
   - Logo assets (SVG/PNG variants).
   - Hero banners, category images, and product media (replace placeholders).
   - Final copy for navbar/footer/help/legal text.

3. **Product catalog definition**
   - Authoritative category list.
   - Product schema contract (price, discount, rating, stock, badge flags).
   - Product image source policy (CDN path or object storage conventions).

## B. Front-end implementation completeness

1. **Route completeness**
   - Implement route components for all currently linked paths.
   - Add 404 fallback route.

2. **Auth workflow completeness**
   - Replace placeholder submit handlers with real API integration.
   - Implement forgot-password flow.
   - Add success/error notifications for auth actions.

3. **Products feature completeness**
   - Connect filter/sort/search state to real API or centralized store.
   - Implement currently non-functional filter dimensions (price/rating/in-stock/on-sale).
   - Add loading, empty, and error states for product listing.

4. **Shared component hardening**
   - Tighten component typing where `any` or weak typing is used.
   - Add reusable UI states (disabled/loading/validation) consistently.

## C. Backend/API integration items

1. **Required endpoints to include**
   - `POST /auth/login`
   - `POST /auth/register`
   - `POST /auth/forgot-password`
   - `GET /products` (pagination, filters, sorting, search)
   - `GET /products/:id`
   - Cart endpoints (`GET/POST/PATCH/DELETE /cart`)

2. **Contracts and validation**
   - OpenAPI/Swagger spec or typed API client.
   - Error contract (field errors vs general errors).
   - Auth token and refresh flow rules.

## D. Quality + engineering guardrails

1. **Lint/test baseline**
   - Resolve current ESLint violations.
   - Add unit/component tests for auth form validation, product filtering, and pagination.
   - Add route smoke tests.

2. **Performance and accessibility**
   - Optimize heavy bundle chunks and images.
   - Ensure keyboard/focus states for interactive controls.
   - Validate semantic headings/labels and contrast ratios.

3. **Security and compliance**
   - Form input sanitization and server-side validation.
   - Privacy policy and terms links.
   - Cookie/session/security headers plan.

## E. DevOps, release, and documentation

1. **Environment + config to include**
   - `.env.example` with API base URL and feature flags.
   - Build/runtime environment matrix (dev/stage/prod).

2. **CI/CD to include**
   - Install, lint, test, build pipeline.
   - Optional preview deploy for pull requests.

3. **Project docs to include**
   - Setup instructions (install, run, build, preview).
   - Architecture overview (feature folders + route layout).
   - API integration guide.
   - Release checklist.

---

## 3) Immediate gaps observed during scan

1. **Dead navigation routes**
   - Navbar links to `/about`, `/contact`, and `/cart`, but these are not declared in router.

2. **Unimplemented auth navigation path**
   - Login page links to `/forgot-password`, but route is not present.

3. **Mock data still in use**
   - Product listing uses local placeholder records and images.

4. **Lint not clean yet**
   - Type issues currently fail ESLint.

5. **README is empty**
   - No onboarding or runbook currently documented.

---

## 4) Suggested inclusion priority (recommended order)

1. **P0:** Route completeness + 404 + remove dead links.
2. **P0:** API contracts + auth/products/cart integration.
3. **P1:** Replace placeholder data/assets and finalize content.
4. **P1:** Lint/type cleanup + baseline tests.
5. **P2:** Accessibility/performance pass.
6. **P2:** CI/CD and full documentation package.

