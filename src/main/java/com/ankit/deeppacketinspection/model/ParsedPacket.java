package com.ankit.deeppacketinspection.model;

public class ParsedPacket {

    private String sourceMac;

    private String destinationMac;

    private String sourceIp;

    private String destinationIp;

    private ProtocolType protocol;

    private int packetLength;

    private long timestamp;

    private int ipVersion;

    private int ttl;

    private int hopLimit;

    private String transportProtocol;

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

    public ProtocolType getProtocol() {
        return protocol;
    }

    public void setProtocol(ProtocolType protocol) {
        this.protocol = protocol;
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
}