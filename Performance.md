🚀 Frontend Performance & UX Optimization Guide

Stack: React + TypeScript
Scope: Components, Features, Pages, Layout Architecture
Goal: Make UI feel instant, responsive, and enterprise-grade.

1️⃣ Performance Philosophy

Speed is not just load time — it is perceived responsiveness.

Users judge performance by:

First visual feedback

Interaction latency

Layout stability

Transition smoothness

Target Core Web Vitals:

FCP < 1.2s

LCP < 2.0s

CLS < 0.1

INP < 200ms

TTI < 2.5s

2️⃣ Architecture-Level Optimizations
2.1 Code Splitting (Mandatory)

Use route-based and feature-based splitting.

const ProductPage = React.lazy(() => import("@/pages/ProductPage"));

Use Suspense with skeleton (never spinner-only).

2.2 Folder Strategy

Structure by feature:

/features
   /auth
   /home
   products

Each feature:

Components

Hooks

Types

Tests

This reduces bundle coupling and improves tree shaking.

2.3 Avoid Large Global State

Use context carefully.

Avoid global state updates per keystroke.

Prefer local state where possible.

Use memoization for derived state.

3️⃣ Perceived Performance Optimization
3.1 Replace Spinners with Skeletons

Use layout-matching skeletons.

Bad:

<Spinner />

Good:

<ProductCardSkeleton />

Rules:

Match exact layout

Animate subtly

Replace individually, not all at once

3.2 Optimistic UI Updates

For:

Add to cart

Wishlist

Quantity change

Delete item

Update UI instantly → sync with backend → rollback on failure.

setCart(prev => [...prev, product]);
3.3 Instant Interaction Feedback

Button press must react in < 50ms.

Use:

transform: scale(0.97)

opacity change

active state styling

Avoid delayed click handlers.

4️⃣ Rendering Performance
4.1 Prevent Unnecessary Re-renders

Use:

React.memo

useMemo

useCallback

Keyed lists correctly

Example:

export default React.memo(ProductCard);
4.2 Avoid Inline Objects in JSX

Bad:

<div style={{ marginTop: 10 }} />

Good:
Use class or memoized style object.

4.3 Virtualize Large Lists

For product grids > 50 items:

Use:

react-window

react-virtualized

Render only visible items.

5️⃣ Image Optimization
5.1 Use Modern Formats

Prefer:

WebP

AVIF

Fallback when needed.

5.2 Always Define Dimensions
<img width="300" height="300" />

Prevents layout shift (CLS).

5.3 Lazy Load Below Fold
<img loading="lazy" />
6️⃣ Navigation Speed
6.1 Prefetch On Hover

Prefetch product data when user hovers product card.

6.2 Route-Level Preloading

If using modern router, enable route prefetch.

6.3 Cache API Responses

Use:

React Query

SWR

Enable:

stale-while-revalidate

background refetch

7️⃣ Bundle Optimization
7.1 Analyze Bundle

Use:

npm run build
npx source-map-explorer

Remove:

Unused icon packs

Large utility libraries

Entire lodash imports

Use:

import debounce from "lodash/debounce";

Not:

import _ from "lodash";
7.2 Avoid Heavy UI Libraries

Overbuilt UI frameworks increase parse time.

Audit dependency size regularly.

8️⃣ CSS & Animation Best Practices

Use GPU-accelerated properties only:

Good:

transform

opacity

Avoid:

height

width

margin

top

Animation duration:

100–250ms ideal

Never exceed 400ms

Use ease-out curves.

9️⃣ Avoid Layout Shift (CLS)

Always reserve space for:

Product images

Banners

Promo sections

Dynamic content

Never inject content above existing elements.

🔟 Reduce Main Thread Blocking

Avoid:

Large JSON parsing on main thread

Heavy synchronous loops

Expensive calculations in render

Move heavy logic outside component body.

1️⃣1️⃣ Input Performance

Search bars:

Debounce API calls (300ms)

Avoid re-rendering entire page

Memoize search results

1️⃣2️⃣ API Performance Rules

Frontend depends on backend performance.

Ensure:

Pagination

Field-level selection

Compressed responses

Proper caching headers

Avoid:

Returning full product description in listing endpoint

Over-fetching relations

1️⃣3️⃣ Progressive Loading Strategy

Load in this order:

Layout shell

Header

Above-fold products

Images

Recommendations

Analytics

Analytics must never block rendering.

1️⃣4️⃣ Micro-Interactions That Improve Perceived Speed

Button ripple effect

Hover lift effect

Subtle card elevation

Smooth route transitions

Progress bars for checkout steps

Study UX patterns used by:

Amazon

Shopify

Stripe

Observe:

Minimal animation

Instant feedback

Predictable UI

No blocking transitions

1️⃣5️⃣ Core Web Vitals Monitoring

Install:

Lighthouse

Web Vitals extension

Track:

FCP

LCP

CLS

INP

Optimize based on real metrics, not assumptions.

1️⃣6️⃣ Production Build Checklist

Before deploy:

 Run bundle analyzer

 Remove console logs

 Enable gzip/brotli

 Verify image compression

 Check Lighthouse score

 Test on low-end mobile device

 Test 3G throttling

1️⃣7️⃣ What Makes UI Feel Slow (Common Mistakes)

Full page reloads

Spinner-only loading

Large JS bundles

Blocking animations

Delayed button feedback

Layout shifts

Overuse of shadows & blur effects

Massive DOM trees