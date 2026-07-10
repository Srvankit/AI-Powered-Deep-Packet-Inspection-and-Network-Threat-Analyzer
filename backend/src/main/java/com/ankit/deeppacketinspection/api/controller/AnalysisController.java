package com.ankit.deeppacketinspection.api.controller;

import com.ankit.deeppacketinspection.api.service.AnalysisService;
import com.ankit.deeppacketinspection.model.AnalysisResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174")
public class AnalysisController {

    private final AnalysisService analysisService;

    @Autowired
    public AnalysisController(AnalysisService analysisService) {
        this.analysisService = analysisService;
    }

    @PostMapping("/analyze")
    public ResponseEntity<AnalysisResult> analyze(
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        try {

            Path tempFile = Files.createTempFile("dpi-", ".pcap");

            file.transferTo(tempFile);

            AnalysisResult result = analysisService.analyze(tempFile);

            Files.deleteIfExists(tempFile);

            return ResponseEntity.ok(result);

        } catch (IOException e) {

            return ResponseEntity.internalServerError().build();

        }
    }
}