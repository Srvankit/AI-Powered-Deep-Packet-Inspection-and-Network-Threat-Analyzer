package com.ankit.deeppacketinspection.history.controller;

import com.ankit.deeppacketinspection.history.entity.AnalysisHistory;
import com.ankit.deeppacketinspection.history.service.AnalysisHistoryService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "http://localhost:5174"
    },
    allowedHeaders = "*",
    methods = {
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.PUT,
        RequestMethod.DELETE,
        RequestMethod.OPTIONS
    }
)
public class AnalysisHistoryController {

    private final AnalysisHistoryService service;

    public AnalysisHistoryController(
            AnalysisHistoryService service) {

        this.service = service;

    }

    @GetMapping
    public List<AnalysisHistory> getHistory() {

        return service.getHistory();

    }

}