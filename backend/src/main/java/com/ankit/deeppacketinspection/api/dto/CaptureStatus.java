package com.ankit.deeppacketinspection.api.dto;

public class CaptureStatus {

    private boolean running;

    private String interfaceName;

    public CaptureStatus() {
    }

    public CaptureStatus(boolean running, String interfaceName) {

        this.running = running;
        this.interfaceName = interfaceName;

    }

    public boolean isRunning() {
        return running;
    }

    public void setRunning(boolean running) {
        this.running = running;
    }

    public String getInterfaceName() {
        return interfaceName;
    }

    public void setInterfaceName(String interfaceName) {
        this.interfaceName = interfaceName;
    }

}