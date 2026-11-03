# Testing report (local static export, Chromium)
- Lint, typecheck, production build: pass.
- Horizontal overflow on `/` and `/work/` at 360, 375, 390, 414, 768, 1280: none.
- /work counts: 161 reels, 6 of 33 long videos (load more), 13 designs, 9 brands. Channel filter (Kropbook → 23). Rail scrolls (scrollLeft 657). 0 iframes before Play; Play creates a youtube-nocookie iframe (203×361 at 390px). Lightbox opens (1600px image), ArrowRight advances, Esc closes. Marquee animates. No page errors.
- Not tested: actual video playback to completion, 320/430px, real-device touch, Lighthouse, console warnings from YouTube's own iframe.
