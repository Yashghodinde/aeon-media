# AEON Media — Colour Palette & Visual Theme

**Direction:** Spacious understated luxury  
**Mood:** Warm, editorial, minimal, confident, premium  
**Status:** Approved colour direction; final production contrast checks should be performed in the implemented interface.

---

## 1. Palette Overview

AEON Media uses a restrained neutral palette. The website should feel spacious and composed, not colourful or decorative. Warm ivory and white create breathing room; champagne beige provides warmth; muted taupe adds quiet detail; deep charcoal creates legibility and contrast.

| Token | Colour | HEX | Primary role |
|---|---|---|---|
| `ivory` | Warm Ivory | `#F8F6F1` | Main page background |
| `champagne` | Champagne Beige | `#E9E0D2` | Alternate sections and soft highlight surfaces |
| `taupe` | Muted Taupe | `#C9B99F` | Fine accents, separators, subtle details |
| `charcoal` | Deep Charcoal | `#292722` | Main text, navigation, buttons, dark sections |
| `white` | Pure White | `#FFFFFF` | Cards, image frames, clean surfaces |

## 2. Colour Swatches

### Warm Ivory — `#F8F6F1`

The primary background. Use it for the majority of the website canvas. It should feel warmer and softer than stark white.

### Champagne Beige — `#E9E0D2`

The main supporting surface. Use it for alternating sections, subtle panels, selected callouts, and the softer version of the ONME highlight.

### Muted Taupe — `#C9B99F`

A restrained accent. Use it for fine lines, small visual details, quiet labels, and limited emphasis. Do not use it for long body copy on light backgrounds unless a contrast check confirms readability.

### Deep Charcoal — `#292722`

The principal text and contrast colour. Use it for headings, body text, navigation, primary buttons, and occasional dark sections. It should feel softer than pure black.

### Pure White — `#FFFFFF`

A supporting neutral for cards, image surfaces, and areas that need a clean visual break. Do not let the design drift into a stark black-and-white appearance; retain the warm ivory base.

---

## 3. Recommended Surface Distribution

These are visual guidelines, not rigid mathematical limits:

- Warm Ivory: approximately 55–65% of the visible surface area.
- Pure White: approximately 15–25%.
- Champagne Beige: approximately 10–20%.
- Muted Taupe: very limited detail use.
- Deep Charcoal: typography and selected high-contrast elements; use large charcoal surfaces sparingly.

Text is not counted as a surface-area percentage. Deep Charcoal may appear frequently as text while remaining a small share of the background area.

---

## 4. UI Colour Roles

| UI element | Default treatment |
|---|---|
| Main page background | Warm Ivory `#F8F6F1` |
| Alternate section | Champagne Beige `#E9E0D2` |
| Card background | Pure White `#FFFFFF` or Warm Ivory |
| Primary heading | Deep Charcoal `#292722` |
| Body text | Deep Charcoal `#292722` |
| Secondary text | A tested charcoal tint; do not use low-contrast taupe for long paragraphs |
| Primary button | Deep Charcoal background, Warm Ivory text |
| Secondary button | Transparent or Ivory background, Charcoal text, subtle Taupe border |
| Dividers and borders | Muted Taupe at low visual emphasis or a tested neutral tint |
| Footer | Deep Charcoal background, Warm Ivory text |
| ONME default highlight | Deep Charcoal background, Warm Ivory letters |
| ONME soft alternative | Champagne Beige background, Deep Charcoal letters |

## 5. ONME Wordmark Highlight

The wordmark is **AEON MEDIA**. Highlight the continuous letter sequence **ONME** with one rounded rectangle placed behind the letters. The highlight begins behind the “O” in AEON and ends behind the “E” in MEDIA, including the normal space between the two words.

Default treatment:

- Letters outside the highlight: Deep Charcoal.
- Highlight background: Deep Charcoal.
- Letters inside the highlight: Warm Ivory.
- Keep all letters aligned on one baseline.
- Keep the original word spacing visually clear inside the highlight.
- Use restrained corner rounding and balanced horizontal/vertical padding.

Alternative treatment for light, delicate applications:

- Highlight background: Champagne Beige.
- Letters inside the highlight: Deep Charcoal.

Do not highlight `ON` and `ME` as two separate boxes. They form one continuous highlight element. Do not turn “ON ME” into a separate tagline or alter the spelling of AEON Media.

Refer to `../assets/aeon-media-wordmark-reference.png` for the intended placement.

## 6. Typography Pairing

First pairing to test:

- **Headings:** Cormorant Garamond — editorial, elegant, expressive.
- **Body and interface:** Manrope — modern, clear, readable.

Implementation guidance:

- Use large, carefully spaced headlines with generous line height.
- Keep paragraph measure controlled; avoid full-width long lines.
- Use restrained font weights. Do not make every heading bold.
- Use uppercase sparingly for navigation, small labels, and metadata.
- Do not use more than two primary font families unless an approved brand asset requires it.
- Check font availability, loading strategy, and performance before implementation.

## 7. Layout and Spacing Theme

- Use an 8-point spacing rhythm as the base system.
- Use generous section padding; whitespace is intentional, not empty space to fill.
- Suggested desktop section padding: roughly 96–144 px, adjusted to content and viewport.
- Suggested mobile section padding: roughly 56–80 px.
- Suggested content max-width: roughly 1,200–1,360 px, with comfortable side gutters.
- Use consistent alignment and grid logic.
- Avoid placing too many cards or text blocks in one viewport.
- Let the project photography and typography carry the visual character.

## 8. Visual Restrictions

Do not introduce the following without explicit approval:

- Bright saturated accent colours.
- Neon colours.
- Multi-colour gradients.
- Decorative rainbow gradients or glass effects.
- Heavy drop shadows.
- Excessive rounded cards.
- Random colours in icons or buttons.
- Multiple unrelated font families.
- Busy textures or ornamental patterns that compete with project work.

A subtle tonal gradient between colours already in the palette may be used only if it materially improves a section and remains nearly imperceptible.

## 9. Accessibility and Contrast

- Use Deep Charcoal for important text on Warm Ivory, Champagne Beige, or White.
- Use Warm Ivory or White text on Deep Charcoal.
- Do not use Muted Taupe as the colour for long-form body text on light backgrounds without checking the contrast ratio.
- Do not rely on colour alone to communicate status, selection, errors, or interactive states.
- Test contrast for all text sizes and interactive controls against WCAG 2.2 AA as the implementation target.
- Include visible keyboard focus states that fit the palette.

## 10. CSS Tokens

The starter tokens are also provided in `../assets/aeon-media-theme.css`. Keep CSS variables as the single source of truth; avoid scattering raw hex codes throughout components.

```css
:root {
  --aeon-ivory: #F8F6F1;
  --aeon-champagne: #E9E0D2;
  --aeon-taupe: #C9B99F;
  --aeon-charcoal: #292722;
  --aeon-white: #FFFFFF;
}
```

---

## Final Direction

**Warm Ivory first. Champagne Beige for warmth. Deep Charcoal for confidence. White for breathing room. Taupe only for quiet detail.**
