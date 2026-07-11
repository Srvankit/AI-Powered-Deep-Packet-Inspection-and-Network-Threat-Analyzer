package com.ankit.deeppacketinspection.api.service;

import com.ankit.deeppacketinspection.api.dto.CaptureStatus;
import org.springframework.stereotype.Service;

@Service
public class LiveCaptureService {

    private boolean running = false;

    private String interfaceName = "Not Selected";

    public CaptureStatus startCapture(String iface) {

        running = true;

        interfaceName = iface;

        return new CaptureStatus(

                running,

                interfaceName

        );

    }

    public CaptureStatus stopCapture() {

        running = false;

        return new CaptureStatus(

                running,

                interfaceName

        );

    }

    public CaptureStatus getStatus() {

        return new CaptureStatus(

                running,

                interfaceName

        );

    }

}