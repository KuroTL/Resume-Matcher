This document provides a high-level overview of the Resume Matcher application's codebase, intended to be used as a guide for Gemini.

### Project Structure

The project is a monorepo with two main applications: `frontend` and `backend`.

**Frontend (`apps/frontend`)**

The frontend is a [Next.js](https://nextjs.org/) application written in [TypeScript](https://www.typescriptlang.org/). It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [shadcn/ui](https://ui.shadcn.com/) for components.

-   **`app/`**: The main application directory, following the Next.js App Router structure.
    -   **`page.tsx`**: The landing page of the application.
    -   **`dashboard/`**: The main dashboard page where the resume analysis is displayed.
-   **`components/`**: Reusable React components.
    -   **`common/`**: Common components used throughout the application.
    -   **`dashboard/`**: Components specific to the dashboard.
    -   **`home/`**: Components for the landing page.
    -   **`jd-upload/`**: Components for the job description upload.
    -   **`ui/`**: UI components from shadcn/ui, including a standardized `Button` component.
-   **`hooks/`**: Custom React hooks.
-   **`lib/`**: Utility functions and API clients.
-   **`public/`**: Static assets, such as images and videos.

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

-   **Frontend**: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
-   **Backend**: Python, FastAPI, SQLAlchemy, Pydantic
-   **Database**: (Not explicitly defined, but likely a relational database compatible with SQLAlchemy, such as PostgreSQL or SQLite)
-   **LLMs**: OpenAI, LlamaIndex, Ollama

### Getting Started

To run the application, you can use the following commands from the root directory:

-   `npm install`: Installs the dependencies for both the frontend and backend.
-   `npm run dev`: Starts both the frontend and backend in development mode.
-   `npm run build`: Builds both the frontend and backend for production.
-   `npm run start`: Starts both the frontend and backend in production mode.
