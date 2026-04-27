# Lumina Dental Studio - Implementation Kickstart

## Project Overview

**Client:** Lumina Dental Studio  
**Type:** High-conversion landing page for premium cosmetic dentistry  
**Location:** Montreal, Quebec  
**Primary Goal:** Convert visitors into booked consultations

---

## Design Token Summary

### Color Palette (5 Colors)

| Token | Hex | Usage |
|-------|-----|-------|
| **Deep Navy** | `#1A2238` | Headers, body text, trust elements, secondary buttons |
| **Soft Gold** | `#C1A461` | Primary CTA buttons, accents, highlights, premium feel |
| **Off-White** | `#FAFAFA` | Page background, clean clinical aesthetic |
| **Warm White** | `#F5F3EF` | Card backgrounds, muted sections |
| **Charcoal** | `#2D3748` | Secondary text, subtle elements |

### Token Mapping

```css
--primary: #C1A461       /* Soft Gold - CTA buttons */
--primary-foreground: #1A2238
--secondary: #1A2238     /* Deep Navy - Secondary actions */
--secondary-foreground: #FFFFFF
--background: #FAFAFA    /* Off-White */
--foreground: #1A2238    /* Deep Navy */
--muted: #F5F3EF         /* Warm White */
--accent: #C1A461        /* Soft Gold */
--card: #FFFFFF
--border: #E8E5DE
```

### Typography

- **Headings:** Playfair Display (elegant serif) or fallback to system serif
- **Body:** Inter or Geist (clean sans-serif for readability)
- **Weights:** 400 (body), 500 (emphasis), 600 (subheadings), 700 (headings)

---

## CTA Strategy (Minimum 3 Placements)

**Primary CTA Text:** "Book Your Free Consultation"

### CTA Placement Map

| Location | Type | Notes |
|----------|------|-------|
| **1. Header** | Sticky button | Always visible, Soft Gold background |
| **2. Hero Section** | Large prominent button | Below headline, full attention |
| **3. Services Section** | End of section | After viewing service tiers |
| **4. Before/After Section** | Below slider | Capitalize on emotional impact |
| **5. FAQ Section** | After final answer | Address last objections |
| **6. Footer** | Final CTA block | Last chance conversion |

