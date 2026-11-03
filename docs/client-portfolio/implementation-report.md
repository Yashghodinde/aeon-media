# Implementation report
- `src/data/clients.ts`: single client database (15 clients, 100 reference posts); `src/data/{videos,designs}.ts` hold video/design work by client.
- Routes: `/work/clients/` (industry filters, compact list) and `/work/clients/{slug}/` for all 15 (intro, creative work we handled, brand's Instagram rail, Explore the brand, prev/next, related, CTA). Static, base-path safe, canonical per page, JSON-LD WebPage.
- Instagram posts: thumbnail-first official embeds in a side-scrolling rail; invalid URLs fall back to a link.
- Money Pandits: five requested Shorts pinned first (IndusInd, Vedanta, Tata Steel/JSW, DeepSeek ×2).
- Services: `/services/` + 7 detail pages (added Influencer & creator marketing from the YOT Creator Outreach page). Packages: `/packages/` (Foundation, Growth, Signature; rates left blank with 'Rates may change from time to time.').
- UX: home trimmed (removed duplicate sections), hero quick links, sticky /work sub-nav, compact client rows, tablet header fix.
- Tests (local export): lint/typecheck/build pass; 29 internal links resolve; no overflow at 320–1440px across 10 pages; filters, rails, embeds, lightbox, mobile menu verified.
- Not tested: real-device touch, full video playback, Lighthouse.
