# System Architecture

## AI-Powered Deep Packet Inspection & Network Threat Analyzer

Version: 1.0

---

# 1. Overview

The Deep Packet Inspection (DPI) Engine is designed as a modular Java application that processes captured network packets, extracts useful information, classifies network traffic, detects suspicious activities, and generates security reports.

Instead of building one large application, the system is divided into independent modules where each module is responsible for a single task. This modular architecture improves maintainability, scalability, testing, and future enhancements.

---

# 2. High-Level Architecture

```
                    +--------------------+
                    |    PCAP File       |
                    +---------+----------+
                              |
                              v
                  +------------------------+
                  | Packet Capture Module  |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Packet Parser Module   |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Connection Tracker     |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | SNI Extractor          |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Application Classifier |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Threat Detection       |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Rule Engine            |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Report Generator       |
                  +-----------+------------+
                              |
                              v
                  +------------------------+
                  | Console / Dashboard    |
                  +------------------------+
```

---

# 3. Packet Processing Pipeline

Every packet travels through the same processing pipeline.

```
Raw Packet

↓

Packet Object

↓

Parsed Packet

↓

Flow Identification

↓

Application Detection

↓

Threat Analysis

↓

Rule Evaluation

↓

Statistics Update

↓

Report Generation
```

This pipeline ensures every packet is processed consistently while keeping responsibilities separated between modules.

---

# 4. Module Responsibilities

## Packet Capture Module

### Responsibility

* Read packets from PCAP files.
* Convert captured packets into Java objects.
* Pass packets to the parser.

### Input

PCAP File

### Output

Packet Object

---

## Packet Parser Module

### Responsibility

Extract protocol information from every packet.

Examples:

* Ethernet Header
* IPv4 Header
* TCP Header
* UDP Header

### Input

Packet Object

### Output

ParsedPacket Object

---

## Connection Tracker

### Responsibility

Track complete network flows using the Five-Tuple.

Five-Tuple:

* Source IP
* Destination IP
* Source Port
* Destination Port
* Protocol

The Connection Tracker maintains the state of every network connection.

---

## SNI Extractor

### Responsibility

Extract the Server Name Indication (SNI) from TLS Client Hello packets.

Examples:

* youtube.com
* github.com
* facebook.com

This allows encrypted HTTPS traffic to be identified without decrypting packet contents.

---

## Application Classifier

### Responsibility

Map extracted domains into applications.

Example:

```
youtube.com

↓

YouTube

↓

Streaming
```

```
github.com

↓

GitHub

↓

Developer Platform
```

---

## Threat Detection Module

### Responsibility

Analyze traffic patterns and detect suspicious behavior.

Examples:

* Port Scanning
* DDoS Traffic
* Brute Force Attempts
* Traffic Spikes
* Unknown Connections

---

## Rule Engine

### Responsibility

Evaluate configurable security rules.

Example rules:

* Block YouTube
* Block TikTok
* Block specific IPs
* Block specific domains

---

## Report Generator

### Responsibility

Generate traffic statistics and analysis reports.

Examples:

* Packet Count
* Protocol Distribution
* Top Applications
* Threat Summary
* Blocked Connections

---

# 5. Design Principles

The project follows modern software engineering principles.

## Single Responsibility Principle

Each module performs exactly one responsibility.

---

## Separation of Concerns

Packet Capture is independent of Packet Parsing.

Packet Parsing is independent of Threat Detection.

Threat Detection is independent of Reporting.

---

## Scalability

Every module can be extended without modifying unrelated modules.

---

## Maintainability

Modules remain small and focused, making debugging and future enhancements easier.

---

## Testability

Every module can be tested independently using unit tests.

---

# 6. Current Architecture

Version 1 focuses on offline packet analysis.

```
PCAP File

↓

Packet Capture

↓

Packet Parser

↓

Traffic Analysis

↓

Console Output
```

---

# 7. Future Architecture

Future versions will extend the current architecture without major redesign.

Future enhancements include:

* Live Packet Capture
* REST API
* React Dashboard
* PostgreSQL Integration
* AI-Based Threat Detection
* Docker Deployment
* Kubernetes Support
* Cloud Deployment

---

# 8. Why This Architecture?

This architecture was chosen because it:

* follows modular software engineering practices
* is easy to maintain
* supports multithreading
* supports future AI integration
* is suitable for large-scale packet processing
* demonstrates industry-level backend architecture

---

# Conclusion

The system architecture provides a clear separation between packet acquisition, parsing, traffic analysis, security evaluation, and reporting. This modular design enables independent development, testing, and future expansion while keeping the project clean and maintainable.
