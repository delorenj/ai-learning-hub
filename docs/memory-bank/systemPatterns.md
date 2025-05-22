```markdown
## System Patterns (systemPatterns.md)

This document outlines the system patterns used in the AI Development Workshop project, covering architectural design, data models, API definitions, component structure, integration points, and scalability strategy.

### 1. Architectural Design: Hub-and-Spoke with Microservice Tendencies

The system adopts a hub-and-spoke architecture with microservice tendencies. The central hub is the user interface (UI), providing access to various AI workflow modules (the spokes) and managing user authentication and authorization.  Each workflow module, while accessible through the hub, operates with a degree of independence, allowing for individual scaling and updates. The RAG chatbot is treated as a distinct microservice, communicating with the hub and other modules via APIs. This allows for independent deployment and scaling of the chatbot component.

*   **Hub (UI):**  Handles user authentication, authorization, navigation, and presentation of workflow modules.
*   **Spokes (Workflow Modules):**  Each module implements a specific AI workflow (e.g., image classification, natural language processing, time series analysis).  They expose APIs for data input, processing, and result retrieval.
*   **RAG Chatbot Microservice:**  A self-contained service responsible for answering user questions based on the Jarad's knowledge base. It interacts with the hub and potentially workflow modules via APIs to provide contextually relevant information.

This approach provides modularity, allowing for easier maintenance, upgrades, and feature additions. The microservice tendencies allow for independent scaling of individual components based on demand.

### 2. Data Models

The system utilizes several data models, tailored to the specific components:

*   **User Model:**
    *   `user_id` (UUID): Unique identifier for the user.
    *   `username` (String): User's login name.
    *   `email` (String): User's email address.
    *   `password_hash` (String): Hashed password.
    *   `roles` (Array<String>): User's roles (e.g., "user", "admin").
    *   `progress` (Object):  Stores user progress within each workflow module (e.g., completion status, scores).  The structure of this object will vary depending on the module.

*   **Workflow Module Data Model (Abstract):**  Each workflow module will define its own specific data model, but all will adhere to a common structure for input and output:
    *   `input_data` (Object):  Data required for the workflow to execute. Structure is module-specific.
    *   `output_data` (Object):  Results of the workflow execution. Structure is module-specific.
    *   `status` (String):  Status of the workflow execution (e.g., "pending", "running", "completed", "failed").
    *   `error_message` (String, optional):  Error message if the workflow failed.

*   **RAG Chatbot Data Model:**
    *   `query` (String): User's question.
    *   `context` (String, optional): Contextual information provided by the hub or workflow modules.
    *   `response` (String): Chatbot's answer.
    *   `source_documents` (Array<Object>): Metadata about the documents used to generate the response, including title, URL, and page number.

*   **Knowledge Base Data Model (for RAG Chatbot):** The knowledge base is structured as a collection of documents. Each document is represented as:
    *   `document_id` (UUID): Unique identifier for the document.
    *   `title` (String): Title of the document.
    *   `content` (String): Text content of the document.
    *   `metadata` (Object): Additional metadata, such as author, date, and source URL.

### 3. API Definitions

The system relies heavily on RESTful APIs for communication between components.  All APIs will utilize JSON for request and response bodies.

*   **User Authentication API (Hub):**
    *   `POST /auth/login`:  Authenticates a user and returns a JWT token.
        *   Request Body: `{ username, password }`
        *   Response Body: `{ token }`
    *   `POST /auth/register`:  Registers a new user.
        *   Request Body: `{ username, email, password }`
        *   Response Body: `{ user_id }`

*   **Workflow Module API (Generic):**  Each workflow module will expose an API endpoint at `/workflow/{module_id}`.
    *   `POST /workflow/{module_id}/execute`:  Executes the workflow. Requires authentication.
        *   Request Body: `input_data` (module-specific format)
        *   Response Body: `{ task_id }`
    *   `GET /workflow/{module_id}/status/{task_id}`:  Retrieves the status of a workflow execution. Requires authentication.
        *   Response Body: `{ status, output_data, error_message }`

*   **RAG Chatbot API:**
    *   `POST /chatbot/query`:  Sends a query to the chatbot. Requires authentication.
        *   Request Body: `{ query, context (optional) }`
        *   Response Body: `{ response, source_documents }`

### 4. Component Structure

The system is composed of the following key components:

*   **UI (React.js):**  The front-end application responsible for user interaction, navigation, and data visualization.
*   **API Gateway (Node.js with Express):**  Handles authentication, authorization, and routing requests to the appropriate backend services.
*   **Workflow Modules (Python with Flask/FastAPI):**  Each module implements a specific AI workflow and exposes its API. Example modules:
    *   Image Classification Module
    *   NLP Sentiment Analysis Module
    *   Time Series Forecasting Module
*   **RAG Chatbot Service (Python with Langchain/Faiss/Chroma):**  The chatbot service responsible for answering user questions based on Jarad's knowledge base.  It includes components for:
    *   Document Ingestion:  Processes and indexes the knowledge base documents.
    *   Vector Database: Stores document embeddings for efficient similarity search.
    *   Question Answering Model:  Generates responses based on the query and retrieved documents.
*   **Database (PostgreSQL):**  Stores user data, workflow metadata, and potentially other persistent data.

### 5. Integration Points

The key integration points within the system are:

*   **UI <-> API Gateway:**  The UI communicates with the API Gateway via HTTP requests.  Authentication is handled using JWT tokens passed in the `Authorization` header.
*   **API Gateway <-> Workflow Modules:** The API Gateway routes requests to the appropriate workflow module based on the URL path. Communication is via HTTP requests.
*   **API Gateway <-> RAG Chatbot Service:**  The API Gateway routes chatbot queries to the RAG Chatbot Service via HTTP requests.
*   **Workflow Modules <-> RAG Chatbot Service (Optional):** Workflow modules can optionally send contextual information to the RAG Chatbot Service when querying for help related to a specific workflow. This is done via the chatbot API.
*   **All Services <-> Database:** All relevant services interact with the database to persist and retrieve data.

### 6. Scalability Strategy

The system is designed for scalability using the following strategies:

*   **Horizontal Scaling:**  The API Gateway, Workflow Modules, and RAG Chatbot Service can be horizontally scaled by adding more instances behind a load balancer.
*   **Database Scaling:**  The database can be scaled using techniques such as read replicas and sharding.
*   **Caching:**  Caching can be implemented at various levels (e.g., API Gateway, workflow modules) to reduce database load and improve response times.  Consider using a caching service like Redis or Memcached.
*   **Asynchronous Processing:**  Long-running workflow tasks can be executed asynchronously using a task queue (e.g., Celery, RabbitMQ). This allows the API to return immediately and avoids blocking the UI.
*   **Containerization (Docker):**  All services are containerized using Docker to ensure consistent environments and facilitate deployment and scaling.
*   **Orchestration (Kubernetes):**  Kubernetes is used to orchestrate the deployment, scaling, and management of the containers.

Created on 5/21/2025
```