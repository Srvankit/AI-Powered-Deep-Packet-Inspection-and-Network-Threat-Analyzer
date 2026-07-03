# Module Design (Low-Level Design)

## AI-Powered Deep Packet Inspection & Network Threat Analyzer

Version: 1.0

---

# 1. Introduction

This document defines the responsibilities, inputs, outputs, dependencies, and future extensibility of every module in the Deep Packet Inspection (DPI) system.

Unlike the System Architecture document, which explains how modules communicate, this document focuses on the internal design of each module.

Each module follows the **Single Responsibility Principle (SRP)**, ensuring that every component has one clearly defined responsibility.

---

# 2. Module Overview

| Module                 | Responsibility                     |
| ---------------------- | ---------------------------------- |
| Packet Capture         | Read packets from PCAP files       |
| Packet Parser          | Extract protocol information       |
| Connection Tracker     | Track network flows                |
| SNI Extractor          | Extract TLS Server Name Indication |
| Application Classifier | Identify applications              |
| Threat Detection       | Detect suspicious activities       |
| Rule Engine            | Apply filtering policies           |
| Report Generator       | Generate traffic reports           |
| Utilities              | Helper methods                     |

---

# 3. Packet Capture Module

## Package

```
capture/
```

## Class

```
PacketCaptureService
```

### Responsibility

Read packets from PCAP files using Pcap4J.

### Input

* PCAP file

### Output

* Packet object

### Dependencies

* Pcap4J
* Packet Model

### Planned Methods

* openCapture()
* readNextPacket()
* hasNextPacket()
* closeCapture()

### Future Enhancements

* Live packet capture
* Interface selection
* Packet filtering

---

# 4. Packet Parser Module

## Package

```
parser/
```

## Class

```
PacketParserService
```

### Responsibility

Extract network protocol information from raw packets.

### Input

* Packet

### Output

* ParsedPacket

### Planned Methods

* parsePacket()
* parseEthernet()
* parseIPv4()
* parseTCP()
* parseUDP()
* validatePacket()

### Future Enhancements

* IPv6
* ARP
* ICMP
* DNS
* HTTP
* TLS

---

# 5. Model Module

## Package

```
model/
```

Contains the core data objects used throughout the system.

### Packet

Stores the raw captured packet.

### ParsedPacket

Stores extracted protocol information.

### FiveTuple

Represents a network flow.

Fields:

* Source IP
* Destination IP
* Source Port
* Destination Port
* Protocol

### ProtocolType

Enumeration of supported protocols.

Examples:

* TCP
* UDP
* ICMP
* UNKNOWN

Future model classes:

* Flow
* Alert
* TrafficStatistics
* ThreatEvent

---

# 6. Connection Tracker

## Package

```
tracker/
```

## Class

```
ConnectionTrackerService
```

### Responsibility

Track network conversations using the Five-Tuple.

### Input

ParsedPacket

### Output

Flow object

### Planned Methods

* createFlow()
* updateFlow()
* findFlow()
* removeFlow()

Future:

* Flow timeout
* Connection state management

---

# 7. SNI Extractor

## Package

```
extractor/
```

## Class

```
SNIExtractorService
```

### Responsibility

Extract Server Name Indication (SNI) from TLS Client Hello packets.

### Input

ParsedPacket

### Output

Domain Name

Examples:

* github.com
* youtube.com
* google.com

### Planned Methods

* extractSNI()
* validateTLS()
* parseClientHello()

Future:

* QUIC Support
* HTTP/3 Support

---

# 8. Application Classifier

## Package

```
classifier/
```

## Class

```
ApplicationClassifierService
```

### Responsibility

Map domains into applications.

Example:

github.com

↓

GitHub

↓

Developer Platform

### Planned Methods

* classifyApplication()
* identifyCategory()
* lookupSignature()

Future:

* Signature database
* AI-based classification

---

# 9. Threat Detection

## Package

```
threat/
```

### Planned Classes

* ThreatDetectionService
* DDoSDetector
* PortScanDetector
* BruteForceDetector
* TrafficSpikeDetector

### Responsibility

Identify suspicious traffic patterns.

### Planned Methods

* analyzeTraffic()
* detectPortScan()
* detectDDoS()
* detectBruteForce()
* calculateRiskScore()

Future:

* Machine Learning
* Behavioral Analysis

---

# 10. Rule Engine

## Package

```
ruleengine/
```

## Class

```
RuleEngineService
```

### Responsibility

Evaluate user-defined security policies.

### Planned Methods

* evaluateRules()
* blockIP()
* blockApplication()
* blockDomain()

Future:

* Rule Priority
* Dynamic Rule Loading
* Rule Scheduling

---

# 11. Report Generator

## Package

```
report/
```

### Planned Classes

* ReportService
* PdfReportGenerator
* CsvReportGenerator

### Responsibility

Generate traffic analysis reports.

### Planned Outputs

* Packet Statistics
* Application Statistics
* Threat Reports
* Flow Reports

Future:

* HTML Reports
* Interactive Dashboard

---

# 12. Utilities

## Package

```
utils/
```

Utility classes provide reusable helper functions.

Examples:

* IP Conversion
* MAC Address Formatting
* Hex Dump
* Time Formatting
* File Utilities

---

# 13. Dependency Flow

```
PacketCaptureService
        ↓
PacketParserService
        ↓
ConnectionTrackerService
        ↓
SNIExtractorService
        ↓
ApplicationClassifierService
        ↓
ThreatDetectionService
        ↓
RuleEngineService
        ↓
ReportService
```

Each module only depends on the previous stage, keeping the architecture modular and easy to maintain.

---

# 14. Design Goals

The module design follows these principles:

* Single Responsibility Principle
* Loose Coupling
* High Cohesion
* Modular Architecture
* Scalability
* Testability
* Extensibility
* Readability

---

# Current Processing Pipeline

The Deep Packet Inspection engine now follows a layered packet-processing pipeline.

```
PCAP File
      │
      ▼
PacketCaptureService
      │
      ▼
PacketData
      │
      ▼
EthernetParser
      │
      ▼
IpParser
      │
      ├──────────────┐
      ▼              ▼
IPv4Parser      IPv6Parser
      │
      ▼
Transport Layer
      │
      ├──────────────┐
      ▼              ▼
TCPParser       UDPParser
      │
      ▼
Application Layer
      │
      ├──────────────┐
      ▼              ▼
TLSParser      HTTPParser

```
## Transport Layer

The Transport Layer is responsible for decoding Layer 4 protocols.

### Components

- TransportParser
- TcpParser
- UdpParser

### Responsibilities

- Dispatch packets based on transport protocol
- Extract transport metadata
- Populate ParsedPacket with Layer 4 information


### Completed Modules

- Packet Capture Service
- Ethernet Parser

### Under Development

- TLS Inspection

# Conclusion

The Low-Level Design provides a detailed blueprint for implementing every module in the DPI engine. Each component has a clearly defined responsibility, allowing independent development, testing, and future enhancements while maintaining a clean and scalable architecture.
