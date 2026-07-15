# 📘 API Documentation

## AI Powered Deep Packet Inspection & Network Threat Analyzer

---

# 📖 Introduction

The AI Powered Deep Packet Inspection & Network Threat Analyzer exposes a RESTful API built with **Spring Boot**.

The API enables secure authentication, packet analysis, report generation, AI-driven security insights, and access to historical analysis data.

All endpoints return JSON unless otherwise specified.

---

# 🌐 Base URL

Local Development

```
http://localhost:8080
```

API Root

```
http://localhost:8080/api
```

---

# 🔐 Authentication

The API uses **JSON Web Token (JWT)** authentication.

Authentication follows a stateless architecture where every authenticated request includes a JWT token.

Workflow

```
Register
      │
      ▼
Login
      │
      ▼
Receive JWT
      │
      ▼
Send JWT with every request
```

---

## Authorization Header

```
Authorization: Bearer YOUR_JWT_TOKEN
```

Example

```
Authorization: Bearer eyJhbGc...
```

---

# 📂 API Modules

The REST API consists of five major modules.

| Module | Base Path |
|---------|-----------|
| Authentication | /api/auth |
| Packet Analysis | /api |
| Reports | /api/report |
| AI Insights | /api/insights |
| History | /api/history |

---

# 🔑 Authentication Module

Responsible for

- User Registration
- Login
- Current User
- Logout

---

## Authentication Flow

```
Register
        │
        ▼
Login
        │
        ▼
JWT Generated
        │
        ▼
Protected Requests
```

---

# 📂 Packet Analysis Module

Responsible for

- Uploading PCAP files
- Packet Parsing
- Flow Reconstruction
- Statistics Generation
- Threat Detection

The endpoint accepts

```
multipart/form-data
```

containing

```
file
```

---

# 🤖 AI Insights Module

The AI Insight module analyzes the latest packet inspection result and generates

- Risk Score
- Risk Level
- Summary
- Recommendations

Example

```
LOW

MEDIUM

HIGH

CRITICAL
```

---

# 📄 Report Module

The Report Module exports analysis into multiple formats.

Supported formats

- PDF

- JSON

- TXT

Downloads are returned as files.

---

# 📚 History Module

The History module stores previous analyses.

Every completed packet analysis is saved and can be retrieved later.

Typical information includes

- File Name

- Analysis Date

- Statistics

- Threat Summary

---

# 🔄 Request Lifecycle

```
Frontend
      │
      ▼
REST API
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Packet Parser
      │
      ▼
Flow Engine
      │
      ▼
Threat Detector
      │
      ▼
Statistics Engine
      │
      ▼
Analysis Result
      │
      ▼
Database
      │
      ▼
Response
```

---

# 📦 Request Formats

## JSON

Authentication APIs

```
Content-Type:

application/json
```

---

## Multipart

Packet Upload

```
multipart/form-data
```

---

# 📤 Response Formats

The API may return

```
application/json

application/pdf

text/plain
```

depending on the endpoint.

---

# 🚦 HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|409|Conflict|
|500|Internal Server Error|

---

# ❌ Error Response

Typical JSON error

```json
{
    "timestamp":"2026-07-14T11:20:00",
    "status":400,
    "error":"Bad Request",
    "message":"File cannot be empty"
}
```

---

# 📁 File Upload Rules

Supported

```
.pcap

.pcapng
```

Maximum upload size depends on the Spring Boot configuration.

Files are processed temporarily during analysis.

---

# 🔒 Security

The application implements

- JWT Authentication

- Spring Security

- Password Encryption

- Protected Routes

- Stateless Authentication

- CORS Configuration

---

# ⚡ Performance

The backend has been optimized for

- Packet Parsing

- Flow Reconstruction

- Statistics Generation

- Report Export

- Efficient REST Responses

---

# 📊 API Workflow

```
Register User
      │
      ▼
Authenticate
      │
      ▼
Receive JWT
      │
      ▼
Upload PCAP
      │
      ▼
Packet Analysis
      │
      ▼
Generate Statistics
      │
      ▼
Threat Detection
      │
      ▼
Generate AI Insights
      │
      ▼
Generate Reports
      │
      ▼
Store History
```

---

# 🛠 Best Practices

- Authenticate before accessing protected endpoints.

- Validate uploaded PCAP files.

- Store JWT securely.

- Handle HTTP status codes appropriately.

- Always check API responses before rendering.

- Avoid exposing JWT tokens.

---

# 📚 Related Documentation

See

```
docs/api/endpoints.md
```

for endpoint-level documentation.

See

```
docs/architecture/
```

for architecture diagrams.

See

```
docs/installation.md
```

for project setup.

---

# 📌 Version

Current API Version

```
v1.0.0
```

---

# 👨‍💻 Maintainer

**Ankit Yadav**

GitHub

https://github.com/Srvankit

Repository

https://github.com/Srvankit/AI-Powered-Deep-Packet-Inspection-and-Network-Threat-Analyzer

---

End of Documentation