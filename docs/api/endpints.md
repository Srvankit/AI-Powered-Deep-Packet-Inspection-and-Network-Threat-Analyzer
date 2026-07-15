# 🌐 REST API Endpoints

This document describes every REST endpoint available in the AI Powered Deep Packet Inspection & Network Threat Analyzer.

---

# 📋 Base URL

Local Development

```
http://localhost:8080
```

API Base

```
http://localhost:8080/api
```

---

# 🔐 Authentication

Base Endpoint

```
/api/auth
```

---

## Register User

### Endpoint

```
POST /api/auth/register
```

### Description

Registers a new user account.

### Authentication

Not Required

### Request Headers

```
Content-Type: application/json
```

### Request Body

```json
{
  "firstname": "Ankit",
  "lastname": "Yadav",
  "email": "ankit@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Registration Successful",
  "token": "JWT_TOKEN"
}
```

### Status Codes

| Code | Description |
|------|-------------|
| 200 | Registration Successful |
| 400 | Invalid Request |
| 409 | User Already Exists |
| 500 | Internal Server Error |

---

## Login

### Endpoint

```
POST /api/auth/login
```

### Description

Authenticates an existing user.

### Authentication

Not Required

### Headers

```
Content-Type: application/json
```

### Request Body

```json
{
  "email":"ankit@example.com",
  "password":"password123"
}
```

### Success Response

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

### Status Codes

| Code | Description |
|------|-------------|
|200|Login Successful|
|401|Invalid Credentials|
|500|Server Error|

---

## Current User

### Endpoint

```
GET /api/auth/me
```

### Description

Returns the currently authenticated user.

### Authentication

JWT Required

### Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
  "authenticated": true,
  "username": "ankit@example.com",
  "role": "USER"
}
```

---

## Logout

### Endpoint

```
POST /api/auth/logout
```

### Description

Logs out the current authenticated user.

### Authentication

JWT Required

### Success Response

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

# 📂 Packet Analysis

Base Endpoint

```
/api
```

---

## Analyze PCAP

### Endpoint

```
POST /api/analyze
```

### Description

Uploads and analyzes a PCAP or PCAPNG file.

### Authentication

JWT Recommended

### Content Type

```
multipart/form-data
```

### Parameters

| Parameter | Type | Required |
|-----------|------|----------|
|file|MultipartFile|Yes|

### Request Example

```
file = sample.pcap
```

### Success Response

Returns an AnalysisResult object containing

- Packet Statistics
- Flow Table
- Threat Detection
- Protocol Statistics

### Status Codes

|Code|Description|
|----|-----------|
|200|Analysis Successful|
|400|No File Uploaded|
|500|Analysis Failed|

---

# 📄 Reports

Base Endpoint

```
/api/report
```

---

## Download JSON Report

### Endpoint

```
GET /api/report/json
```

### Description

Downloads the generated JSON traffic report.

### Response

```
traffic_report.json
```

### Content Type

```
application/json
```

---

## Download Text Report

### Endpoint

```
GET /api/report/text
```

### Description

Downloads the generated text report.

### Response

```
traffic_report.txt
```

### Content Type

```
text/plain
```

---

## Download PDF Report

### Endpoint

```
GET /api/report/pdf
```

### Description

Generates and downloads the PDF report.

### Response

```
traffic_report.pdf
```

### Content Type

```
application/pdf
```

---

# 🤖 AI Insights

Base Endpoint

```
/api/insights
```

---

## Get AI Insight

### Endpoint

```
GET /api/insights
```

### Description

Generates AI-powered security insights using the latest analysis.

### Success Response

```json
{
    "riskScore":82,
    "riskLevel":"HIGH",
    "summary":"...",
    "recommendations":[
        "...",
        "...",
        "..."
    ]
}
```

### Status Codes

|Code|Description|
|----|-----------|
|200|Success|
|500|Internal Error|

---

# 📚 Analysis History

Base Endpoint

```
/api/history
```

---

## Get Analysis History

### Endpoint

```
GET /api/history
```

### Description

Returns all previously analyzed PCAP files.

### Success Response

```json
[
    {
        "id":1,
        "filename":"traffic.pcap",
        "createdAt":"2026-07-14"
    }
]
```

### Status Codes

|Code|Description|
|----|-----------|
|200|Success|
|500|Server Error|

---

# 🔑 Authentication Header

Protected endpoints require a JWT token.

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📦 Content Types

|Type|Usage|
|----|-----|
|application/json|Authentication APIs|
|multipart/form-data|PCAP Upload|
|application/pdf|PDF Report|
|text/plain|TXT Report|
|application/json|JSON Report|

---

# 🚦 HTTP Status Codes

|Code|Meaning|
|----|-------|
|200|Request Successful|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Resource Not Found|
|409|Conflict|
|500|Internal Server Error|

---

# 📊 API Summary

| Module | Endpoints |
|---------|----------:|
|Authentication|4|
|Packet Analysis|1|
|Reports|3|
|AI Insights|1|
|History|1|

**Total REST Endpoints:** **10**

---

# 🔄 API Flow

```
User Registration
        │
        ▼
User Login
        │
        ▼
Receive JWT Token
        │
        ▼
Upload PCAP File
        │
        ▼
Packet Analysis
        │
        ▼
Dashboard
        │
        ▼
AI Insights
        │
        ▼
Download Reports
        │
        ▼
View History
```