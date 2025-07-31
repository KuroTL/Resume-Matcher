This document provides a high-level overview of the Resume Matcher application's codebase, intended to be used as a guide for Claude.

### Project Structure

The project is a monorepo with two main applications: `frontend` and `backend`.

**Frontend (`apps/frontend`)**

The frontend is a [Next.js 15](https://nextjs.org/) application written in [TypeScript](https://www.typescriptlang.org/). It uses [Tailwind CSS v4](https://tailwindcss.com/) for styling and [shadcn/ui](https://ui.shadcn.com/) for components. The application follows Next.js App Router structure with modern React patterns.

-   **`app/`**: The main application directory, following the Next.js App Router structure.
    -   **`layout.tsx`**: Root layout with HTML structure, global CSS imports, and context providers.
    -   **`page.tsx`**: Homepage with the Hero component.
    -   **`css/`**: Global stylesheets including Tailwind configuration and CSS variables.
    -   **`dashboard/`**: Dashboard page with resume analysis, job listings, and resume preview.
-   **`components/`**: Reusable React components organized by feature.
    -   **`common/`**: Shared components including:
        - `background-container.tsx`: Layout wrapper component
        - `resume_previewer_context.tsx`: React context for resume data management
        - Various UI components for file upload, animations, and visual effects
    -   **`dashboard/`**: Dashboard-specific components for job analysis and resume display.
    -   **`home/`**: Landing page components including the animated hero section.
    -   **`jd-upload/`**: Components for job description upload functionality.
    -   **`ui/`**: shadcn/ui components (Button, Dialog, Textarea, Label, etc.) with proper TypeScript typing.
-   **`hooks/`**: Custom React hooks for file upload and other functionality.
-   **`lib/`**: Utility functions and API clients.
    -   **`utils.ts`**: Contains the `cn()` utility for conditional class merging using clsx and tailwind-merge.
    -   **`api/`**: API client functions for backend communication.
-   **`public/`**: Static assets including videos and other media files.
-   **`components.json`**: shadcn/ui configuration file defining component paths and styling preferences.
-   **Configuration files**:
    -   **`next.config.ts`**: Next.js configuration with API rewrites for backend proxy.
    -   **`tailwind.config.js`**: Tailwind CSS configuration with custom theme, colors, and animations.
    -   **`postcss.config.mjs`**: PostCSS configuration for Tailwind processing.
    -   **`tsconfig.json`**: TypeScript configuration with path aliases.

**Backend (`apps/backend`)**

The backend is a [Python](https://www.python.org/) application built with [FastAPI](https://fastapi.tiangolo.com/). It uses [SQLAlchemy](https://www.sqlalchemy.org/) for the database ORM and [Pydantic](https://pydantic-docs.helpmanual.io/) for data validation.

-   **`app/`**: The main application directory.
    -   **`agent/`**: Contains the logic for interacting with large language models (LLMs).
        -   **`providers/`**: Different LLM providers (OpenAI, LlamaIndex, Ollama).
        -   **`strategies/`**: Different strategies for using the LLMs.
    -   **`api/`**: The FastAPI application, defining the API routes.
        -   **`router/`**: The API routers.
            -   **`v1/`**: Version 1 of the API.
    -   **`core/`**: Core application logic, including configuration and database connection.
    -   **`models/`**: SQLAlchemy database models.
    -   **`prompt/`**: Prompts for the LLMs.
    -   **`schemas/`**: Pydantic schemas for data validation.
    -   **`services/`**: Business logic for the application.

**Documentation (`docs`)**

The `docs` directory contains documentation for the project, including a guide for configuring the application.

### Technologies

-   **Frontend**: 
    - Next.js 15.3.0 with App Router
    - React 19 with TypeScript
    - Tailwind CSS v4 with CSS variables and dark mode support
    - shadcn/ui with Radix UI primitives
    - Class Variance Authority for component variants
    - Lucide React for icons
    - Motion library for animations
-   **Backend**: Python, FastAPI, SQLAlchemy, Pydantic
-   **Database**: (Not explicitly defined, but likely a relational database compatible with SQLAlchemy, such as PostgreSQL or SQLite)
-   **LLMs**: OpenAI, LlamaIndex, Ollama

### Getting Started

To run the application, you can use the following commands:

**From the root directory:**
-   `npm install` or `yarn install`: Installs the dependencies for both the frontend and backend.
-   `npm run dev` or `yarn dev`: Starts both the frontend and backend in development mode.
-   `npm run build` or `yarn build`: Builds both the frontend and backend for production.
-   `npm run start` or `yarn start`: Starts both the frontend and backend in production mode.

**Frontend specific (from `apps/frontend/`):**
-   `yarn dev`: Starts the Next.js development server with Turbopack on port 3000
-   `yarn build`: Creates an optimized production build
-   `yarn start`: Runs the production build
-   `yarn lint`: Runs ESLint for code quality checks
-   `yarn format`: Formats code using Prettier

### Development Notes

- The frontend uses **Yarn** as the package manager
- Development server runs on `http://localhost:3000` with Turbopack for fast refresh
- API requests to `/api_be/*` are proxied to the backend at `http://localhost:8000`
- The application supports both light and dark modes via CSS variables
- All UI components follow shadcn/ui patterns with proper TypeScript types
- Code formatting is enforced via Prettier and ESLint configurations

### Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Modern React**: Uses React 19 features with proper context management
- **Animation Support**: Smooth transitions and gradient animations
- **Component Library**: Consistent UI using shadcn/ui components
- **Developer Experience**: Fast refresh, type checking, and code formatting
