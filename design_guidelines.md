# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio sites like Awwwards-featured portfolios, Behance curated work, and minimalist portfolio templates. The design emphasizes typography, whitespace, and content over decorative elements.

## Core Design Principles
1. **Type-Driven Hierarchy**: Typography is the primary design element
2. **Generous Breathing Room**: Content gets space to shine
3. **Intentional Simplicity**: Every element serves a purpose
4. **Dual-Mode Excellence**: Both light and dark themes are equally polished

---

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts CDN)

**Type Scale**:
- Hero/Display: text-6xl to text-7xl (60-72px), font-bold, tracking-tight
- Section Headings: text-4xl to text-5xl (36-48px), font-semibold
- Project Titles: text-2xl to text-3xl (24-30px), font-medium
- Body Text: text-base to text-lg (16-18px), font-normal
- Supporting Text: text-sm (14px), font-normal

**Line Heights**: Use relaxed line spacing (leading-relaxed) for body copy, tighter (leading-tight) for headings.

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content max-width: max-w-6xl for main container
- Element spacing: gap-8 to gap-12 for grids, mb-6 to mb-12 between sections

**Grid Structure**:
- Mosaic Project Gallery: CSS Grid with varying column spans (col-span-1, col-span-2) and aspect ratios
- Desktop: 3-column base grid (grid-cols-3), with items spanning 1-2 columns
- Tablet: 2-column grid (md:grid-cols-2)
- Mobile: Single column (grid-cols-1)

---

## Component Library

### Navigation Header
- Fixed/sticky position with backdrop blur
- Minimal horizontal layout: Logo (left) + Nav links (center/right) + Theme toggle (far right)
- Height: h-16 to h-20
- Links: Simple text links with subtle hover underline animation

### About Section
- Center-aligned with max-w-3xl constraint
- Hero headline (text-5xl to text-7xl) with your name/title
- Bio paragraph (text-lg, max-w-2xl, leading-relaxed)
- Subtle fade-in entrance animation

### Work Section (Mosaic Gallery)
- Masonry/mosaic grid with staggered project cards
- Each project card includes:
  - Auto-generated gradient hero image (based on project color palette)
  - Project title overlay or below image
  - Short description (1-2 lines)
  - Tags displayed as small pills/badges
- Card hover: Subtle scale (scale-105) and shadow increase
- Gradient generation: Use project color palette to create linear or radial gradients

### Contact Section
- Clean, centered layout with max-w-2xl
- Email link (large, prominent text-2xl)
- Social links displayed as icon row or stacked list
- Use Heroicons for social icons (GitHub, LinkedIn, Twitter, etc.)

### Theme Toggle
- Icon-based toggle (sun/moon icons from Heroicons)
- Fixed position (top-right corner or in header)
- Smooth color transition on theme switch

### PDF Export Button
- Prominent button in header or footer: "Download Portfolio PDF"
- Icon: download icon from Heroicons
- Styled as primary CTA button

---

## Theme System (Light/Dark Mode)

**Light Mode**:
- Background: white or very light gray (bg-white, bg-gray-50)
- Text: near-black (text-gray-900)
- Accents: medium gray borders (border-gray-200)

**Dark Mode** (using Tailwind's `dark:` prefix):
- Background: deep dark (bg-gray-900, bg-black)
- Text: off-white (dark:text-gray-100)
- Accents: subtle borders (dark:border-gray-800)

**Implementation**: Use `dark` class on `<html>` element, toggle via JavaScript

---

## Animations & Interactions

**Entrance Animations** (Framer Motion):
- Fade-in on scroll for each section (opacity 0 → 1, y: 20 → 0)
- Stagger children for project grid items (delay: 0.1s between items)

**Hover States**:
- Project cards: scale-105 transform with shadow elevation
- Links: Underline slide-in animation from left to right
- Buttons: Subtle brightness increase

**Page Transitions**: Keep minimal – smooth scroll behavior enabled

---

## Images

**Project Hero Images**:
- Auto-generated gradient backgrounds using project color palettes
- Aspect ratio: 16:9 or 4:3 for consistency
- Overlay project title/tags with semi-transparent backdrop or gradient overlay
- No actual photos required – use generated gradients with CSS or canvas

**No Large Hero Image**: This portfolio does not feature a traditional hero banner with background image. Instead, it leads with bold typography and content.

---

## Responsive Behavior

**Desktop (lg:)**: 3-column mosaic grid, full navigation visible
**Tablet (md:)**: 2-column grid, condensed navigation
**Mobile (base)**: Single column, hamburger menu, stacked social links

**Breakpoint Strategy**: Mobile-first approach, enhance for larger screens

---

## PDF Generation

- Create single-page PDF with:
  - Name/title at top
  - Brief bio summary
  - Project list with titles, descriptions, and key tags
  - Contact information
- Auto-generate cover with gradient based on primary brand color
- Trigger via button click using html2pdf.js or similar

---

**Accessibility**: Maintain proper heading hierarchy, ensure sufficient color contrast in both themes, include focus states for keyboard navigation, use semantic HTML throughout.