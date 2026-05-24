# Product Requirements Document (PRD)
## Genomics Club — Official Website
**Marwadi University | Rajkot, Gujarat**

---

| Field | Detail |
|---|---|
| Document Version | v1.1 |
| Status | Content-Updated — Ready for Development |
| Prepared For | Genomics Club, Marwadi University |
| Document Type | Full-Stack Web PRD (Vibe-Code Ready) |
| Date | May 2026 |
| Reference Site | https://genomic-club-website.vercel.app (v0 brochure site — content source) |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [Target Audience](#3-target-audience)
4. [Design Philosophy & UI/UX Direction](#4-design-philosophy--uiux-direction)
5. [Design System](#5-design-system)
6. [Recommended Tech Stack](#6-recommended-tech-stack)
7. [Site Architecture & Sitemap](#7-site-architecture--sitemap)
8. [Page-by-Page Requirements](#8-page-by-page-requirements)
9. [Backend Architecture](#9-backend-architecture)
10. [Database Schema](#10-database-schema)
11. [Authentication & Role System](#11-authentication--role-system)
12. [Admin Panel](#12-admin-panel)
13. [Performance & Security](#13-performance--security)
14. [Accessibility Guidelines](#14-accessibility-guidelines)
15. [SEO Strategy](#15-seo-strategy)
16. [Component Hierarchy](#16-component-hierarchy)
17. [User Flows](#17-user-flows)
18. [Development Milestones](#18-development-milestones)
19. [Future Scalability](#19-future-scalability)
20. [Appendix: Content Placeholders](#20-appendix-content-placeholders)

---

## 1. Executive Summary

The Genomics Club at Marwadi University requires a modern, scalable, and visually distinctive web presence that serves its student community, attracts new members, showcases research, and communicates club activities to faculty and the institution.

This PRD defines the complete scope of the website — from visual identity to database schema — in a format ready for both university approval and immediate development. The site is designed to be **built with AI-assisted (vibe-code) workflows**, meaning the stack is chosen for developer experience, speed of iteration, and production-readiness simultaneously.

**Infrastructure Note:** Domain registration, hosting environment, and deployment pipeline are managed by Marwadi University's IT infrastructure team. The development team is responsible for frontend, backend logic, UI/UX, responsiveness, and application functionality only.

---

## 2. Product Overview

| Attribute | Value |
|---|---|
| Product Name | Genomics Club — Official Website |
| Institution | Marwadi University, Rajkot |
| Club Type | Technical/Research Student Club |
| Hosting | University-managed infrastructure |
| Development Scope | Frontend + Backend + UI/UX + Admin Panel |
| Content Source | Extracted from existing v0 site + pending items from club coordinators |
| Primary Language | English |
| Mode Support | Light Mode + Dark Mode |

### 2.1 Current State & Problem Statement

The Genomics Club currently has a minimal single-page brochure site (https://genomic-club-website.vercel.app) built as a static HTML page. While it establishes the club's basic identity, it has significant limitations:

- No backend, database, or content management system
- No event system — registration redirects externally to the MU Portal
- No blog, research showcase, or gallery
- No admin panel for club coordinators to update content
- No announcements system
- No search or filtering capabilities
- Single static page — not scalable as the club grows

### 2.2 Solution

A professionally built, responsive, content-rich website that acts as the club's digital headquarters — serving as a discovery platform, communication hub, event registration system, and research showcase.

---

## 3. Target Audience

### 3.1 Primary Users

| Persona | Description | Key Needs |
|---|---|---|
| **Current Members** | Enrolled students active in the club | Event info, announcements, resources |
| **Prospective Members** | Students interested in joining | What the club does, how to join |
| **Faculty Coordinators** | Faculty supervising the club | Club activity visibility, official info |
| **Researchers** | Students/faculty working on genomics projects | Research showcase, collaboration |
| **University Administration** | Institutional review & accreditation | Club legitimacy, activity records |

### 3.2 Secondary Users

- Biotechnology enthusiasts outside the university
- Industry visitors / recruiters
- Alumni

---

## 4. Design Philosophy & UI/UX Direction

### 4.1 Visual Identity

The website should evoke the aesthetic of a **cutting-edge biotech lab meets a modern academic startup**. Think: CRISPR precision, AI-driven genomics dashboards, clean scientific reporting, but with student energy.

**Mood board keywords:** Bioluminescent, Molecular, Futuristic, Precise, Clean, Dark academia meets silicon valley.

### 4.2 Core Design Principles

1. **Scientific Clarity** — Information is structured, readable, and never cluttered.
2. **Futuristic Minimalism** — Modern UI with intentional whitespace and subtle technical aesthetics.
3. **Accessibility First** — Every design decision must work for all users including those with visual impairments.
4. **Motion with Purpose** — Animations communicate state and guide attention, never decorate for no reason.
5. **Student-Friendly** — Not sterile like a government website. Warm, engaging, community-driven.

### 4.3 UI Style

- **Primary style:** Glassmorphism with subtle frosted-glass cards on dark/muted backgrounds
- **Secondary style:** Clean white cards with sharp micro-shadows for light mode
- **Accents:** Bioluminescent greens, deep teals, electric blues — evocative of fluorescent genomics imagery
- **Backgrounds:** Deep navy / near-black for dark mode; off-white with subtle warm tones for light mode
- **Textures:** Optional: subtle SVG DNA helix patterns, molecular dot-grid backgrounds, animated gradient meshes
- **Transitions:** Spring physics-based transitions (Framer Motion), 300–500ms duration, ease-out curves

### 4.4 Animation Strategy

| Element | Animation Type | Trigger |
|---|---|---|
| Hero section | Gradient mesh shift + floating particles | Page load |
| Section headers | Slide-up fade-in | Scroll into viewport |
| Cards | Hover lift + glow border | Mouse hover |
| Navigation | Blur backdrop appears | Scroll past 80px |
| Page transitions | Fade-through | Route change |
| Skeleton loaders | Shimmer wave | Data loading |
| Buttons | Scale + shadow on press | Click |
| DNA visuals | Slow continuous rotation | Passive background |

---

## 5. Design System

### 5.1 Color Palette

#### Dark Mode (Default)
| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#050D1A` | Page background |
| `--bg-secondary` | `#0A1628` | Card/section background |
| `--bg-glass` | `rgba(10,22,40,0.6)` | Glassmorphic surfaces |
| `--accent-primary` | `#00E5A0` | Primary CTA, highlights |
| `--accent-secondary` | `#00A3FF` | Secondary accents, links |
| `--accent-purple` | `#7B61FF` | Tertiary, tags |
| `--text-primary` | `#F0F4F8` | Body text |
| `--text-secondary` | `#8899AA` | Muted text, labels |
| `--border` | `rgba(255,255,255,0.08)` | Card borders |
| `--error` | `#FF4D6A` | Error states |
| `--success` | `#00E5A0` | Success states |

#### Light Mode
| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#F8FAFC` | Page background |
| `--bg-secondary` | `#FFFFFF` | Cards |
| `--accent-primary` | `#008060` | Primary CTA |
| `--accent-secondary` | `#0066CC` | Links |
| `--text-primary` | `#0D1B2A` | Body text |
| `--text-secondary` | `#4A5568` | Muted text |

### 5.2 Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | `Inter` or `Sora` | 700–800 | 48–72px |
| Section Heading | `Inter` | 600–700 | 28–40px |
| Card Title | `Inter` | 600 | 18–22px |
| Body Text | `Inter` | 400 | 15–16px |
| Caption / Label | `Inter` | 400–500 | 12–13px |
| Code / Monospace | `JetBrains Mono` | 400 | 13–14px |

All fonts loaded via Google Fonts. Fallback: `system-ui, sans-serif`.

### 5.3 Spacing System (8px base grid)

`4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`

### 5.4 Responsive Breakpoints (Tailwind Defaults)

| Breakpoint | Width | Target |
|---|---|---|
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large monitors |

### 5.5 Border Radius System

- Small elements (badges, tags): `4–6px`
- Cards: `12–16px`
- Modals: `16–20px`
- Buttons: `8px` (default), `9999px` (pill)
- Avatars: `50%`

### 5.6 Shadow System

```
shadow-sm:  0 1px 3px rgba(0,0,0,0.12)
shadow-md:  0 4px 16px rgba(0,0,0,0.2)
shadow-lg:  0 8px 32px rgba(0,0,0,0.3)
shadow-glow: 0 0 20px rgba(0,229,160,0.15)  /* accent glow */
```

---

## 6. Recommended Tech Stack

### 6.1 Why This Stack?

This stack is chosen specifically for **vibe-coding workflows** — meaning AI-assisted development, fast iteration, production-grade output, and easy deployment. Every tool below has excellent documentation, large AI training data, and tight integration.

### 6.2 Frontend

| Tool | Version | Reason |
|---|---|---|
| **Next.js 14** (App Router) | Latest | SSR + SSG + routing + API routes in one. AI models know it deeply. University hosting friendly. |
| **Tailwind CSS v3** | Latest | Utility-first, perfect for AI-generated code. No context switching between CSS files. |
| **Framer Motion** | Latest | Declarative animations that read like plain English. Excellent with React. |
| **shadcn/ui** | Latest | Unstyled, accessible component primitives. Copy-paste into your codebase. Zero lock-in. |
| **TypeScript** | 5.x | Catches bugs before runtime. AI code generation is significantly more accurate with types. |
| **Lucide React** | Latest | Clean icon library, tree-shakeable, consistent style. |

> **Vibe-code note:** With Next.js + Tailwind + shadcn, you can paste component prompts into Cursor or Claude and get production-ready code 90% of the time. This combo is explicitly optimized for that workflow.

### 6.3 Backend

| Tool | Reason |
|---|---|
| **Supabase** | Postgres database + Auth + Storage + Realtime + REST/GraphQL API — all from one dashboard. No server setup. Free tier is generous. University can host on their Supabase instance or self-host. |
| **Next.js API Routes** | Server-side logic lives in the same repo. No separate Express server needed for most operations. |
| **Supabase Auth** | Email/password + magic links + optional OAuth (Google). Row-level security policies handle role-based access natively. |

> **Alternative backend** (if university IT mandates custom server): Node.js + Express + PostgreSQL hosted on university servers. Supabase is still recommended as the simpler, faster path.

### 6.4 Storage

| Tool | Usage |
|---|---|
| **Supabase Storage** | Images (gallery, events, member photos, blog covers). CDN-backed. |
| **Cloudinary** (optional) | If advanced image transformations (resize, crop, WebP conversion) are needed. |

### 6.5 Tooling

| Tool | Purpose |
|---|---|
| **ESLint + Prettier** | Code consistency |
| **Husky + lint-staged** | Pre-commit hooks |
| **next-seo** | SEO meta management |
| **react-hook-form + zod** | Form handling + validation |
| **@tanstack/react-query** | Server state, caching, loading states |
| **date-fns** | Date formatting |

---

## 7. Site Architecture & Sitemap

```
genomicsclub.marwadi.edu/
│
├── / ................................ Landing Page (Home)
├── /about ........................... About the Club
│   ├── /about#mission .............. Mission & Vision
│   └── /about#history .............. Club History
├── /team ............................ Members & Coordinators
│   ├── /team#core .................. Core Team
│   ├── /team#members ............... General Members
│   └── /team#faculty ............... Faculty Coordinators
├── /events .......................... Events Listing
│   └── /events/[slug] .............. Individual Event Page
├── /research ........................ Research Projects
│   └── /research/[slug] ............ Individual Project Page
├── /blog ............................ Articles & Blog
│   └── /blog/[slug] ................ Individual Blog Post
├── /gallery ......................... Media Gallery
├── /announcements ................... Club Announcements
├── /join ............................ Membership Form
├── /contact ......................... Contact Page
│
├── /auth ............................ Authentication
│   ├── /auth/login ................. Login
│   └── /auth/register .............. Register (invite only)
│
└── /admin ........................... Admin Panel (protected)
    ├── /admin/dashboard ............ Overview
    ├── /admin/events ............... Manage Events
    ├── /admin/blog ................. Manage Blog
    ├── /admin/members .............. Manage Members
    ├── /admin/gallery .............. Manage Gallery
    ├── /admin/announcements ........ Manage Announcements
    └── /admin/registrations ........ View Registrations
```

---

## 8. Page-by-Page Requirements

---

### 8.1 Landing Page (`/`)

**Purpose:** First impression. Communicate the club's identity, energy, and key actions within 5 seconds.

#### 8.1.1 Hero Section

**Layout:** Full viewport height (`100vh`). Centered content with background visual.

**Background:** Animated gradient mesh (teal → blue → purple) slowly shifting. Optional: SVG particle network mimicking molecular bonds. Optional: Low-opacity DNA double helix illustration on the right.

**Content:**
- **Tagline:** "Empowering students to explore cutting-edge genomic technologies shaping biomedical research and the future of medicine."
- **Subheading:** "A community of curious minds at Marwadi University exploring the frontiers of genomics, bioinformatics, and molecular biology — connecting students with the science shaping tomorrow's healthcare."
- **Department badge:** "Dept. of Bioinformatics · Marwadi University" (shown above the main title)
- **Keyword tags** (animated, cycling): Sequencing · CRISPR · Medicine · Bioinformatics
- Two CTAs: **"Join the Club"** (scrolls to `/join`) + **"Explore Activities"** (scrolls to `/events`)
- Scroll indicator: animated chevron-down arrow

**Behavior:**
- Content animates in on load: tagline slides up, subtext fades in, CTAs pop in with spring bounce.
- Background gradient shifts continuously on a slow loop (10–15s).
- On mobile: single column, reduced font sizes, background simplified.

---

#### 8.1.2 Stats Bar

A horizontal strip below the hero with key club numbers.

**Content placeholders:**
- **12+** Activities Conducted ✅
- **6+** Faculty & Student Coordinators ✅
- **₹100** Membership Fee ✅
- `[TOTAL_MEMBERS]` Members — *⚠ pending from coordinators*
- `[YEARS_ACTIVE]` Years Active — *⚠ pending from coordinators*

**UI:** Cards or inline stats with animated number counters (count up on scroll into view). Separated by vertical dividers. Glassmorphic background strip.

---

#### 8.1.3 About Snippet

**Content:** "A community of curious minds at Marwadi University exploring the frontiers of genomics, bioinformatics, and molecular biology — connecting students with the science shaping tomorrow's healthcare."

One CTA: **"Learn More About Us"** → `/about`

**UI:** Split layout — text left, image/illustration right. On mobile, stacked vertically.

---

#### 8.1.4 Featured Events

**Purpose:** Highlight upcoming or recent events.

**Display:** 3 event cards in a horizontal row (2 on tablet, 1 on mobile in a scroll carousel).

**Event Card contains:**
- `[EVENT_COVER_IMAGE]`
- Event Type Badge (Workshop / Seminar / Competition)
- `[EVENT_TITLE]`
- `[EVENT_DATE]`
- `[EVENT_SHORT_DESCRIPTION]`
- CTA: **"View Event"** → `/events/[slug]`

**Data source:** Supabase, latest 3 upcoming events, ordered by date.

---

#### 8.1.5 Research Spotlight

**Purpose:** Feature one current or recent research project.

**Layout:** Large horizontal card spanning full width. Background image (blurred), overlay text, project title, a 2-sentence summary, and a "View Project" CTA.

**Content placeholders:** `[FEATURED_RESEARCH_TITLE]`, `[FEATURED_RESEARCH_SUMMARY]`, `[FEATURED_RESEARCH_IMAGE]`

---

#### 8.1.6 Team Teaser

**Purpose:** Show human faces. Builds trust and community feel.

**Display:** 4–6 circular avatar cards with name + role beneath. "Meet the Full Team" CTA → `/team`

---

#### 8.1.7 Latest Blog Posts

3 blog post cards with: cover image, title, author, date, reading time, excerpt. "Read All Articles" CTA → `/blog`

---

#### 8.1.8 Join CTA Banner

Full-width banner section with gradient background.

**Headline:** "Ready to be part of something bigger?"

**Subtext:** `[JOIN_INCENTIVE_TEXT]`

**CTA:** "Join Genomics Club" → `/join`

---

#### 8.1.9 Announcements Ticker

A horizontal scrolling ticker strip (or top notification bar) with latest announcements. Clicking an item opens the full announcement. Data from Supabase `announcements` table, filtered by `is_active = true`.

---

### 8.2 About Page (`/about`)

**Sections:**

1. **Page Hero** — Title "About Us" + subheading. Background: abstract genomics visual.

2. **Club Story** — `[CLUB_FOUNDING_STORY]` — 2–4 paragraphs of narrative text. Founding year, origin, growth.

3. **Mission & Vision**
   - **Vision:** "To enable students to explore the latest genomic technologies shaping biomedical research, driving innovation in healthcare and life sciences." ✅
   - **Mission:** Displayed as three action points: ✅
     1. Organize seminars, workshops, quizzes, games, and recreational activities focused on Genomics.
     2. Foster curiosity and encourage exploration of the latest advancements in genomic science.
     3. Share relevant knowledge and skills for professional success through organized events.
   - Displayed as two separate cards with distinct icons (DNA strand for mission, telescope/eye for vision).

4. **Core Values** — 4–6 value cards (icon + title + 1-line description).
   *⚠ Specific value names pending from coordinators — suggest: Curiosity, Innovation, Collaboration, Accessibility, Precision, Impact*

5. **Club Timeline** — Vertical or horizontal timeline of key milestones.
   *⚠ Full timeline pending — coordinators to supply founding year and key events.*

6. **Genomics 101 Section** *(sourced from existing site)*
   The about page should also include an educational strip covering:
   - **The Genome** — "The complete set of genetic instructions in a cell — a blueprint containing all information needed to build and run a living organism."
   - **Healthcare Impact** — "Genomics-based healthcare uses individual genomic information for clinical decisions — enabling precise diagnostic and therapeutic interventions."
   - **Global Potential** — "Genomics can reduce global health inequalities by providing developing nations with efficient, cost-effective tools for preventing major diseases."
   These render as 3 info cards with icons, sourced from the existing site's "What is Genomics?" section.

7. **Affiliations & Recognitions** — `[AFFILIATION_LOGOS]` *⚠ pending*

---

### 8.3 Team Page (`/team`)

**Sections:**

#### 8.3.1 Faculty Coordinators
Full-width row(s) of faculty cards. **Confirmed faculty data:**

| Field | Value | Status |
|---|---|---|
| Name | Dr. Aditya Saxena | ✅ |
| Designation | Associate Professor | ✅ |
| Department | Bioinformatics | ✅ |
| Cabin | MA557 | ✅ |
| Extension | 1568 | ✅ |
| Email | aditya.saxena@marwadieducation.edu.in | ✅ |
| Photo | `[DR_SAXENA_PHOTO]` | ⚠ pending |
| Bio | `[DR_SAXENA_BIO]` | ⚠ pending |

*Note: 6+ coordinators mentioned on existing site. Only Dr. Aditya Saxena confirmed. ⚠ Other coordinator details pending from club.*

#### 8.3.2 Core Team
Grid of core team member cards (4 per row on desktop, 2 on tablet, 1 on mobile):
- `[MEMBER_PHOTO]`
- `[MEMBER_NAME]`
- `[MEMBER_ROLE]` (e.g., President, Secretary, Tech Lead)
- `[MEMBER_YEAR]` (e.g., 2nd Year, Bioinformatics)
- Optional: LinkedIn icon

#### 8.3.3 General Members
Smaller cards (6 per row desktop) or a searchable table.
- `[MEMBER_NAME]`
- `[MEMBER_BRANCH]`
- `[MEMBER_YEAR]`

**Filtering:** Filter by role, year, department. Search by name.

---

### 8.4 Events Page (`/events`)

#### 8.4.1 Events Listing (`/events`)

**Filters:**
- Status: Upcoming / Past / All
- Type: Workshop / Seminar / Competition / Guest Lecture / Internal
- Month/Year picker

**Layout:** Grid of event cards (3 per row → 2 → 1). Skeleton loaders while fetching.

**Event Card:**
- `[EVENT_COVER_IMAGE]`
- Status badge (Upcoming / Completed / Registration Open)
- `[EVENT_TITLE]`
- `[EVENT_DATE]` + `[EVENT_TIME]`
- `[EVENT_VENUE]`
- `[EVENT_BRIEF_DESCRIPTION]`
- CTA: "View Details" or "Register Now" (conditionally rendered)

#### 8.4.2 Individual Event Page (`/events/[slug]`)

Full event detail view:
- Hero image: `[EVENT_COVER_IMAGE]`
- Event title, date/time, venue, type badge
- `[EVENT_FULL_DESCRIPTION]` — rich text (markdown rendered)
- Speaker/Facilitator info: `[SPEAKER_NAME]`, `[SPEAKER_BIO]`, `[SPEAKER_PHOTO]`
- Registration section (if `registration_open = true`):
  - Embedded registration form OR link to external form
  - Seats available counter: `[SEATS_REMAINING]`
- Photo gallery from past events (if completed)
- Related events section (3 cards)

---

### 8.5 Research Projects (`/research`)

#### 8.5.1 Projects Listing

**Filters:** Status (Ongoing / Completed), Domain (Genomics / Bioinformatics / Molecular Biology / Other)

**Project Card:**
- `[PROJECT_COVER_IMAGE]`
- Domain tag
- `[PROJECT_TITLE]`
- `[PROJECT_SHORT_ABSTRACT]`
- Team members involved (avatars)
- Status badge
- "View Project" CTA

#### 8.5.2 Individual Project Page (`/research/[slug]`)

- Full abstract: `[PROJECT_FULL_ABSTRACT]`
- Objectives list
- Methodology summary
- Team: list of contributing members
- Faculty supervisor: `[SUPERVISOR_NAME]`
- Timeline: start date, expected/actual completion
- Publications/resources: `[PUBLICATION_LINKS]` (if any)
- Image/figure gallery
- Related projects

---

### 8.6 Blog / Articles (`/blog`)

#### 8.6.1 Blog Listing

**Layout:** Featured post (large card) + grid of smaller cards below.

**Filters/Sort:** Category, Most Recent, Most Popular (by view count)

**Blog Card:**
- `[POST_COVER_IMAGE]`
- Category tag (e.g., Genomics 101, Club News, Research Digest)
- `[POST_TITLE]`
- `[POST_EXCERPT]`
- Author avatar + `[AUTHOR_NAME]`
- `[POST_DATE]`
- `[READ_TIME]` (auto-calculated from word count)

#### 8.6.2 Individual Blog Post (`/blog/[slug]`)

- Cover image
- Title, author, date, read time, category
- Rich text body (Markdown → HTML rendered via `react-markdown` or `MDX`)
- Social share buttons (Twitter/X, LinkedIn, WhatsApp, Copy Link)
- Author bio card at end
- Related posts (3 cards)
- Comments section (optional phase 2 — can use Giscus for GitHub-based comments)
- View counter (passive, logged silently to Supabase)

---

### 8.7 Gallery (`/gallery`)

**Layout:** Masonry grid or uniform grid with lightbox on click.

**Filters:** By event name, by year.

**Lightbox:** Opens full image with:
- Caption: `[IMAGE_CAPTION]`
- Event association: `[RELATED_EVENT]`
- Navigation arrows (prev/next)
- Close button (keyboard `Escape` supported)

**Upload:** Via admin panel. Images stored in Supabase Storage. Thumbnails auto-served (or via Cloudinary transform URL).

---

### 8.8 Announcements Page (`/announcements`)

**Display:** Chronological list of announcements. Newest first.

**Announcement Card:**
- Priority badge (High / Normal / Info)
- `[ANNOUNCEMENT_TITLE]`
- `[ANNOUNCEMENT_BODY]` — rich text
- Date posted
- Expiry indicator (if `expires_at` is set)

**Behavior:** Expired announcements automatically hidden from public view (filtered by `expires_at > now()` OR `expires_at IS NULL`).

Active announcements also show in the homepage ticker.

---

### 8.9 Join the Club (`/join`)

**Purpose:** Membership application page. The existing site uses a 3-step process tied to the MU portal. The new site should present this flow clearly AND offer an optional interest/inquiry form for students who want to learn more before committing.

**Confirmed Join Flow (3 Steps):** ✅
1. **Login to MU Portal** — Access https://login.marwadiuniversity.ac.in with student credentials.
2. **Register for Genomics Club** — Find and register for the Genomics Club listing in the portal.
3. **Submit Membership Fee** — Pay ₹100 in person at Cabin MA557, Dept. of Bioinformatics (Dr. Aditya Saxena).

**Membership Details:** ✅
- Fee: ₹100 one-time annual membership
- What's included:
  - All workshops & seminars
  - Hands-on activities & quizzes
  - Industrial visits & site tours
  - Networking opportunities
  - Research presentation slots
  - Career exploration sessions

**Primary CTA:** "Go to MU Portal" → https://login.marwadiuniversity.ac.in

**Secondary section — Interest Form** *(optional but recommended for data capture):*

**Form Fields:**
- Full Name `*`
- Student ID / Roll Number `*`
- Email (university email preferred) `*`
- Phone Number `*`
- Department / Branch `*`
- Current Year of Study `*`
- Why do you want to join? (textarea) `*`
- Any relevant skills or experience? (textarea, optional)
- How did you hear about us? (dropdown)

**Behavior:**
- Validated client-side with `zod` + `react-hook-form`
- Submitted to Supabase `join_requests` table
- Admin receives email notification (via Supabase Edge Function + Resend/SendGrid)
- User receives confirmation email
- Success state: animated checkmark + "We'll contact you soon via email" message
- Error state: inline field errors + toast notification

**GDPR-lite notice:** "Your information will only be used for club membership processing."

---

### 8.10 Contact Page (`/contact`)

**Left column:** Contact information ✅
- **Email:** aditya.saxena@marwadieducation.edu.in
- **Phone/Extension:** Ext. 1568
- **Location:** Cabin MA557, Department of Bioinformatics, Faculty of Engineering & Technology, Marwadi University, Rajkot, Gujarat
- **Social media links:** `[INSTAGRAM_URL]` · `[LINKEDIN_URL]` · `[TWITTER_URL]` · `[GITHUB_URL]` — *⚠ social URLs pending*

**Right column:** Contact form
- Name `*`
- Email `*`
- Subject `*`
- Message (textarea) `*`
- Submit → saves to `contact_submissions` table + email notification to club email

**Map:** Embed Marwadi University map (Google Maps iframe, lazy loaded).

---

### 8.11 Navigation

#### Desktop Navbar
- Logo (left): Genomics Club wordmark + icon
- Navigation links (center): Home, About, Events, Research, Blog, Gallery, Announcements
- Right: "Join Us" CTA button + dark/light mode toggle

**Behavior:**
- Transparent on hero, blurred glass background after 80px scroll
- Active link underline/highlight indicator
- Smooth scroll to section where applicable

#### Mobile Navigation
- Hamburger icon (top right) → full-screen slide-in drawer
- Navigation links stacked vertically with stagger animation
- "Join Us" CTA at bottom of drawer
- Close button + backdrop tap to close

#### Sticky Behavior
Navbar is sticky on all pages. On mobile, collapses to hamburger.

---

### 8.12 Footer

**Columns:**
1. **Brand column:** Logo, "Genomics Club — Dept. of Bioinformatics, Faculty of Engineering & Technology, Marwadi University, Rajkot, Gujarat." + social links
2. **Navigation:** Home, About, Activities, Benefits, Team
3. **Get Involved:** Join Us, Contact, Announcements
4. **Contact Info:** aditya.saxena@marwadieducation.edu.in · Cabin MA557 · Ext. 1568

**Bottom bar:**
- © 2026 Genomics Club · Marwadi University. All rights reserved.

**Newsletter signup:**
- Email input + Subscribe button
- Sends to `newsletter_subscribers` table
- Confirmation email via Supabase Edge Function

---

## 9. Backend Architecture

### 9.1 Architecture Overview

```
Client (Next.js) 
    ↕ REST (Supabase auto-generated API)
    ↕ Server Actions / API Routes (Next.js)
Supabase (Backend)
    ├── PostgreSQL (Database)
    ├── Auth (JWT-based)
    ├── Storage (Images/Files)
    ├── Edge Functions (Email, Webhooks)
    └── Realtime (optional: live announcements)
```

### 9.2 API Patterns

All data fetching follows this pattern:

| Operation | Method | Notes |
|---|---|---|
| Public read (events, blog) | Supabase client (anon key) | RLS policies restrict to public data only |
| Authenticated read | Supabase client (user JWT) | Fetches user-specific data |
| Admin write | Supabase client (service role) via API route | Never expose service key to client |
| File upload | Supabase Storage via API route | Validate file type + size server-side |
| Form submission | Next.js API route → Supabase | Server-side validation before insert |

### 9.3 Email Notifications

Use **Resend** (or SendGrid) via Supabase Edge Functions for:
- Join request submission confirmation
- Admin alert on new join request
- Event registration confirmation
- Newsletter welcome email
- Contact form submission alert

---

## 10. Database Schema

All tables live in Supabase (PostgreSQL). RLS (Row Level Security) policies enforce access control at the database level.

### 10.1 `users`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
email          text UNIQUE NOT NULL
full_name      text
role           text CHECK (role IN ('admin', 'editor', 'member')) DEFAULT 'member'
avatar_url     text
created_at     timestamptz DEFAULT now()
```

### 10.2 `events`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
slug           text UNIQUE NOT NULL
title          text NOT NULL
description    text          -- markdown
short_desc     text
cover_image    text          -- storage URL
event_type     text          -- 'workshop','seminar','competition','guest_lecture'
status         text          -- 'upcoming','ongoing','completed','cancelled'
venue          text
event_date     timestamptz
registration_open boolean DEFAULT false
max_seats      int
created_by     uuid REFERENCES users(id)
created_at     timestamptz DEFAULT now()
updated_at     timestamptz DEFAULT now()
```

### 10.3 `event_registrations`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
event_id       uuid REFERENCES events(id) ON DELETE CASCADE
full_name      text NOT NULL
email          text NOT NULL
student_id     text
phone          text
department     text
year_of_study  int
created_at     timestamptz DEFAULT now()
```

### 10.4 `research_projects`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
slug           text UNIQUE NOT NULL
title          text NOT NULL
short_abstract text
full_abstract  text          -- markdown
domain         text
status         text          -- 'ongoing','completed'
cover_image    text
supervisor     text
start_date     date
end_date       date
created_at     timestamptz DEFAULT now()
```

### 10.5 `blog_posts`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
slug           text UNIQUE NOT NULL
title          text NOT NULL
excerpt        text
content        text          -- markdown
cover_image    text
author_id      uuid REFERENCES users(id)
category       text
is_published   boolean DEFAULT false
view_count     int DEFAULT 0
read_time_min  int
published_at   timestamptz
created_at     timestamptz DEFAULT now()
updated_at     timestamptz DEFAULT now()
```

### 10.6 `team_members`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
full_name      text NOT NULL
role           text NOT NULL      -- 'President', 'Secretary', etc.
member_type    text               -- 'core','general','faculty'
department     text
year_of_study  int
photo_url      text
linkedin_url   text
email          text
order_index    int DEFAULT 0      -- for manual ordering
is_active      boolean DEFAULT true
academic_year  text               -- e.g. '2025-26'
```

### 10.7 `announcements`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
title          text NOT NULL
body           text               -- markdown
priority       text CHECK (priority IN ('high','normal','info')) DEFAULT 'normal'
is_active      boolean DEFAULT true
expires_at     timestamptz
created_by     uuid REFERENCES users(id)
created_at     timestamptz DEFAULT now()
```

### 10.8 `gallery_items`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
image_url      text NOT NULL
thumbnail_url  text
caption        text
event_id       uuid REFERENCES events(id)
uploaded_by    uuid REFERENCES users(id)
taken_at       date
created_at     timestamptz DEFAULT now()
```

### 10.9 `join_requests`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
full_name      text NOT NULL
student_id     text NOT NULL
email          text NOT NULL
phone          text
department     text
year_of_study  int
motivation     text
skills         text
referral       text
status         text CHECK (status IN ('pending','approved','rejected')) DEFAULT 'pending'
reviewed_by    uuid REFERENCES users(id)
created_at     timestamptz DEFAULT now()
```

### 10.10 `newsletter_subscribers`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
email          text UNIQUE NOT NULL
is_confirmed   boolean DEFAULT false
subscribed_at  timestamptz DEFAULT now()
```

### 10.11 `contact_submissions`
```sql
id             uuid PRIMARY KEY DEFAULT gen_random_uuid()
name           text NOT NULL
email          text NOT NULL
subject        text NOT NULL
message        text NOT NULL
is_read        boolean DEFAULT false
created_at     timestamptz DEFAULT now()
```

---

## 11. Authentication & Role System

### 11.1 Auth Flow

- **Technology:** Supabase Auth (JWT-based, email/password)
- **Registration:** Invite-only. Admins invite users via email link. No public signup on `/join` (that's the membership form, not auth).
- **Login:** `/auth/login` page, email + password. Magic link option available.
- **Session:** JWT stored in HttpOnly cookie via Next.js middleware. Auto-refreshed.
- **Logout:** Server-side session invalidation.

### 11.2 Roles

| Role | Access |
|---|---|
| `admin` | Full access to all admin panel features |
| `editor` | Can create/edit events, blog posts, gallery. Cannot manage users or roles. |
| `member` | View-only access to member-restricted content (if any) |

### 11.3 Route Protection

Next.js middleware (`middleware.ts`) checks session on every `/admin/*` route. Unauthenticated requests are redirected to `/auth/login`. Role checks performed at the layout level for sub-routes.

### 11.4 RLS Policies (Key examples)

```sql
-- Anyone can read published blog posts
CREATE POLICY "public_read_blog" ON blog_posts
  FOR SELECT USING (is_published = true);

-- Only admins/editors can insert blog posts
CREATE POLICY "admin_insert_blog" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() IN ('admin', 'editor'));

-- Anyone can submit a join request
CREATE POLICY "public_insert_join" ON join_requests
  FOR INSERT WITH CHECK (true);

-- Only admins can read join requests
CREATE POLICY "admin_read_join" ON join_requests
  FOR SELECT USING (auth.role() = 'admin');
```

---

## 12. Admin Panel

**Route:** `/admin` (fully protected)

**Layout:** Sidebar navigation (collapsible on mobile) + main content area + top bar with user info.

### 12.1 Dashboard (`/admin/dashboard`)

Overview cards:
- Total members, pending join requests, upcoming events, published posts
- Recent activity feed (latest joins, registrations, announcements)
- Quick action buttons: "Create Event", "New Post", "Add Announcement"

### 12.2 Events Manager (`/admin/events`)

- Table view of all events (sortable, searchable, paginated)
- Columns: Title, Date, Status, Registrations, Actions (Edit / Delete / Toggle Registration)
- **Create/Edit form:** All event fields including rich text editor for description, image upload, status toggle, registration settings
- **Registrations view:** Per-event table of registrations, exportable to CSV

### 12.3 Blog Manager (`/admin/blog`)

- Post list with published/draft status indicator
- **Rich text editor:** `Tiptap` or `Quill` for WYSIWYG editing. Markdown export.
- Image upload for cover + inline images
- SEO fields: meta title, meta description, OG image
- Publish / Unpublish toggle with scheduled publish option

### 12.4 Members Manager (`/admin/members`)

- Table of all team members
- Add/Edit/Delete team member records
- Photo upload
- Order drag-and-drop for display ordering
- Academic year filter

### 12.5 Gallery Manager (`/admin/gallery`)

- Upload multiple images at once (drag & drop)
- Assign to event, add caption
- Delete images (removes from storage + database)
- Bulk operations

### 12.6 Announcements Manager (`/admin/announcements`)

- Create/Edit announcements with rich text
- Set priority (High / Normal / Info)
- Set expiry date
- Toggle active/inactive

### 12.7 Join Requests (`/admin/registrations`)

- Table of all join requests with status filter (Pending / Approved / Rejected)
- View full application details in side drawer
- Approve / Reject with one click
- Bulk actions
- Email notification sent to applicant on status change

---

## 13. Performance & Security

### 13.1 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.0s |
| Cumulative Layout Shift | < 0.1 |
| Largest Contentful Paint | < 2.5s |

### 13.2 Optimization Techniques

**Images:**
- `next/image` component for all images — automatic WebP conversion, lazy loading, proper `width`/`height` to prevent CLS.
- Supabase Storage CDN for delivery.
- Blur placeholder on all images.

**Code:**
- Route-based code splitting (automatic with Next.js App Router).
- Dynamic imports for heavy components (editor, lightbox, map).
- Tree-shaking via Webpack (Next.js default).

**Fonts:**
- `next/font` for Google Fonts — automatic self-hosting, no FOUT.

**Caching:**
- Static pages (about, team) generated at build time (SSG).
- Dynamic pages (events, blog) use ISR (revalidate every 60s).
- API responses cached with `react-query` stale-while-revalidate.

**Bundle:**
- Analyze bundle with `@next/bundle-analyzer` before production.
- Target < 150KB initial JS.

### 13.3 Security

| Concern | Mitigation |
|---|---|
| XSS | All user content sanitized with `DOMPurify` before render. No `dangerouslySetInnerHTML` without sanitization. |
| SQL Injection | Supabase parameterized queries. ORM-level protection. |
| CSRF | Next.js API routes use SameSite cookies. |
| Brute Force | Supabase Auth has built-in rate limiting. Additional: `upstash/ratelimit` on API routes. |
| File Upload | Validate MIME type + file size server-side. Only images allowed in gallery. |
| Env Variables | Never expose `SUPABASE_SERVICE_ROLE_KEY` to client. Use API routes as proxy. |
| Auth | HttpOnly cookies for session. JWT expiry + refresh rotation. |
| Admin Routes | Middleware-level protection + RLS as second layer. |
| Input Validation | `zod` schema validation on both client and server for all form submissions. |

---

## 14. Accessibility Guidelines

All pages must conform to **WCAG 2.1 Level AA**.

| Requirement | Implementation |
|---|---|
| Color contrast | Minimum 4.5:1 for normal text, 3:1 for large text |
| Keyboard navigation | All interactive elements focusable, visible focus ring |
| Screen reader support | Semantic HTML5 elements, ARIA labels where needed |
| Skip to content | "Skip to main content" link visible on focus (visually hidden at rest) |
| Form labels | Every input has an associated `<label>` |
| Alt text | All images have meaningful `alt` attributes. Decorative images use `alt=""` |
| Motion | Respect `prefers-reduced-motion` — disable or reduce animations |
| Focus trap | Modal dialogs, drawers, and lightboxes trap focus while open |
| Error messages | Linked to form field via `aria-describedby` |
| Heading hierarchy | `h1` → `h2` → `h3` never skipped |

---

## 15. SEO Strategy

### 15.1 Technical SEO

- Canonical URLs on all pages
- `robots.txt` allowing all pages except `/admin`
- `sitemap.xml` auto-generated (Next.js plugin or `next-sitemap`)
- Structured data: `Organization` schema on homepage, `Event` schema on event pages, `Article` schema on blog posts
- Open Graph + Twitter Card meta on all pages (via `next-seo`)
- Clean URL slugs: `/events/intro-to-crispr-2026` (not `/events/3`)

### 15.2 On-Page SEO

- Each page has unique `<title>` and `<meta description>` — populated from Supabase content or hardcoded for static pages.
- H1 present on every page.
- Internal linking strategy: blog posts link to related events, team profiles link to relevant projects.

---

## 16. Component Hierarchy

```
App (Layout)
├── Navbar
│   ├── Logo
│   ├── NavLinks
│   ├── CTAButton
│   ├── ThemeToggle
│   └── MobileDrawer
│       └── NavLinks (mobile)
│
├── Pages
│   ├── HomePage
│   │   ├── HeroSection
│   │   │   ├── AnimatedBackground
│   │   │   ├── HeroText
│   │   │   └── HeroCTAs
│   │   ├── StatsBar
│   │   ├── AboutSnippet
│   │   ├── FeaturedEvents
│   │   │   └── EventCard (×3)
│   │   ├── ResearchSpotlight
│   │   ├── TeamTeaser
│   │   │   └── AvatarCard (×6)
│   │   ├── LatestBlogPosts
│   │   │   └── BlogCard (×3)
│   │   ├── JoinCTABanner
│   │   └── AnnouncementsTicker
│   │
│   ├── EventsPage
│   │   ├── FilterBar
│   │   ├── EventsGrid
│   │   │   └── EventCard (×n)
│   │   └── Pagination
│   │
│   └── [Other pages following similar patterns]
│
├── Shared Components
│   ├── EventCard
│   ├── BlogCard
│   ├── ResearchCard
│   ├── MemberCard
│   ├── AnnouncementCard
│   ├── ImageLightbox
│   ├── FilterBar
│   ├── SearchInput
│   ├── Pagination
│   ├── SkeletonCard
│   ├── EmptyState
│   ├── Badge
│   ├── Avatar
│   ├── Modal
│   ├── Toast
│   └── RichTextRenderer
│
└── Footer
    ├── FooterBrand
    ├── FooterLinks (×3 columns)
    ├── NewsletterForm
    └── FooterBottom
```

---

## 17. User Flows

### 17.1 New Visitor → Join Flow
```
Homepage → reads about club → clicks "Join Us" CTA → 
/join form → fills form → submits → 
Success state (email confirmation) → 
Admin receives alert → reviews in /admin/registrations → 
Approves → Applicant receives acceptance email
```

### 17.2 Student → Event Registration Flow
```
Homepage / /events → finds event card → clicks "View Event" → 
/events/[slug] → reads description → clicks "Register Now" → 
fills registration form (inline or modal) → submits → 
Confirmation email sent → Registration saved in DB
```

### 17.3 Admin → Create Event Flow
```
/auth/login → authenticated → /admin/dashboard → 
/admin/events → "Create Event" → fill form + upload image → 
set registration open + max seats → Publish → 
Event appears on /events (via ISR revalidation)
```

### 17.4 Admin → Post Announcement Flow
```
/admin/announcements → "New Announcement" → 
fill title + body + priority + expiry → Save → 
Announcement appears on /announcements + homepage ticker
```

---

## 18. Development Milestones

### Phase 1 — Foundation (Week 1–2)
- [ ] Project scaffold (Next.js + Tailwind + TypeScript)
- [ ] Supabase project setup (DB tables, RLS policies, Storage buckets)
- [ ] Design system implementation (colors, typography, spacing tokens in Tailwind config)
- [ ] Navbar + Footer components
- [ ] Dark/light mode toggle
- [ ] Authentication flow (login, middleware, session management)

### Phase 2 — Core Public Pages (Week 3–4)
- [ ] Homepage (all sections with skeleton loaders)
- [ ] About page
- [ ] Team page (with filtering)
- [ ] Events listing + individual event page
- [ ] Join form (with validation + Supabase insert + email)

### Phase 3 — Content Pages (Week 5–6)
- [ ] Blog listing + individual post (markdown rendering)
- [ ] Research projects listing + detail page
- [ ] Gallery (masonry grid + lightbox)
- [ ] Announcements page
- [ ] Contact page + form

### Phase 4 — Admin Panel (Week 7–8)
- [ ] Admin dashboard
- [ ] Events manager (CRUD + registration viewer)
- [ ] Blog manager (rich text editor + image upload)
- [ ] Gallery manager (bulk upload)
- [ ] Announcements manager
- [ ] Join requests manager
- [ ] Team members manager

### Phase 5 — Polish & Optimization (Week 9–10)
- [ ] Animation implementation (Framer Motion — hero, scroll reveals, page transitions)
- [ ] Responsive testing across all breakpoints
- [ ] Accessibility audit (keyboard nav, ARIA, contrast)
- [ ] Performance optimization (bundle analysis, image optimization, caching)
- [ ] SEO implementation (meta tags, sitemap, structured data)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Content integration (real data from club coordinators)

### Phase 6 — Handoff (Week 11)
- [ ] University IT handoff (domain + deployment)
- [ ] Admin training documentation
- [ ] Final QA pass
- [ ] Go live

---

## 19. Future Scalability

| Feature | Description | Priority |
|---|---|---|
| **Discussion Forum** | Club-internal forum for research discussions | Medium |
| **Resource Library** | Curated papers, tutorials, and learning resources | High |
| **Alumni Network** | Separate section for club alumni with profiles | Medium |
| **Live Event Streaming** | Embedded YouTube/Meet stream for online events | Medium |
| **Mobile App** | React Native app using same Supabase backend | Low |
| **Publication Repository** | Formal storage for club-affiliated papers | Medium |
| **Internship Board** | Faculty/alumni post relevant internship opportunities | High |
| **Member Dashboard** | Logged-in member view with personal event history, resources | Medium |
| **Multilingual Support** | Hindi/Gujarati language toggle | Low |
| **Push Notifications** | Web push for new announcements (via service workers) | Low |
| **AI-powered Search** | Semantic search across blog, research, events | Low (future) |

---

## 20. Appendix: Content Status Register

**Legend:** ✅ Confirmed (sourced from existing site) · ⚠ Pending (coordinator must supply) · 🔄 Partial

### 20.1 Text Content

| Content Item | Value | Status |
|---|---|---|
| Club Tagline | "Empowering students to explore cutting-edge genomic technologies shaping biomedical research and the future of medicine." | ✅ |
| Club Short Description | "A community of curious minds at Marwadi University exploring the frontiers of genomics, bioinformatics, and molecular biology — connecting students with the science shaping tomorrow's healthcare." | ✅ |
| Vision Statement | "To enable students to explore the latest genomic technologies shaping biomedical research, driving innovation in healthcare and life sciences." | ✅ |
| Mission Points (×3) | See Section 8.2 | ✅ |
| Department | Dept. of Bioinformatics, Faculty of Engineering & Technology | ✅ |
| Location | Cabin MA557, Marwadi University, Rajkot, Gujarat | ✅ |
| Club Email | aditya.saxena@marwadieducation.edu.in | ✅ |
| Phone/Ext | Ext. 1568 | ✅ |
| Membership Fee | ₹100 one-time annual | ✅ |
| MU Portal Registration Link | https://login.marwadiuniversity.ac.in | ✅ |
| Membership Benefits (×6) | See Section 8.9 | ✅ |
| Activities Count | 12+ | ✅ |
| Coordinators Count | 6+ | ✅ |
| Genomics 101 (×3 cards) | See Section 8.2, item 6 | ✅ |
| Club Founding Story | — | ⚠ Pending |
| Core Values (×4–6) | — | ⚠ Pending |
| Club Timeline Milestones | — | ⚠ Pending |
| Total Members (exact number) | — | ⚠ Pending |
| Years Active | — | ⚠ Pending |
| Research Projects Count | — | ⚠ Pending |
| Social Media URLs | Instagram, LinkedIn, Twitter/X, GitHub | ⚠ Pending |

### 20.2 People & Team

| Content Item | Status |
|---|---|
| Dr. Aditya Saxena — Name, role, cabin, ext, email | ✅ |
| Dr. Aditya Saxena — Photo | ⚠ Pending |
| Dr. Aditya Saxena — Short bio | ⚠ Pending |
| Other 5+ coordinator names & details | ⚠ Pending |
| Core team member list (name, role, photo, year) | ⚠ Pending |
| General member list | ⚠ Pending |

### 20.3 Events & Activities

| Content Item | Status |
|---|---|
| Full list of 12+ activities with descriptions | ⚠ Pending |
| Past event names, dates, descriptions | ⚠ Pending |
| Upcoming event details | ⚠ Pending |
| Event cover images | ⚠ Pending |

### 20.4 Media & Assets

| Content Item | Format Required | Status |
|---|---|---|
| Club logo (if exists) | SVG or PNG, transparent bg | ⚠ Pending |
| Faculty photos | 400×400px min, square | ⚠ Pending |
| Member photos | 400×400px min, square | ⚠ Pending |
| Event cover images | 1200×630px, 16:9 | ⚠ Pending |
| Gallery photos (past events) | Any resolution, min 800px wide | ⚠ Pending |
| Blog post cover images | 1200×630px | ⚠ Pending |

### 20.5 Blog & Research

| Content Item | Status |
|---|---|
| Blog post drafts / articles | ⚠ Pending |
| Research project descriptions | ⚠ Pending |
| Publication links (if any) | ⚠ Pending |

---

*PRD Version 1.1 — Content updated from existing site at https://genomic-club-website.vercel.app*
*Original v0 site built by Rhythm Bhojani. This PRD defines the full v1 rebuild.*
*Genomics Club, Marwadi University — May 2026*

---
