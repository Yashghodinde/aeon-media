# AEON Media — Portfolio Website Specification

**Website type:** Premium creative-company portfolio and enquiry website  
**Primary objective:** Build trust, demonstrate capability, and generate relevant enquiries  
**Design direction:** Spacious understated luxury; editorial, warm, minimal, confident  
**Primary CTA direction:** “Tell us about your brand” / “Start a conversation”

---

## 1. Experience Strategy

The website should be designed around the visitor's questions, not around the company's internal department list.

A visitor should be able to understand within the first screen:

1. What AEON Media can help their brand achieve.
2. Which kinds of brands and work the company understands.
3. Whether the quality of work feels credible.
4. Where to view relevant examples.
5. How to start a conversation.

### Experience principles

- Benefit-first, not service-first.
- Show actual work early.
- Explain the process to reduce uncertainty.
- Keep the page spacious and easy to scan.
- Use motion carefully and consistently.
- Make enquiry actions easy to find without making the site feel pushy.

---

## 2. Recommended Sitemap

Build **five main pages** plus project-detail pages generated from one reusable case-study template.

| Route | Page | Main purpose |
|---|---|---|
| `/` | Home | Position the brand, communicate client value, show selected work, and invite enquiry |
| `/work` | Work | Present the portfolio in a curated, browsable way |
| `/work/[slug]` | Project detail | Explain each selected project with context, work, and evidence |
| `/services` | Services | Explain what clients gain and which capabilities support those gains |
| `/about` | About | Build confidence through philosophy, collaboration, and process |
| `/contact` | Contact | Make the next step clear and collect useful enquiry details |

Do not create a separate page for every industry at launch. Show clothing/apparel, jewellery, and interior design experience within Home and Work. Add dedicated industry pages later only if enough original content exists.

---

## 3. Page-by-Page Specification

### 3.1 Home — `/`

**Goal:** Make the visitor understand the value of AEON Media quickly and feel confident enough to explore the work.

Recommended section order:

1. **Navigation** — Wordmark, Work, Services, About, Contact, and one restrained CTA.
2. **Hero** — A strong client-benefit headline, short explanation, primary and secondary action, and one striking visual or curated project composition.
3. **Trust/experience strip** — Relevant industries or approved client names/logos. Use logos only with permission; never invent client logos.
4. **Value proposition** — Three or four client gains, such as a stronger brand presence, better product presentation, consistent content, and more time to focus on the business.
5. **Selected work** — A curated selection of actual projects. Prioritise quality and relevance over quantity.
6. **What changes for the client** — Explain the value of having planning, creative work, production, and social support handled in a coordinated way.
7. **How collaboration works** — Understand, plan, create, prepare, publish, review.
8. **Industry experience** — Clothing/apparel, jewellery, and interiors, only where actual work is available.
9. **Testimonial or project proof** — Genuine quote or case-study result with permission. Omit the section if credible proof is not yet available; do not fill it with fabricated content.
10. **Closing CTA** — Invite the visitor to explain what they are building and what support they need.
11. **Footer** — Wordmark, navigation, contact and approved social links.

Working hero copy direction:

**Your vision, brought to life with purpose.**

“Creative direction, content, and social media support shaped around your brand—so your digital presence feels more considered, consistent, and true to what you are building.”

Suggested actions:

- Primary: “Explore our work”
- Secondary: “Tell us about your brand”

Do not overfill the hero with a long service list.

### 3.2 Work — `/work`

**Goal:** Prove capability through actual projects.

Requirements:

- Lead with a short benefit-led introduction.
- Use a curated responsive project grid with strong image ratios and consistent art direction.
- Allow simple category filters only when there are enough projects to make filtering useful.
- Possible categories: Clothing/Apparel, Jewellery, Interiors, and Other.
- Each card should show project name, industry, and a concise description of the work or outcome.
- Use real project images or clearly marked temporary placeholders during development.
- Do not use stock imagery as if it were AEON Media's own client work.
- Do not invent client names, brand marks, or project results.

### 3.3 Project detail — `/work/[slug]`

Use a repeatable case-study template.

Recommended content structure:

