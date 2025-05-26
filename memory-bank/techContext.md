```markdown
# Technology Context (techContext.md)

This document outlines the technology context for the AI Learning Hub transformation project. It details the technologies used, software development tools, development environment, testing strategy, deployment process, and continuous integration approach.

## Technologies Used

*   **Frontend:**
    *   **TypeScript:** Primary language for frontend development, providing static typing and improved code maintainability.
    *   **React:** JavaScript library for building user interfaces, providing a component-based architecture.
    *   **Next.js:** React framework for server-side rendering, static site generation, and API routes. Crucial for performance and SEO.
    *   **Tailwind CSS:** Utility-first CSS framework for rapid UI development and consistent styling.
    *   **GraphQL:** Query language for APIs, used for efficient data fetching from the CMS.
    *   **Apollo Client:** GraphQL client for managing data fetching and caching in the React application.

*   **Backend (CMS):**
    *   **Strapi:** Open-source headless CMS for managing content and providing a GraphQL API.
    *   **Node.js:** JavaScript runtime environment for running the Strapi CMS.
    *   **PostgreSQL:** Relational database used by Strapi to store content and user data.

*   **Infrastructure:**
    *   **AWS (Amazon Web Services):** Cloud platform for hosting the application and database. Specific services will include:
        *   **EC2:** Virtual servers for running the Next.js application and Strapi CMS.
        *   **RDS (Relational Database Service):** Managed PostgreSQL database.
        *   **S3 (Simple Storage Service):** Object storage for storing images and other assets.
        *   **CloudFront:** Content Delivery Network (CDN) for caching and distributing content globally.
        *   **Route 53:** DNS service for managing domain names and routing traffic.
        *   **IAM (Identity and Access Management):** Managing user access and permissions to AWS resources.

## Software Development Tools

*   **IDE:**
    *   **Visual Studio Code (VS Code):** Preferred IDE for developers, with extensions for TypeScript, React, GraphQL, and Tailwind CSS.
*   **Package Manager:**
    *   **npm (Node Package Manager):** Package manager for installing and managing project dependencies.
*   **Version Control:**
    *   **Git:** Distributed version control system for tracking code changes and collaboration.
    *   **GitHub:** Platform for hosting Git repositories and collaborating on code.
*   **Code Editor/Formatter:**
    *   **Prettier:** Code formatter for ensuring consistent code style.
    *   **ESLint:** Linter for identifying and fixing code style and potential errors.
*   **GraphQL Client:**
    *   **GraphiQL:** In-browser IDE for exploring and testing GraphQL APIs.

## Development Environment

*   **Operating System:** Developers can use their preferred operating system (macOS, Windows, Linux).
*   **Node.js:** Required for running the Next.js application and Strapi CMS. Version will be specified in the project's `package.json` file.
*   **Docker (Optional but Recommended):** Docker can be used to containerize the application and database, ensuring consistent environments across development, testing, and production.
*   **Local PostgreSQL Instance (Optional):** Developers can choose to install a local PostgreSQL instance for development purposes, or use a cloud-based development database.
*   **Environment Variables:** Configuration settings (API keys, database credentials) will be managed using environment variables.

## Testing Strategy

*   **Unit Testing:** Testing individual components and functions in isolation.
    *   **Jest:** JavaScript testing framework.
    *   **React Testing Library:** Library for testing React components by simulating user interactions.
*   **Integration Testing:** Testing the interaction between different components and services.
*   **End-to-End (E2E) Testing:** Testing the entire application flow from the user's perspective.
    *   **Cypress:** End-to-end testing framework.
*   **Manual Testing:** Performing manual testing to verify the functionality and usability of the application.
*   **Accessibility Testing:** Ensuring the application is accessible to users with disabilities.
    *   **axe-core:** Accessibility testing library.
*   **Performance Testing:** Evaluating the performance of the application under different load conditions.
    *   **Lighthouse:** Tool for auditing website performance, accessibility, and SEO.

## Deployment Process

*   **Infrastructure as Code (IaC):** Terraform will be used to manage the AWS infrastructure as code.
*   **Containerization (Docker):** The Next.js application and Strapi CMS will be containerized using Docker.
*   **AWS Deployment:**
    1.  Terraform will provision the necessary AWS resources (EC2 instances, RDS database, S3 bucket, CloudFront distribution, Route 53 records).
    2.  Docker images will be built and pushed to a container registry (e.g., AWS ECR).
    3.  Docker containers will be deployed to the EC2 instances.
    4.  CloudFront will be configured to cache and distribute content from the S3 bucket and EC2 instances.
    5.  Route 53 will be configured to route traffic to the CloudFront distribution.
*   **Automated Deployment:** The deployment process will be automated using a CI/CD pipeline (see below).

## Continuous Integration Approach

*   **CI/CD Pipeline:** GitHub Actions will be used to implement a CI/CD pipeline.
*   **Workflow:**
    1.  Code changes are pushed to a GitHub repository.
    2.  GitHub Actions triggers a build process.
    3.  The build process runs linters, formatters, and unit tests.
    4.  If all tests pass, Docker images are built and pushed to a container registry.
    5.  The CI/CD pipeline deploys the Docker containers to the AWS environment.
*   **Automated Testing:** The CI/CD pipeline will automatically run unit tests, integration tests, and E2E tests.
*   **Code Quality Checks:** The CI/CD pipeline will automatically run code quality checks using linters and formatters.

Created on 5/25/2025
```