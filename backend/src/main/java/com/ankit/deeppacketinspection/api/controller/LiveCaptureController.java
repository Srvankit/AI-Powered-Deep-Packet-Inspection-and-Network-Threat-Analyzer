package com.ankit.deeppacketinspection.api.controller;

import com.ankit.deeppacketinspection.api.dto.CaptureStatus;
import com.ankit.deeppacketinspection.api.service.LiveCaptureService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/live")
@CrossOrigin(origins = "http://localhost:5173")
public class LiveCaptureController {

    private final LiveCaptureService service;

    @Autowired
    public LiveCaptureController(

            LiveCaptureService service

    ) {

        this.service = service;

    }

    @PostMapping("/start")
    public CaptureStatus start(

            @RequestParam(defaultValue = "Wi-Fi")

            String iface

    ) {

        return service.startCapture(

                iface

        );

    }

    @PostMapping("/stop")
    public CaptureStatus stop() {

        return service.stopCapture();

    }

    @GetMapping("/status")
    public CaptureStatus status() {

        return service.getStatus();

    }

}