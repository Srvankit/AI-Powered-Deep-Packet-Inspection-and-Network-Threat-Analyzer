# 🏗️ System Architecture

This directory contains the architectural diagrams and design documentation for the **AI Powered Deep Packet Inspection & Network Threat Analyzer**.

The project follows a modular enterprise architecture, separating responsibilities across the frontend, backend, packet processing engine, database, and reporting modules.

---

# 📑 Architecture Overview

The complete system consists of five major components.

```
React Frontend
        │
        ▼
Spring Boot REST API
        │
        ▼
Deep Packet Inspection Engine
        │
        ▼
Threat Detection & Statistics
        │
        ▼
PostgreSQL Database
```

---

# 📂 Architecture Diagrams

## 1️⃣ Overall System Architecture

File

```
dpi-architecture.png
```

This diagram illustrates the complete workflow of the application from the user interface to packet analysis and report generation.

It includes

- Frontend
- Backend
- DPI Engine
- Database
- Reports
- AI Insights

---

## 2️⃣ Frontend Architecture

File

```
frontend-architecture.png
```

The frontend is built using React and follows a component-based architecture.

Main layers include

- Pages
- Components
- Context API
- Hooks
- Services
- Routing

Responsibilities

- Authentication
- Dashboard
- Upload
- Reports
- AI Insights
- Settings
- History

---

## 3️⃣ Backend Architecture

File

```
backend-architecture.png
```

The backend follows the Spring Boot layered architecture.

```
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
Database
```

Major modules

- Authentication
- Packet Analysis
- Reports
- AI Insights
- History
- Security

---

## 4️⃣ Database Schema

File

```
database-schema.png
```

The database schema defines how application data is stored.

Major entities include

- Users
- Analysis History
- Authentication Data

PostgreSQL is used as the primary database.

---

## 5️⃣ Request Lifecycle

File

```
request-lifecycle.png
```

This diagram explains how an incoming request travels through the application.

```
Client
    │
    ▼
Spring Controller
    │
    ▼
Service Layer
    │
    ▼
Packet Processing
    │
    ▼
Threat Detection
    │
    ▼
Database
    │
    ▼
JSON Response
```

---

# 🧩 Design Principles

The architecture follows several software engineering principles.

## Separation of Concerns

Frontend, backend, packet analysis, reporting, and persistence are separated into dedicated modules.

---

## Layered Architecture

The backend follows a layered structure.

```
Controller

↓

Service

↓

Repository

↓

Database
```

---

## Stateless Authentication

Authentication is implemented using JSON Web Tokens (JWT).

Each authenticated request carries its own authorization token.

---

## Modular Design

Each major feature is implemented as an independent module.

Examples

- Authentication
- Analysis
- Reports
- History
- AI Insights

---

## Scalability

The architecture allows future integration of

- Kafka
- Elasticsearch
- Redis
- Kubernetes
- Prometheus
- Grafana

without major structural changes.

---

# 🚀 Future Architecture

Future releases may include

```
Load Balancer
       │
       ▼
API Gateway
       │
       ▼
Microservices
       │
       ▼
Kafka
       │
       ▼
Threat Engine
       │
       ▼
AI Models
       │
       ▼
PostgreSQL
```

---

# 📚 Related Documentation

For additional information, see

- `../installation.md`
- `../roadmap.md`
- `../api/api-documentation.md`
- `../api/endpoints.md`

---

# 📌 Summary

The architecture has been designed to be

- Modular
- Secure
- Scalable
- Maintainable
- Enterprise Ready

and serves as the foundation for future enhancements such as real-time packet inspection, distributed processing, and AI-assisted threat detection.