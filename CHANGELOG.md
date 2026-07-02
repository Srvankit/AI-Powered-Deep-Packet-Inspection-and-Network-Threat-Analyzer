# Changelog

All notable changes to the **AI Powered Deep Packet Inspection Engine** are documented in this file.

This project follows **Semantic Versioning (SemVer)** and is inspired by the **Keep a Changelog** specification.

---

# [0.1.0] - Initial Project Setup
**Release Date:** 2026-06-30

## Added

### Project Initialization
- Initialized Maven-based Java project
- Configured Java 21 development environment
- Established Git repository
- Created GitHub project repository

### Project Architecture
- Designed modular package structure
- Created project directory hierarchy
- Defined layered architecture
- Planned enterprise-grade system design

### Documentation
- Added `01_Project_Overview.md`
- Added `02_System_Architecture.md`
- Added `03_Module_Design.md`
- Added `04_Development_Roadmap.md`
- Added `05_Changelog.md`

### Core Packages
Created the following packages:

- capture
- parser
- model
- utils

### Initial Model Classes
- PacketData
- ParsedPacket
- FiveTuple
- ProtocolType

### Service Skeletons
- PacketCaptureService
- PacketParserService

### DevOps
- Added Docker support
- Added Docker Compose configuration

---

# [0.2.0] - Packet Capture Module
**Release Date:** 2026-06-30

## Added

### Packet Capture
- Integrated Pcap4J
- Configured Npcap support
- Added offline PCAP reading
- Added packet iteration
- Added packet counting
- Added lifecycle logging

### Validation
- PCAP existence validation
- Read permission validation
- File opening validation
- Exception handling

### Features
- Open PCAP files
- Read packets sequentially
- Close capture safely

---

# [0.3.0] - Ethernet Parsing
**Release Date:** 2026-07-01

## Added

### Ethernet Layer
- Implemented EthernetParser
- Extracted Source MAC Address
- Extracted Destination MAC Address
- Extracted Packet Length

### Packet Processing
- Configured PacketFactoryBinder
- Enabled automatic packet decoding
- Successfully parsed Ethernet frames

### Parser Architecture
Created parser hierarchy:

- IpParser
- Ipv4Parser
- Ipv6Parser
- TcpParser
- UdpParser
- TlsParser
- HttpsParser

## Fixed

- Resolved PacketFactoryBinder configuration issue
- Fixed UnknownPacket decoding problem
- Added static packet factory dependency

## Result

The engine can now successfully:

- Read PCAP files
- Decode Ethernet frames
- Extract MAC addresses
- Identify packet size

---

# [0.4.0] - DPI Engine Architecture
**Release Date:** 2026-07-02

## Added

### Core Engine
- Introduced DpiEngine
- Centralized packet processing pipeline
- Unified packet orchestration

### Architecture Improvements
- Simplified Main.java
- Moved business logic to DpiEngine
- Improved separation of concerns
- Established scalable processing pipeline

### Processing Flow

```
Main
   │
   ▼
DpiEngine
   │
PacketCaptureService
   │
EthernetParser
   │
IpParser
   │
TCP / UDP
   │
TLS / HTTP
```

## Status

Current project completion: **~50%**

---

# Upcoming Releases

## v0.5.0
- IPv4 Parser
- IPv6 Parser
- TCP Parser
- UDP Parser
- Transport Layer packet parsing
- Source Port extraction
- Destination Port extraction

## v0.6.0
- TLS Parser
- HTTPS Parser
- SNI Extraction
- HTTP Host Extraction

## v0.7.0
- Flow Tracking
- Five-Tuple Management
- Connection State Management

## v0.8.0
- Rule Engine
- Domain Blocking
- Application Blocking
- IP Blocking

## v0.9.0
- Threat Detection
- Traffic Classification
- Statistics Engine
- Reporting

## v1.0.0
- Production Ready Release
- REST API
- Dashboard
- AI-Based Traffic Classification
- Docker Deployment
- Complete Documentation
- Unit & Integration Testing