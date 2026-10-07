---
name: Lorenzo Arias Portfolio
description: A deep-navy engineering profile with electric-blue proof and cool-white surfaces.
colors:
  navy-structural: "#071b36"
  navy-raised: "#0c2a50"
  electric-blue: "#1769f5"
  electric-blue-deep: "#0754ce"
  pale-blue: "#eaf3ff"
  ink: "#0a1728"
  ink-soft: "#1d2e44"
  muted: "#536477"
  cool-white: "#ffffff"
  mist: "#f4f7fb"
  border-line: "#dbe3ec"
  status-green: "#16864f"
typography:
  display:
    fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif'
    fontSize: "clamp(3.2rem, 6vw, 5.35rem)"
    fontWeight: 780
    lineHeight: 1.02
    letterSpacing: "-0.055em"
  headline:
    fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif'
    fontSize: "clamp(2.3rem, 4.2vw, 4rem)"
    fontWeight: 770
    lineHeight: 1.08
    letterSpacing: "-0.052em"
  body:
    fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif'
    fontSize: "0.92rem"
    fontWeight: 750
    lineHeight: 1.2
  tag:
    fontFamily: '"Manrope", "Avenir Next", Avenir, sans-serif'
    fontSize: "0.72rem"
    fontWeight: 650
    lineHeight: 1.45
rounded:
  compact: "0.25rem"
  button: "0.35rem"
  icon-tile: "0.5rem"
  pill: "999px"
spacing:
  page-gutter: "clamp(1.25rem, 5vw, 5rem)"
  section-space: "clamp(5rem, 9vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue-deep}"
    textColor: "{colors.cool-white}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1.2rem"
    height: "3.25rem"
    typography: "{typography.button}"
  button-secondary:
    backgroundColor: "rgb(255 255 255 / 72%)"
    textColor: "{colors.navy-structural}"
    rounded: "{rounded.button}"
    padding: "0.8rem 1.2rem"
    height: "3.25rem"
    typography: "{typography.button}"
  nav-cta:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.cool-white}"
    rounded: "0.3rem"
    height: "2.7rem"
  card-value:
    backgroundColor: "{colors.cool-white}"
    textColor: "{colors.ink}"
    padding: "1.75rem 1.6rem 1.65rem"
  chip-technology:
    backgroundColor: "#f8fafd"
    textColor: "#33475f"
    rounded: "{rounded.pill}"
    padding: "0.28rem 0.65rem"
    typography: "{typography.tag}"
  nav-link:
    textColor: "#d8e4f4"
    rounded: "0"
  impact-measure:
    backgroundColor: "{colors.navy-structural}"
    textColor: "{colors.cool-white}"
    padding: "1.5rem clamp(1rem, 2vw, 2rem) 1.65rem"
---

# Design System: Lorenzo Arias Portfolio

## Overview

**Creative North Star: "Engineering Practice Profile"**

The implemented portfolio reads as an engineering consultancy profile: deep navy anchors the masthead and proof/contact planes, while cool-white, mist, and pale-blue surfaces carry the content. Electric blue is assigned to actions and technical emphasis. Self-hosted Manrope, fine dividers, compact stroke-based icons, and broad, low-contrast shadows keep the visual voice crisp and restrained.

The portrait stage, proof row, overlapping value-card panel, impact grid, and split section headings are expressions of this portfolio, not defaults for unrelated screens. The portrait has a pale-blue backing; its silhouette is not a general-purpose motif.

**Visual verification:** Browser rendering could not be inspected in this environment. This document records source-defined styles and responsive rules; rendered layout and visual defects remain unverified.

**Key Characteristics:**
- Deep-navy structural planes with cool-white and pale-blue content surfaces.
- Electric blue reserved for actions, proof, and compact technical accents.
- Self-hosted Manrope across display, body, and control text.
- Fine borders, restrained diffuse shadows, and compact line iconography.

## Colors

The palette pairs navy structure and electric-blue emphasis with cool whites, pale blue, and cool-gray text and dividers.

### Primary
- **Electric Blue** (`colors.electric-blue`): Brand mark, navigation call to action, markers, and technical accents.
- **Deep Action Blue** (`colors.electric-blue-deep`): Primary action surfaces and blue emphasis on light backgrounds.

### Secondary
- **Structural Navy** (`colors.navy-structural`): Masthead, impact, about, and contact planes; also the principal dark text color.
- **Raised Navy** (`colors.navy-raised`): The mobile navigation surface above the structural navy.
- **Pale Blue** (`colors.pale-blue`): Hero and selected section planes; the portrait stage uses a separate pale-blue treatment.

### Neutral
- **Cool White** (`colors.cool-white`): Main page and card surface.
- **Mist** (`colors.mist`): Quiet alternate section background.
- **Ink / Soft Ink / Muted** (`colors.ink`, `colors.ink-soft`, `colors.muted`): Primary text, secondary emphasis, and supporting copy.
- **Border Line** (`colors.border-line`): Fine separators and card-grid borders.
- **Status Green** (`colors.status-green`): The small availability indicator only.