**CTA Button Styling:**
- Background: `bg-primary` (Soft Gold #C1A461)
- Text: `text-primary-foreground` (Deep Navy #1A2238)
- Hover: Slight scale + shadow elevation
- Size: `px-8 py-4 text-lg font-semibold`

---

## Component Architecture

```
app/
├── page.tsx                    # Main landing page (imports all sections)
├── layout.tsx                  # Root layout with fonts & metadata
└── globals.css                 # Design tokens (DONE)

components/
├── sections/
│   ├── Header.tsx              # Sticky nav with logo, links, CTA
│   ├── Hero.tsx                # Headline, subtext, CTA, Dr. image
│   ├── TrustBar.tsx            # Stats strip (1200+ smiles, etc.)
│   ├── Services.tsx            # 3-tier pricing cards
│   ├── BeforeAfter.tsx         # Drag-handle comparison slider
│   ├── Testimonials.tsx        # 3-card grid / mobile carousel
│   ├── FAQ.tsx                 # Accordion with objection-handling
│   └── Footer.tsx              # Contact info, social links, final CTA
├── booking/
│   └── BookingModal.tsx        # Dialog with form fields
└── ui/                         # shadcn/ui components (existing)
```

---

## Section-by-Section Implementation Plan

### 1. Header (Sticky Navigation)
- **Layout:** Logo (left) | Nav Links (center) | CTA Button (right)
- **Nav Links:** Services, Results, FAQ
- **Behavior:** Sticky on scroll, subtle shadow when scrolled
- **Mobile:** Hamburger menu for links, CTA always visible
- **CTA:** "Book Your Free Consultation" button

### 2. Hero Section
- **Headline:** "Transform Your Smile, Transform Your Life"
- **Subheadline:** Brief empathetic copy about confidence
- **Background:** Subtle gradient (Soft Gold 5% opacity to White)
- **Image:** AI-generated Dr. Tremblay portrait (right side on desktop)
- **CTA:** Large primary button
- **Animation:** Text fade-in on load (subtle)

### 3. Trust Bar
- **Stats to Display:**
  - 1,200+ Smiles Created
  - 15+ Years Experience
  - 4.9 Google Rating
  - Montreal's Top-Rated
- **Layout:** Horizontal strip, 4 columns on desktop, 2x2 grid on mobile
- **Background:** Deep Navy (#1A2238)
- **Text:** White with Soft Gold accent numbers

### 4. Services Section
- **Layout:** 3 cards side-by-side (desktop), stacked (mobile)
- **Tiers:**
  1. **Wellness Care** - $250+/visit - Cleanings, checkups
  2. **Aesthetic Transformation** - $1,500+/arch - Veneers, whitening
  3. **Full Restoration** - Case-by-case - Implants, full mouth
- **Features:** Each card lists 4-5 bullet points
- **Financing Badge:** "0% financing available via PayBright & MediCard"
- **Insurance Note:** "We accept Sun Life, Manulife & major Quebec providers"
- **CTA:** Section ends with booking button

### 5. Before & After Section
- **Component:** Drag-handle image comparison slider
- **Case:** "Full Smile Makeover" transformation
- **Images:** 1:1 aspect ratio, placeholder/generated
- **Interaction:** Draggable handle to reveal before/after
- **CTA:** Button below slider

### 6. Testimonials Section
- **Layout:** 3 cards on desktop, swipeable carousel on mobile
- **Card Content:**
  - AI-generated avatar
  - Patient name (first name + last initial)
  - Quote (2-3 sentences)
  - Star rating (5 stars)
- **Sample Testimonials:**
  1. Sophie M. - Fear of dentist overcome, gentle care
  2. Marc-Antoine L. - Implant success, natural results
  3. Isabelle D. - Veneer transformation, confidence boost

### 7. FAQ Section (Accordion)
- **Questions (Objection-Handling):**
  1. "Is cosmetic dentistry really worth the investment?"
  2. "What if I'm terrified of dental procedures?"
  3. "How long will the transformation take?"
  4. "Do you offer financing options?"
- **Styling:** Clean accordion with Soft Gold accent on open state
- **CTA:** Button after final FAQ item

### 8. Footer
- **Columns:**
  - Logo + tagline
  - Contact info (address, phone, hours)
  - Quick links (Services, FAQ, Privacy)
  - Social icons (Instagram, LinkedIn)
- **Final CTA Block:** Full-width bar with "Ready to transform your smile?"
- **Contact Details:**
  - Phone: (514) 555-0123
  - Address: 1250 Rue Peel, Montreal, QC
  - Hours: Mon-Fri 8AM-6PM
  - Note: "Emergency care available for existing patients"

### 9. Booking Modal
- **Trigger:** All "Book Your Free Consultation" buttons
- **Fields:**
  - Name (required)
  - Email (required)
  - Phone (required)
  - Service Interest (dropdown: Implants, Cosmetic, General)
- **Success State:** "Thank you! Our care coordinator will contact you within 24 hours."
- **Component:** shadcn Dialog + Form

---

## Animation Specifications

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero headline | Fade in + slide up | Page load |
| Section headers | Slide up slightly | Scroll into view |
| Service cards | Stagger fade in | Scroll into view |
| Testimonial cards | Fade in | Scroll into view |
| CTA buttons | Subtle scale on hover | Hover |

**Implementation:** Framer Motion with `prefers-reduced-motion` respect

---

## Image Assets Required

| Asset | Spec | Action |
|-------|------|--------|
| Dr. Tremblay portrait | Female dentist, 40s, empathetic, modern clinic | Generate with AI |
| Before/After images | 1:1 ratio, dental transformation | Generate placeholders |
| Testimonial avatars | 3 diverse Montreal patients | Generate with AI |
| ACDQ/ODQ badges | Professional association icons | Create styled placeholders |

---

## Technical Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.x",
    "react-compare-slider": "^3.x"
  }
}
```

- **framer-motion:** Scroll animations, hover effects
- **react-compare-slider:** Before/after drag comparison

---

## SEO & Metadata

```tsx
export const metadata = {
  title: "Lumina Dental Studio | Montreal's Premier Cosmetic Dentistry",
  description: "Transform your smile with Dr. Tremblay at Lumina Dental Studio. Premium cosmetic dentistry in Montreal. Book your free consultation today.",
  keywords: "cosmetic dentistry montreal, veneers, dental implants, smile makeover",
  openGraph: {
    title: "Lumina Dental Studio",
    description: "Montreal's Top-Rated Cosmetic Dental Clinic",
    type: "website",
  }
}
```

---

## Implementation Order

1. **Phase 1: Foundation**
   - [x] Design tokens in globals.css
   - [ ] Install dependencies (framer-motion, react-compare-slider)
   - [ ] Update layout.tsx with fonts & metadata
   - [ ] Create BookingModal component

2. **Phase 2: Sections (Top to Bottom)**
   - [ ] Header (sticky nav)
   - [ ] Hero section
   - [ ] Trust bar
   - [ ] Services section

3. **Phase 3: Social Proof**
   - [ ] Before/After slider
   - [ ] Testimonials carousel

4. **Phase 4: Conversion**
   - [ ] FAQ accordion
   - [ ] Footer with final CTA

5. **Phase 5: Polish**
   - [ ] Generate all AI images
   - [ ] Add scroll animations
   - [ ] Mobile responsiveness QA
   - [ ] Accessibility audit

---

## Approval Checklist

Before implementation begins, please confirm:

- [ ] Color palette and design tokens approved
- [ ] CTA placement strategy approved (6 locations)
- [ ] Section order and content approved
- [ ] Ready to proceed with Phase 1

---

**Document Version:** 1.0  
**Last Updated:** April 2026  
**Status:** Awaiting Approval