1. Project title and brand/category.
2. Hero visual.
3. Brief: what the client wanted or needed.
4. Objective: what the project was intended to achieve.
5. Creative direction: how references, brand identity, and client vision informed the approach.
6. Execution: the agreed work completed.
7. Gallery/video section.
8. Outcome: real deliverables and verified results, if available.
9. Client feedback, if approved and genuine.
10. Related projects.
11. Enquiry CTA.

Keep project information in structured data rather than hard-coding every case-study page. Include an explicit `proofStatus` or content review marker in internal project data so unverified claims cannot accidentally appear in production.

### 3.4 Services — `/services`

**Goal:** Explain the benefits clients receive, with services as supporting capabilities.

Recommended benefit-led sections:

- **A more consistent brand presence** — supported by social media management, planning, and publishing support.
- **A clear direction for what comes next** — supported by content research, references, and content calendars.
- **Products presented with greater care** — supported by shoots, creative direction, editing, and post-production.
- **Content that reflects your brand** — supported by collaborative planning and tailored creative execution.
- **More opportunities to reach relevant audiences** — supported by considered Meta Ads and Instagram promotion.

For each section include:

1. Client benefit headline.
2. One short explanation of why the benefit matters.
3. The capabilities that support it.
4. A relevant project example or visual, if available.
5. A small CTA.

Do not make the page feel like a price-list of tasks. Do not publish package pricing unless supplied and approved.

### 3.5 About — `/about`

**Goal:** Make the company feel human, thoughtful, and dependable.

Include:

- A concise introduction to AEON Media.
- The belief that the client's vision is the starting point.
- The way AEON Media combines client direction with its own creative experience.
- A clear description of the working process.
- Team information only when real names, roles, and approved photographs are supplied.
- Actual behind-the-scenes material if available.

Avoid generic paragraphs about being passionate, world-class, or the best. Use specific explanations of how the company works.

### 3.6 Contact — `/contact`

**Goal:** Reduce friction and help a potential client start a useful conversation.

Recommended opening:

“Tell us what you're building. We'll take the time to understand your brand, your goals, and the support you're looking for.”

Suggested form fields:

- Name.
- Work email.
- Brand/company name.
- Website or social profile (optional).
- Industry/category.
- What support are you looking for? (multi-select or free text).
- Tell us about your project (free text).
- Preferred contact method (optional).

Requirements:

- Explain what happens after submission only if the response process is confirmed.
- Include validation, clear error states, success feedback, and spam protection.
- Do not invent a phone number, email address, or office address.
- Do not store or send form data to an external service until the destination and consent requirements are confirmed.

---

## 4. Navigation and Conversion

### Desktop navigation

- Wordmark on the left.
- Work, Services, About, Contact on the right.
- One clear CTA, such as “Start a conversation”.
- Keep the navigation uncluttered.

### Mobile navigation

- Compact wordmark.
- Accessible menu control with clear open/close states.
- Large tap targets and simple vertical links.
- No tiny text or hover-only interactions.

### Calls to action

Use a small, consistent CTA vocabulary:

- “Explore our work”
- “See the project”
- “Tell us about your brand”
- “Start a conversation”

Use action labels that explain what happens next. Avoid vague labels such as “Click here”.

---

## 5. Logo and Wordmark Implementation

The displayed wordmark is **AEON MEDIA**.

### ONME highlight specification

- Keep the full name on one line where the available width permits.
- Highlight the exact sequence `ONME` with one rounded rectangle.
- The rectangle starts behind the `O` and ends after the `E`.
- It spans the normal space between the two words, so the highlight visually joins `ON` and `ME`.
- `AE` remains outside the left edge; `DIA` remains outside the right edge.
- The highlighted letters remain part of the main wordmark; they are not a separate label.
- Maintain a consistent baseline and type size across all letters.
- Default colour: charcoal rectangle and ivory letters; alternative: champagne rectangle and charcoal letters.
- Use responsive sizing without allowing the pill to collide with surrounding letters.
- For very narrow widths, reduce type size and tracking before breaking the wordmark. If it still cannot fit, create an approved compact lockup; do not arbitrarily split the name.