## Typography

**Display Font:** Manrope, self-hosted variable font (with Avenir Next, Avenir, and sans-serif fallbacks).
**Body Font:** The same Manrope stack.
**Label/Mono Font:** No separate mono face is used.

**Character:** One geometric sans family carries the page from large, tightly tracked headlines to compact navigation and evidence labels. The local font files provide weights 200–800; hierarchy comes from size, weight, and tracking rather than a second typeface.

### Hierarchy
- **Display** (`typography.display`): The hero statement.
- **Headline** (`typography.headline`): Major section headings.
- **Body** (`typography.body`): Paragraphs and general reading text.
- **Button** (`typography.button`): Primary and secondary action labels.
- **Tag** (`typography.tag`): Compact technology tags.

## Layout

The main content is capped at 1280px and uses a fluid page gutter. Section spacing is generous on wide screens and contracts on mobile. The CSS changes layout at 1100px, 900px, 680px, and 370px: the gutter tightens first; two-column content and four-column evidence grids progressively reduce; at 680px the hero, case studies, expertise, remote facts, about, and contact layouts stack or simplify; at 370px the hero actions become full-width stacked controls.

In this portfolio, the hero combines copy and portrait above a four-part fact row. The value propositions form a four-cell bridge on wide screens and two columns at narrower sizes; impact measures also reduce from four columns to two. Case studies move from a text/visual split to a single column at 900px. These are page-specific compositions, not universal layout prescriptions.

The section-heading content pattern places a section descriptor beside the heading and supporting copy at wider widths, then stacks them at 680px. This records the current content grid only; it does not establish a global eyebrow or kicker style.

## Elevation & Depth

Depth is hybrid but restrained: most hierarchy comes from surface contrast and fine borders, with broad, low-opacity shadows on the scrolled header, value panel, case-study panels, primary action, and portrait. The header shadow appears only after scrolling; the value panel shadow softens on mobile. The implementation uses diffuse shadows rather than a hard offset-shadow vocabulary. Exact extracted shadow values are in the sidecar.

## Shapes

Most content frames are square-edged and border-defined. Corner rounding is limited to buttons and icon tiles; technology tags use a pill silhouette. Fine one-pixel borders divide cards, grids, and evidence rows. The hero portrait backing is an isolated arched shape, not a recurring container rule.

## Components

### Buttons
- **Primary:** Deep-blue fill, white text, compact rounded corners, and a subtle default shadow. Hover lifts slightly and deepens the blue; keyboard focus uses the global visible outline.
- **Secondary:** Translucent white fill with a cool-blue border and navy text; hover increases the fill and border contrast.
- **Navigation CTA:** Electric-blue fill in the navy header, with a small upward arrow; its hover lift is more restrained than the content buttons.

### Cards / Containers
- **Value propositions:** A four-cell white grid with fine dividers, compact line-icon tiles, and a restrained outer shadow. It overlaps the hero boundary on this page only.
- **Case studies:** Bordered text-and-visual panels with modest shadow; the illustrative graphics are explicitly distinguished from client screenshots.
- **Impact measures:** Large tabular figures on a navy field, paired with explanatory labels and organization context.
- These patterns document the current portfolio components; they do not define one universal card treatment.

### Chips
- Technology tags use a pale cool-gray fill, fine border, muted navy text, and pill corners. Capability tags use a separate compact, lightly rounded treatment.

### Navigation
- A sticky navy masthead uses a left-aligned monogram/name, section links, and a blue contact action. The active section is indicated by a pale-blue bottom rule and white text. At compact widths the links move into a toggled navy panel.

### Section Heading
- The current long-form sections use a side-by-side descriptor and heading/content column, stacking at the mobile breakpoint. Treat this as a portfolio composition pattern, not a required treatment for other surfaces.

### Iconography
- Icons are compact stroke-based SVGs, primarily from the Feather line family. Value and expertise icons sit in small tinted tiles; directional icons remain adjacent to actions.

## Do's and Don'ts

### Do:
- **Do** preserve the existing navy, electric-blue, cool-white, and pale-blue role assignments.
- **Do** keep displayed impact values paired with explanatory labels and organization context.
- **Do** use compact line icons in the existing icon-tile contexts.
- **Do** keep the portrait stage, value-grid overlap, and split section-heading layout specific to this portfolio rather than treating them as universal templates.

### Don't:
- **Don't** turn the section descriptor into a global decorative eyebrow/kicker convention; only its current content-grid placement is recorded here.
- **Don't** treat hard offset shadows as an established style; the extracted implementation uses diffuse shadows.
- **Don't** infer additional component types or interaction states beyond those implemented.
