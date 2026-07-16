package com.ankit.deeppacketinspection.api.controller;

import com.ankit.deeppacketinspection.api.service.AnalysisService;
import com.ankit.deeppacketinspection.model.AnalysisResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.ankit.deeppacketinspection.api.service.AnalysisStateService;
import com.ankit.deeppacketinspection.history.service.AnalysisHistoryService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:5174"
})
public class AnalysisController {

    private final AnalysisService analysisService;

    private final AnalysisStateService stateService;

    private final AnalysisHistoryService historyService;

    @Autowired
    public AnalysisController(AnalysisService analysisService, AnalysisStateService stateService, AnalysisHistoryService historyService) {
        this.analysisService = analysisService;
        this.stateService = stateService;
        this.historyService = historyService;
    }

    @PostMapping( 
            value = "/analyze",
            consumes = "multipart/form-data"
        )
    public ResponseEntity<AnalysisResult> analyze(
            @RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        try {

            Path tempFile = Files.createTempFile("dpi-", ".pcap");

            file.transferTo(tempFile);

            AnalysisResult result = analysisService.analyze(tempFile);

            System.out.println(
                "Controller Flow Count = " +
                result.getFlowTable().getFlowCount()
            );

            stateService.setLatestAnalysis(result);

            historyService.saveAnalysis(
                    file.getOriginalFilename(),
                    result
            );

            Files.deleteIfExists(tempFile);

            return ResponseEntity.ok(result);

        } catch (IOException e) {

            return ResponseEntity.internalServerError().build();

        }
    }
}