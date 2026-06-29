# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog**, and the project follows semantic versioning principles.

---

## [0.1.0] - Initial Project Setup

### Added

* Initialized Maven-based Java project
* Designed initial project architecture
* Created modular package structure
* Added project documentation (`docs/`)
* Added Project Overview document
* Configured Docker support
* Created utility, parser, capture, and model packages
* Added initial model classes:

  * Packet
  * ParsedPacket
  * FiveTuple
  * ProtocolType
* Added skeleton services:

  * PacketCaptureService
  * PacketParserService
* Configured GitHub repository
* Established development roadmap for upcoming phases

---

## Upcoming

* Implement Packet Capture Module
* Read packets from PCAP files
* Integrate Pcap4J
* Parse Ethernet frames
