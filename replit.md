# Portfolio Website

## Overview

This is a personal portfolio website for Shinabella, a graphics designer and computer scientist. The application showcases professional work, skills, services, and provides a contact interface. Built as a single-page application with smooth scrolling sections, the site features a modern, minimalist design with both light and dark themes. Projects are displayed in a masonry grid layout with procedurally generated hero visuals based on project metadata.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (minimal single-page application with a home route and 404 page).

**UI Component Library**: Radix UI primitives with shadcn/ui components styled using Tailwind CSS. The design system follows a "New York" style variant with custom theming supporting light and dark modes.

**State Management**: 
- React Context API for theme management (ThemeProvider)
- TanStack Query (React Query) for server state management and API data fetching
- Local component state using React hooks

**Styling Approach**:
- Tailwind CSS for utility-first styling
- Custom CSS variables for theme colors defined in `index.css`
- Design system with defined spacing, typography, and color primitives
- Support for both light and dark modes with CSS class-based theme switching
- Custom elevation utilities (`hover-elevate`, `active-elevate-2`) for interactive feedback

**Key Design Decisions**:
- Typography-driven hierarchy using DM Sans/Inter fonts from Google Fonts CDN
- Generous whitespace and intentional simplicity per design guidelines
- Masonry grid layout for project showcase using `react-masonry-css`
- Framer Motion for scroll-triggered animations and page transitions
- Procedural generation of project hero visuals based on tags and color palettes

**Component Structure**:
- Section-based components (AboutSection, SkillsSection, ServicesSection, WorkSection, TestimonialsSection, ContactSection)
- Reusable UI primitives in `components/ui/` directory
- Mock device frames (mobile/desktop) for project presentation
- Centralized theme toggle with system preference detection

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: 
- Vite middleware integration for hot module replacement in development
- Custom logging middleware for API request tracking
- Raw body parsing for webhook support

**API Design**: RESTful API structure with routes prefixed by `/api` (currently minimal implementation with placeholder storage interface).

**Session Management**: Configured to use `connect-pg-simple` for PostgreSQL-backed sessions (though not actively implemented).

**Rationale**: Express provides a lightweight, familiar foundation for API endpoints. The architecture separates concerns between static asset serving (handled by Vite in dev, static serving in production) and API routes. This allows for easy scaling and maintenance as backend requirements grow.

### Data Storage

**Database**: PostgreSQL accessed via Neon serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management.

**Schema Definition**: TypeScript schema definitions in `shared/schema.ts` with Zod validation schemas generated via `drizzle-zod`. Currently defines a basic `users` table with UUID primary keys.

**Storage Interface**: Abstraction layer (`IStorage` interface) with in-memory implementation (`MemStorage`) for development/testing. This allows swapping storage backends without changing application code.

**Migration Strategy**: Schema changes managed through Drizzle Kit with migrations stored in `./migrations` directory. Push-based workflow using `db:push` script.

**Rationale**: Drizzle ORM provides type-safe database queries while maintaining close proximity to SQL. The storage interface pattern allows for flexible testing and gradual migration from in-memory to persistent storage. Neon's serverless PostgreSQL is well-suited for Replit deployments.

### Project Data Management

**Static Data**: Project portfolio items stored in `client/src/data/projects.json` with typed interfaces.

**Mock Visual Generation**: Procedural SVG generation in `MockHeroVisual.tsx` component that creates unique project previews based on:
- Project ID (used as seed for consistent randomization)
- Tags (determines shapes and layout patterns)
- Color palette (applied to gradients and geometric elements)

**Design Decision**: Static JSON storage for portfolio items simplifies deployment and eliminates database queries for read-only content. Visual generation ensures consistent, unique previews without requiring image assets.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Headless component primitives for accessibility and behavior (@radix-ui/react-*)
- **shadcn/ui**: Pre-styled component implementations built on Radix
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for scroll triggers and transitions
- **React Masonry CSS**: Grid layout for project portfolio

### Form Management
- **React Hook Form**: Form state and validation (@hookform/resolvers)
- **Zod**: Schema validation integrated with Drizzle ORM

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Build tool and dev server with HMR
- **ESBuild**: Production build bundler for server code
- **Tailwind CSS**: Utility-first CSS framework with PostCSS

### Database & Backend
- **Neon Serverless**: PostgreSQL database driver optimized for serverless
- **Drizzle ORM**: Type-safe ORM with migration support
- **Express.js**: Minimal web server framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation helper (dev only)
- **@replit/vite-plugin-dev-banner**: Development environment indicator (dev only)

### Routing & State
- **Wouter**: Lightweight client-side router
- **TanStack Query**: Server state management and caching