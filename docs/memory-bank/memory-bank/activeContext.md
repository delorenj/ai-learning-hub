```markdown
# Active Context (activeContext.md)

This document outlines the current state of the AI Learning Hub project, including sprint goals, ongoing tasks, known issues, priorities, next steps, and recent meeting notes.

## Sprint Goals (Sprint 2: Dynamic Content Implementation)

The primary goals for Sprint 2 are:

*   **Implement Dynamic How-To Guides:** Successfully fetch, render, and display how-to guides from the chosen content management system (CMS). Guides should be searchable and filterable.
*   **Implement Dynamic Tip-Snips:**  Successfully fetch, render, and display tip-snips from the CMS. Tip-snips should be categorized and display relevant metadata (e.g., topic, difficulty).
*   **Integrate TailwindCSS & Shadcn Components:**  Refactor existing Next.js components to fully utilize TailwindCSS for styling and integrate Shadcn components for improved UI/UX.
*   **TypeScript Conversion (How-To Guide components):** Convert the components responsible for rendering how-to guides to TypeScript, ensuring type safety and improved code maintainability.

## Ongoing Tasks

*   **Backend Integration (CMS):** Connecting the Next.js application to the chosen CMS (Contentful) and configuring the API endpoints for fetching how-to guides and tip-snips.  (Assigned to: John D.)
*   **How-To Guide Component Development (TypeScript):** Developing the React components responsible for displaying individual how-to guides, including formatting, code snippets, and related resources.  (Assigned to: Alice S.)
*   **Tip-Snip Component Development (React/Tailwind):** Creating the React components for displaying tip-snips, focusing on clear presentation and categorization. (Assigned to: Bob M.)
*   **Search Functionality Implementation:** Implementing the search functionality for how-to guides, allowing users to quickly find relevant guides based on keywords. (Assigned to: John D.)
*   **TailwindCSS Migration (Global Styles):**  Migrating global styles from existing CSS to TailwindCSS classes for consistent styling across the application. (Assigned to: Carol L.)

## Known Issues

*   **CMS API Rate Limiting:** We've encountered rate limiting issues with the Contentful API during testing with a large number of requests. We need to implement caching mechanisms or optimize API calls to mitigate this.
*   **Shadcn Component Compatibility (Next.js 14):**  Minor compatibility issues have been identified with some Shadcn components when used with Next.js 14. Requires further investigation and potential workarounds or alternative component selection.
*   **Search Indexing Performance:** Initial testing of the search functionality reveals slow indexing performance. We need to explore alternative indexing strategies or optimize the existing implementation.

## Priorities

1.  **Resolve CMS API Rate Limiting:** This is a blocking issue for consistent content delivery.
2.  **Complete How-To Guide Component Development:** Essential for showcasing the core dynamic content functionality.
3.  **Implement Basic Search Functionality:** Enables users to find relevant content quickly.
4.  **Address Shadcn Component Compatibility Issues:** Ensure UI stability and functionality.

## Next Steps

*   **John D.:** Research and implement caching strategies for the Contentful API. Investigate alternative indexing strategies for search.
*   **Alice S.:** Complete the TypeScript conversion of the How-To Guide components and address any type-related errors.
*   **Bob M.:** Finalize the Tip-Snip component design and ensure it integrates seamlessly with the overall application styling.
*   **Carol L.:** Continue migrating global styles to TailwindCSS, focusing on the header and footer components.
*   **All:**  Regularly test and report any bugs or issues encountered during development.

## Meeting Notes (May 24, 2025 - Sprint Review)

*   **Attendees:** John D., Alice S., Bob M., Carol L., Project Lead
*   **Key Discussions:**
    *   Progress on How-To Guide component development is slightly behind schedule due to complexities with code snippet highlighting. Alice S. will prioritize this.
    *   John D. reported on the Contentful API rate limiting issue. A proposal for implementing a Redis-based caching layer was presented and approved.
    *   Bob M. shared the initial design for the Tip-Snip component. Feedback was provided on improving visual hierarchy and readability.
    *   Carol L. provided an update on the TailwindCSS migration.  The team agreed to adopt a consistent naming convention for Tailwind classes.
*   **Action Items:**
    *   Alice S.: Prioritize code snippet highlighting in the How-To Guide component.
    *   John D.: Implement Redis-based caching for the Contentful API.
    *   Bob M.: Revise the Tip-Snip component design based on feedback.
    *   Carol L.: Document the TailwindCSS naming convention for the project.

Created on 5/25/2025
```