# ⚙️ Installation Guide

This guide explains how to set up and run the **AI Powered Deep Packet Inspection & Network Threat Analyzer** on your local machine.

---

# 📋 Prerequisites

Before starting, make sure the following software is installed.

| Software | Version |
|----------|---------|
| Java | 21 or later |
| Maven | 3.9+ |
| Node.js | 20+ |
| npm | Latest |
| PostgreSQL | 16+ |
| Git | Latest |
| Docker *(Optional)* | Latest |

---

# 📥 Clone the Repository

```bash
git clone https://github.com/Srvankit/AI-Powered-Deep-Packet-Inspection-and-Network-Threat-Analyzer.git

cd AI-Powered-Deep-Packet-Inspection-and-Network-Threat-Analyzer
```

---

# 📂 Project Structure

```
AI-Powered-Deep-Packet-Inspection-and-Network-Threat-Analyzer/

├── backend/
├── frontend/
├── docs/
├── sample-pcaps/
├── docker-compose.yml
├── CHANGELOG.md
└── README.md
```

---

# 🐘 PostgreSQL Setup

## Step 1

Open PostgreSQL.

Create a new database.

Example:

```
dpi_database
```

---

## Step 2

Navigate to

```
backend/src/main/resources/application.properties
```

Update your database configuration.

Example

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/dpi_database

spring.datasource.username=YOUR_USERNAME

spring.datasource.password=YOUR_PASSWORD
```

---

## Step 3

If required, create the database manually.

```sql
CREATE DATABASE dpi_database;
```

---

# ☕ Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

---

## Install Dependencies

```bash
mvn clean install
```

---

## Run Spring Boot

```bash
mvn spring-boot:run
```

Backend starts on

```
http://localhost:8080
```

---

## Verify Backend

Open

```
http://localhost:8080
```

If the server starts successfully, the backend is ready.

---

# ⚛️ Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Frontend starts on

```
http://localhost:5173
```

---

# 🚀 Running the Complete Application

### Terminal 1

Start PostgreSQL

↓

### Terminal 2

```bash
cd backend

mvn spring-boot:run
```

↓

### Terminal 3

```bash
cd frontend

npm install

npm run dev
```

↓

Open

```
http://localhost:5173
```

---

# 🐳 Running with Docker

If Docker is installed, the complete application can be started using Docker Compose.

## Build

```bash
docker compose build
```

---

## Start

```bash
docker compose up
```

---

## Start in Detached Mode

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose down
```

---

# 📁 Uploading PCAP Files

After logging in:

1. Open **Upload**
2. Select a `.pcap` or `.pcapng` file
3. Click **Analyze Packet Capture**
4. Wait for the analysis to complete
5. View the dashboard and generated reports

Sample capture files are available in

```
sample-pcaps/
```

---

# 🔑 Default Workflow

```
Register
      │
      ▼
Login
      │
      ▼
Upload PCAP
      │
      ▼
Packet Parsing
      │
      ▼
Threat Detection
      │
      ▼
Statistics Generation
      │
      ▼
AI Insights
      │
      ▼
Download Reports
```

---

# 📄 Generated Reports

The application supports exporting reports in multiple formats.

- PDF
- JSON
- TXT

Generated reports are stored inside

```
backend/reports/
```

---

# 📚 API Documentation

Swagger/OpenAPI documentation is available after the backend starts.

Example

```
http://localhost:8080/swagger-ui/index.html
```

*(Update the URL if your Swagger configuration differs.)*

---

# 🛠 Common Commands

## Backend

```bash
mvn clean

mvn install

mvn spring-boot:run

mvn test
```

---

## Frontend

```bash
npm install

npm run dev

npm run build

npm run preview
```

---

## Git

```bash
git pull

git add .

git commit -m "message"

git push
```

---

# 🧹 Cleaning the Project

Backend

```bash
mvn clean
```

Frontend

```bash
rm -rf node_modules

npm install
```

---

# ❗ Troubleshooting

## Backend fails to start

Check:

- Java version
- Maven installation
- PostgreSQL service
- Database credentials

---

## Database connection failed

Verify:

- PostgreSQL is running
- Database exists
- Username
- Password
- Port number

---

## Frontend fails to start

Run

```bash
npm install
```

again.

Then

```bash
npm run dev
```

---

## Port already in use

Backend

Change

```
server.port
```

Frontend

Modify

```
vite.config.js
```

or stop the process using the occupied port.

---

## JWT Authentication Issues

Verify:

- Secret key configuration
- Token expiration
- Authorization header
- Spring Security configuration

---

# ✅ Installation Complete

If everything has been configured correctly, you should now be able to:

- Register a new account
- Login securely
- Upload PCAP files
- Analyze network traffic
- View statistics and threats
- Generate AI insights
- Export PDF, JSON and TXT reports
- Browse analysis history

---

# 📞 Need Help?

If you encounter any issues during installation:

- Open a GitHub Issue
- Review the project documentation
- Verify your software versions
- Check the application logs for detailed error messages

Happy Analyzing! 🛡️