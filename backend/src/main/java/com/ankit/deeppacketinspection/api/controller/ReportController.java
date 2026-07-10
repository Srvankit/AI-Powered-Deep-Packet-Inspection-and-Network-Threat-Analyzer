package com.ankit.deeppacketinspection.api.controller;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@RestController
@RequestMapping("/api/report")
public class ReportController {

    @GetMapping("/json")
    public ResponseEntity<Resource> downloadJson() {

        File file = new File("output/traffic_report.json");

        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        Resource resource = new FileSystemResource(file);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=traffic_report.json"
                )
                .body(resource);
    }

    @GetMapping("/text")
    public ResponseEntity<Resource> downloadText() {

        File file = new File("output/traffic_report.txt");

        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        Resource resource = new FileSystemResource(file);

        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_PLAIN)
                .header(
                    HttpHeaders.CONTENT_DISPOSITION,
                    "attachment; filename=traffic_report.txt"
                )
                .body(resource);
    }
}