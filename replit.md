# Hardscaping Digital Marketing Agency - Project Documentation

## Overview

This is a specialized digital marketing agency website built for hardscaping contractors. The application provides a professional web presence showcasing marketing services including Local SEO, Google Business Profile optimization, call tracking, and lead generation. The site features a modern, conversion-focused design with comprehensive sections for services, portfolio case studies, testimonials, and contact forms for lead capture.

The application is built as a full-stack TypeScript project using React for the frontend and Express for the backend, with form submissions stored via a configurable storage layer (currently in-memory, designed to integrate with PostgreSQL via Drizzle ORM).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application with / and 404 routes)

**UI Component System**
- shadcn/ui component library (New York style variant) providing a comprehensive set of pre-built, accessible React components
- Radix UI primitives as the foundation for complex interactive components (dialogs, dropdowns, accordions, etc.)
- Tailwind CSS for utility-first styling with custom design system
- Custom design tokens defined in CSS variables supporting light/dark themes

**Design System**
- Color palette tailored to hardscaping industry with earth tones (browns, slate greys, goldenrod accents)
- Typography using Google Fonts: Montserrat (headings), Open Sans (body), Roboto (metrics)
- Comprehensive light/dark mode support via theme provider context
- Design guidelines documented in `design_guidelines.md` specifying colors, typography, spacing, and layout patterns

**State Management**
- React Query (TanStack Query) for server state management and data fetching
- React Hook Form with Zod validation for form state and validation
- Context API for theme management (ThemeProvider)

**Component Architecture**
- Modular section-based components (HeroSection, ServicesSection, PortfolioSection, etc.)
- Reusable UI primitives in `/components/ui/` following shadcn conventions
- Single-page layout pattern with all sections on home page, smooth scrolling navigation

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript throughout for type safety
- RESTful API design pattern for data endpoints

**API Structure**
- `POST /api/leads` - Submit lead generation forms with validation
- `POST /api/contacts` - Submit general contact inquiries
- `GET /api/leads` - Retrieve all leads (admin functionality)
- `GET /api/contacts` - Retrieve all contacts (admin functionality)

**Data Validation & Type Safety**
- Zod schemas defined in `shared/schema.ts` for runtime validation
- Drizzle-zod integration for generating insert schemas from database schema
- Shared types between client and server via `/shared` directory
- Email and phone number validation on form inputs

**Storage Layer**
- Abstracted storage interface (`IStorage`) allowing swappable implementations
- Current implementation: In-memory storage (`MemStorage`) for development
- Designed for PostgreSQL integration via Drizzle ORM (schema defined, config present)
- Database schema includes tables for: users, leads, contacts (all with UUID primary keys)

**Development Features**
- Request/response logging middleware with duration tracking
- Vite middleware integration in development mode for HMR
- Error handling middleware for consistent error responses
- CORS and JSON body parsing configured

### Data Models

**Lead Schema**
- Business information (businessName, contactName)
- Contact details (email, phone with validation)
- Project details (projectType, budgetRange, timeline)
- Optional message field
- Automatic timestamp (createdAt)

**Contact Schema**
- Basic contact form (name, email, subject, message)
- Automatic timestamp tracking

**User Schema**
- Authentication prepared (username, password fields)
- Not currently utilized in production flow

### Build & Deployment Configuration

**Development Mode**
- `npm run dev` starts Express server with Vite middleware
- Hot module replacement for frontend changes
- TypeScript compilation via tsx (no emit, type checking only)
- Replit-specific plugins for dev banner and cartographer in development

**Production Build**
- `npm run build` creates optimized Vite bundle and ESBuild server bundle
- Frontend assets output to `dist/public/`
- Server code bundled to `dist/index.js` as ESM
- `npm start` runs production server from compiled bundle

**Type Checking**
- `npm run check` runs TypeScript compiler in noEmit mode
- Incremental compilation with build info caching
- Path aliases configured for clean imports (@/, @shared/, @assets/)

### Styling Architecture

**Tailwind Configuration**
- Custom border radius scale (lg: 9px, md: 6px, sm: 3px)
- Extended color system using HSL with CSS variables for theming
- Design tokens for elevation effects (hover/active states)
- Button and badge outline variables for consistent borders
- Responsive breakpoints and container max-widths

**CSS Architecture**
- Global styles in `client/src/index.css` with CSS custom properties
- Theme-specific variables defined at :root and .dark levels
- Elevation utilities (elevate-1, elevate-2) for interactive states
- Opaque button border system with computed intensity

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching (v5.60.5)
- **react-hook-form**: Form state management (with @hookform/resolvers for Zod integration)
- **wouter**: Lightweight routing library
- **zod**: Runtime type validation and schema definition
- **class-variance-authority & clsx**: Utility for managing conditional CSS classes
- **lucide-react & react-icons**: Icon libraries for UI elements
- **date-fns**: Date formatting and manipulation
- **embla-carousel-react**: Carousel/slider functionality (if needed for portfolio)
- **cmdk**: Command menu component (if utilized)

### UI Component Dependencies (Radix UI)
Complete set of headless UI primitives including:
- Dialogs, Popovers, Dropdowns, Select inputs
- Accordion, Tabs, Navigation Menu
- Toast notifications, Tooltips, Progress indicators
- All primitives provide accessibility and keyboard navigation out of the box

### Backend Libraries
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM for database operations (v0.39.1)
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments (v0.10.4)
- **drizzle-kit**: Database migration and schema management tools
- **zod-validation-error**: User-friendly error messages from Zod validation
- **connect-pg-simple**: PostgreSQL session store (if sessions implemented)

### Build Tools & Development
- **vite**: Frontend build tool and dev server
- **@vitejs/plugin-react**: React support for Vite
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production server code
- **tailwindcss & autoprefixer**: CSS processing
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools (runtime error modal, cartographer, dev banner)

### Database & Schema
- **PostgreSQL**: Intended production database (via Neon serverless driver)
- **Drizzle ORM**: Type-safe database access with schema defined in `shared/schema.ts`
- Connection configured via `DATABASE_URL` environment variable
- Migration output directory: `./migrations`
- Currently using in-memory storage, but infrastructure ready for PostgreSQL integration

### Google Fonts
External font loading for brand typography:
- Montserrat (weights: 400, 500, 600, 700, 800)
- Open Sans (weights: 300, 400, 500, 600, 700)
- Roboto (weights: 400, 500, 700)

### Assets & Media
- Hero image and other visuals stored in `attached_assets/` directory
- Image optimization handled by Vite's asset pipeline
- SVG icons from lucide-react and react-icons packages