Use the supplied image `assets/aeon-media-wordmark-reference.png` as the visual reference. Recreate the treatment as HTML/CSS or vector artwork so it remains crisp and responsive. Do not embed the screenshot as the final logo.

---

## 6. Layout System

### General layout

- Max content width: approximately 1,200–1,360 px.
- Use responsive side gutters, larger on wide displays and comfortable on mobile.
- Base spacing on an 8-point scale.
- Use large vertical section spacing and deliberate asymmetry where it supports editorial composition.
- Avoid edge-to-edge text blocks on wide screens.
- Keep paragraphs to a readable line length.

### Grid suggestions

- Work grid: 2 columns on tablet, 2–3 columns on desktop depending on the photography, 1 column on narrow mobile where needed.
- Benefit sections: alternating image/text layouts or a calm 2-column grid.
- Hero: editorial split or layered image composition; choose based on available real assets.
- Do not force every section into identical cards.

### Image treatment

- Use actual client/brand imagery whenever provided and approved.
- Prioritise consistent crop, high resolution, and intentional negative space.
- Use `object-fit: cover` where appropriate; provide focal-point controls for images where the subject must remain visible.
- Keep image corners square or only subtly rounded. Avoid making every element a pill or card.
- Do not apply beige overlays to every photo. Let authentic image colour remain visible while keeping the interface palette restrained.

---

## 7. Typography

Initial pairing to evaluate:

- Headings: Cormorant Garamond.
- Body, navigation, buttons, metadata: Manrope.

Typography rules:

- Use a clear size scale rather than arbitrary values.
- Keep hero headings expressive but readable.
- Use adequate line-height for large display text.
- Avoid overusing uppercase text.
- Keep body copy comfortably readable on mobile.
- Test font loading and layout shift.
- If the existing project already has a suitable licensed font system, evaluate it before adding another font dependency.

---

## 8. Motion and Interaction Direction

Motion should feel smooth, quiet, and intentional. It should help visitors understand hierarchy and transitions rather than compete with the work.

### Approved motion patterns

- Soft fade/translate reveal for section content as it enters view.
- Small stagger between related text elements, used sparingly.
- Gentle image reveal or mask transition for selected portfolio imagery.
- Subtle project-card image scale on hover.
- Underline or background transition on navigation links.
- Smooth open/close for mobile navigation and accordions.
- A restrained page transition only if it does not delay navigation or harm accessibility.

### Timing guidance

- Micro-interactions: roughly 150–250 ms.
- Standard UI transitions: roughly 200–350 ms.
- Larger reveal transitions: roughly 400–700 ms.

These are starting ranges. Tune by feel and test on real devices.

### Motion restrictions

- Respect `prefers-reduced-motion`.
- Never make important content accessible only after an animation.
- Avoid long intro sequences, forced scrolling, excessive parallax, constant looping motion, cursor-following decoration, and heavy scroll-jacking.
- Keep mobile motion lightweight.
- Do not animate every component. Stillness is part of the premium visual style.

---

## 9. Component Inventory

Build reusable components where they solve a repeated need. Suggested components:

- `SiteHeader`
- `SiteFooter`
- `AeonWordmark`
- `Container`
- `Section`
- `Button` / `TextLink`
- `HeroSection`
- `SectionHeading`
- `BenefitBlock`
- `SelectedWorkGrid`
- `ProjectCard`
- `ProjectGallery`
- `CaseStudyHeader`
- `IndustryList`
- `ProcessSteps`
- `Testimonial` (only with approved real content)
- `ContactForm`
- `CTASection`

Do not build a component library for its own sake. Search connected design/component MCP tools for suitable accessible components on substantial UI work, then assess whether they fit the brand and codebase. Reuse or adapt only what improves quality and maintainability.

---

## 10. Recommended Technical Direction

Check the existing repository before starting. Do not replace a working architecture just to follow this recommendation.

Default recommendation for a new build:

