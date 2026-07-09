package com.ankit.deeppacketinspection.model;

public class ParsedPacket {

    private String sourceMac;

    private String destinationMac;

    private String sourceIp;

    private String destinationIp;

    private int packetLength;

    private long timestamp;

    private int ipVersion;

    private int ttl;

    private int hopLimit;

    private String transportProtocol;

    /* ---------- Transport Layer ---------- */

    private int sourcePort;

    private int destinationPort;

    private long sequenceNumber;

    private int transportLength;

    private long acknowledgementNumber;

    private boolean syn;

    private boolean ack;

    private boolean fin;

    private boolean rst;

    private boolean psh;

    private boolean urg;

    private int windowSize;

    private String applicationProtocol;

    private String hostName;

    private String url;

    private String dnsQuery;

    private String tlsVersion;

    private String cipherSuite;

    public String getApplicationProtocol() {
        return applicationProtocol;
    }

    public void setApplicationProtocol(String applicationProtocol) {
        this.applicationProtocol = applicationProtocol;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDnsQuery() {
        return dnsQuery;
    }

    public void setDnsQuery(String dnsQuery) {
        this.dnsQuery = dnsQuery;
    }

    public String getTlsVersion() {
        return tlsVersion;
    }

    public void setTlsVersion(String tlsVersion) {
        this.tlsVersion = tlsVersion;
    }

    public String getCipherSuite() {
        return cipherSuite;
    }

    public void setCipherSuite(String cipherSuite) {
        this.cipherSuite = cipherSuite;
    }
    
    public int getWindowSize() {
        return windowSize;
    }

    public void setWindowSize(int windowSize) {
        this.windowSize = windowSize;
    }

    public int getTransportLength() {
        return transportLength;
    }

    public void setTransportLength(int transportLength) {
        this.transportLength = transportLength;
    }

    public long getSequenceNumber() {
        return sequenceNumber;
    }

    public void setSequenceNumber(long sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
    }

    public long getAcknowledgementNumber() {
        return acknowledgementNumber;
    }

    public void setAcknowledgementNumber(long acknowledgementNumber) {
        this.acknowledgementNumber = acknowledgementNumber;
    }

    public boolean isSyn() {
        return syn;
    }

    public void setSyn(boolean syn) {
        this.syn = syn;
    }

    public boolean isAck() {
        return ack;
    }

    public void setAck(boolean ack) {
        this.ack = ack;
    }

    public boolean isFin() {
        return fin;
    }

    public void setFin(boolean fin) {
        this.fin = fin;
    }

    public boolean isRst() {
        return rst;
    }

    public void setRst(boolean rst) {
        this.rst = rst;
    }

    public boolean isPsh() {
        return psh;
    }

    public void setPsh(boolean psh) {
        this.psh = psh;
    }

    public boolean isUrg() {
        return urg;
    }

    public void setUrg(boolean urg) {
        this.urg = urg;
    }

    public ParsedPacket() {
    }

    public String getSourceMac() {
        return sourceMac;
    }

    public void setSourceMac(String sourceMac) {
        this.sourceMac = sourceMac;
    }

    public String getDestinationMac() {
        return destinationMac;
    }

    public void setDestinationMac(String destinationMac) {
        this.destinationMac = destinationMac;
    }

    public String getSourceIp() {
        return sourceIp;
    }

    public void setSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
    }

    public String getDestinationIp() {
        return destinationIp;
    }

    public void setDestinationIp(String destinationIp) {
        this.destinationIp = destinationIp;
    }
    
    public int getPacketLength() {
        return packetLength;
    }

    public void setPacketLength(int packetLength) {
        this.packetLength = packetLength;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public int getIpVersion(){
        return ipVersion;
    }

    public void setIpVersion(int ipVersion){
        this.ipVersion = ipVersion;
    }

    public int getTtl(){
        return ttl;
    }

    public void setTtl(int ttl){
        this.ttl = ttl;
    }

    public int getHopLimit(){
        return hopLimit;
    }

    public void setHopLimit(int hopLimit){
        this.hopLimit = hopLimit;
    }

    public String getTransportProtocol(){
        return transportProtocol;
    }

    public void setTransportProtocol(String transportProtocol){
        this.transportProtocol = transportProtocol;
    }

    public int getSourcePort(){
        return sourcePort;
    }

    public void setSourcePort(int sourcePort){
        this.sourcePort = sourcePort;
    }

    public int getDestinationPort(){
        return destinationPort;
    }

    public void setDestinationPort(int destinationPort){
        this.destinationPort = destinationPort;
    }
}