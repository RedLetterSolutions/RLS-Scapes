# Hardscaping Digital Marketing Agency - Design Guidelines

## Design Approach

**Selected Framework**: Reference-Based with Industry Hybrid
- Primary References: WebFX (B2B service credibility) + Straight North (professional agency positioning)
- Secondary Influence: Premium hardscaping sites for rugged, earthy authenticity
- Strategy: Blend polished B2B agency professionalism with tangible hardscaping industry visuals

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 27 59% 32% (Earth Brown #8B4513) - CTAs, headings, primary buttons
- Secondary: 210 14% 54% (Slate Grey #708090) - subheadings, supporting text
- Accent: 43 74% 49% (Goldenrod #DAA520) - highlights, trust badges, success metrics
- Background: 60 56% 91% (Beige #F5F5DC) - page background, card backgrounds
- Text: 180 25% 25% (Dark Slate #2F4F4F) - body text, paragraphs
- Trust: 210 100% 56% (Dodger Blue #1E90FF) - trust indicators, links, certifications

**Dark Mode:**
- Primary: 27 59% 45% (Lighter Earth Brown) - maintains warmth
- Secondary: 210 14% 65% (Lighter Slate) - improved readability
- Accent: 43 74% 60% (Brighter Goldenrod) - visibility on dark
- Background: 180 15% 12% (Deep Charcoal) - main background
- Text: 60 56% 91% (Light Beige) - body text
- Trust: 210 100% 65% (Brighter Blue) - maintains visibility

### B. Typography

**Font Families:**
- Primary: 'Montserrat' (headings, CTAs, navigation) - bold, modern, professional
- Secondary: 'Open Sans' (body text, descriptions) - readable, clean
- Accent: 'Roboto' (stats, metrics, numbers) - technical, precise

**Type Scale:**
- Hero Headline: text-5xl to text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl to text-4xl, font-bold
- Subheadings: text-xl to text-2xl, font-semibold
- Body: text-base to text-lg, font-normal, leading-relaxed
- Small/Meta: text-sm, font-medium

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8, p-12
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-8, gap-12
- Container max-widths: max-w-7xl for full sections, max-w-4xl for content

**Grid Strategy:**
- Hero: Single column, centered, max-w-5xl
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Case Studies: 2-column grid with large cards
- Testimonials: 3-column grid with compact cards
- Contact: 2-column split (form + info)

### D. Component Library

**Navigation:**
- Sticky header with earth brown background, white/beige text
- Logo left, navigation center/right, primary CTA button (goldenrod)
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full-width background image (hardscaping project - patios, walkways, retaining walls)
- Overlay: dark gradient (bottom to top, 80% to 40% opacity)
- Headline + subheadline + dual CTAs (primary solid, secondary outline with backdrop blur)
- Trust indicators below: "Trusted by 500+ Hardscaping Contractors" with small logos

**Service Blocks:**
- Card-based with icons (use Heroicons - wrench, chart-bar, phone, megaphone)
- Earth brown icons on beige background
- Hover: subtle lift (shadow-lg) and goldenrod border-top accent
- Title, description, "Learn More" link

**Case Studies/Portfolio:**
- Large image cards showing before/after hardscaping projects
- Overlay with client name, service type, key metrics ("+150% leads", "+85% Google visibility")
- Goldenrod accent for metric highlights
- CTA: "View Full Case Study"

**Lead Capture Forms:**
- Multi-step form with progress indicator
- Fields: Business name, contact, project type (dropdown: patios, driveways, retaining walls, etc.), budget range, timeline
- Primary button: earth brown with white text
- Form on beige card with subtle shadow

**Testimonial Cards:**
- Client photo (circular), company name, role
- Quote in italic Open Sans
- Star rating in goldenrod
- Hardscaping-specific: mention project type

**Stats Section:**
- 4-column grid with large numbers in Roboto
- Goldenrod numbers, dark slate labels
- Icons: trending-up, users, phone, chart-line
- Examples: "500+ Contractors Served", "2M+ Leads Generated", "95% Client Retention"

**Footer:**
- 4-column layout: About, Services, Resources, Contact
- Newsletter signup with earth brown CTA
- Social links, trust badges (Google Partner, Bing Ads certified)
- Bottom bar: Copyright, privacy, terms

### E. Imagery Strategy

**Hero Image:**
- Large, high-quality hardscaping project (stone patio or retaining wall)
- Professional photography showing craftsmanship and finished quality
- Placement: Full-width background with dark overlay

**Service Section Images:**
- Icons only (not photos) for service blocks to maintain clean, scannable layout

**Case Studies:**
- Before/after slider or side-by-side comparisons
- Professional hardscaping project photos
- Include contractor branding where appropriate

**About Section:**
- Team photo or office environment
- Industry conference/event photos showing expertise

**General Image Guidelines:**
- All images should convey premium quality and professionalism
- Balance rugged hardscaping aesthetic with polished agency presentation
- Use actual project photos (placeholders should indicate "Professional hardscaping project photo")

### F. Interaction Patterns

**Animations**: Minimal and purposeful only
- Page load: Fade-in for hero content
- Scroll: Subtle fade-in-up for sections (intersection observer)
- Hover: Smooth transitions (200ms) for cards, buttons
- NO complex scroll-triggered animations or parallax

**Buttons:**
- Primary: Earth brown background, white text, rounded-lg, px-8 py-4
- Secondary: Outline with slate grey border, earth brown text
- On images: Outline with backdrop-blur-sm for readability
- All buttons: Built-in hover states, no custom interactions needed

**Cards:**
- Hover: transform scale-105, shadow-xl transition
- Click: Subtle scale-down feedback

## Page Structure

1. **Hero**: Full-width image, centered content, dual CTAs, trust indicators
2. **Services**: 3-column grid, 6 core services with icons
3. **Why Choose Us**: 2-column with image + benefits list
4. **Case Studies**: 2-3 featured projects with metrics
5. **Stats**: 4-column metrics bar
6. **Testimonials**: 3-column grid, 6 testimonials
7. **FAQ**: Accordion with 8-10 hardscaping marketing questions
8. **Contact/CTA**: Split layout with form + contact info
9. **Footer**: Comprehensive 4-column with newsletter

## Accessibility

- Dark mode: Maintain earth tones with adjusted brightness for contrast
- Form inputs: Consistent dark mode styling with visible borders
- Focus states: Visible goldenrod outline (ring-2 ring-accent)
- Alt text: Descriptive for all hardscaping imagery
- Semantic HTML: Proper heading hierarchy, ARIA labels where needed