- **Framework:** Next.js with App Router.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS with shared design tokens in CSS variables.
- **Motion:** Motion for React or another lightweight, maintained solution already supported by the project. Prefer CSS transitions for simple effects.
- **Icons:** A consistent line-icon set such as Lucide, used sparingly.
- **Forms:** Native accessible form controls; add a validation library only if complexity justifies it.
- **Content:** Typed local data for the initial portfolio. Add a CMS only when the team needs frequent non-developer content updates.
- **Images:** Next.js image optimisation or the framework's equivalent.
- **Hosting:** Use the deployment platform already selected by the user/project. Do not create a new account or deploy without permission.

### Engineering principles

- Prefer server components/static rendering for content pages.
- Add client components only for meaningful interactivity.
- Keep data, components, styling, and utility functions modular.
- Use strict TypeScript and avoid `any` unless justified.
- Avoid unnecessary dependencies and duplicate libraries.
- Do not store secrets in source control or client-side code.
- Keep environment variables documented in `.env.example` without real secrets.
- Use reusable data structures for project case studies.
- Keep SEO metadata unique for each page and case study.
- Add a sitemap, robots rules, favicon, and social sharing metadata before launch.

---

## 11. Responsive Behaviour

Design and test at minimum:

- Small mobile: approximately 360–390 px wide.
- Large mobile: approximately 414–430 px wide.
- Tablet: approximately 768 px wide.
- Laptop: approximately 1,024–1,440 px wide.
- Wide desktop: 1,600 px and above.

Do not simply shrink the desktop layout. Re-compose the hero, work grid, navigation, typography, and section order where needed. Check the ONME wordmark carefully at narrow widths.

---

## 12. Accessibility, Performance, and Quality

### Accessibility

- Use semantic HTML landmarks and heading hierarchy.
- Make all controls keyboard accessible.
- Provide visible focus states.
- Use descriptive alt text for meaningful images; decorative images should have empty alt text.
- Label all form fields and associate error messages with inputs.
- Maintain sufficient text and control contrast.
- Respect reduced-motion preferences.
- Ensure buttons and links have clear accessible names.

### Performance

- Optimise images and use responsive sizes.
- Lazy-load below-the-fold media where appropriate.
- Avoid loading large video backgrounds by default.
- Minimise client-side JavaScript.
- Avoid layout shifts from images, fonts, and animations.
- Test the production build on mobile connections.

### Validation before completion

Run the checks available in the repository:

- Formatting.
- Linting.
- Type checking.
- Unit/component tests, if configured.
- Production build.
- Browser checks for desktop and mobile.
- Keyboard navigation and reduced-motion checks.
- Link and form validation.

Report any checks that could not be run. Do not claim that a test passed unless it was actually run and passed.

---

## 13. Content Model for Portfolio Projects

Use a typed model similar to the following and adapt it to the repository's conventions:

```ts
export type PortfolioProject = {
  slug: string;
  title: string;
  clientName?: string;
  industry: "clothing" | "jewellery" | "interiors" | "other";
  summary: string;
  clientObjective: string;
  creativeDirection: string;
  deliverables: string[];
  coverImage: string;
  gallery: string[];
  published: boolean;
  permissionConfirmed: boolean;
  outcome?: string;
  outcomeEvidence?: string;
  testimonial?: {
    quote: string;
    person: string;
    permissionConfirmed: boolean;
  };
};
```

Do not publish a project unless permission and asset rights have been confirmed. Do not publish outcome or testimonial fields unless the supporting evidence and permission are present.

---

## 14. Launch Readiness Checklist

- [ ] Brand name and wordmark are consistent.
- [ ] ONME highlight is implemented as specified.
- [ ] Palette and typography are applied consistently.
- [ ] All five main pages are complete.
- [ ] Project detail template is working.
- [ ] Real projects and approved imagery are loaded.
- [ ] No invented testimonials, metrics, or client claims remain.
- [ ] Contact details are verified.
- [ ] Contact form destination and privacy requirements are confirmed.
- [ ] Mobile and tablet layouts are reviewed.
- [ ] Reduced motion and keyboard navigation are tested.
- [ ] Images and fonts are optimised.
- [ ] SEO metadata and social previews are configured.
- [ ] Lint, typecheck, tests, and production build have been run.
- [ ] Deployment target and launch permission are confirmed.
