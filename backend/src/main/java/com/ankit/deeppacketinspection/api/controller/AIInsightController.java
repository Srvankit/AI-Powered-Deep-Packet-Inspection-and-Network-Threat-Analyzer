package com.ankit.deeppacketinspection.api.controller;

import com.ankit.deeppacketinspection.api.dto.AIInsight;
import com.ankit.deeppacketinspection.api.service.AIInsightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/insights")
@CrossOrigin(origins = "http://localhost:5173")
public class AIInsightController {

    private final AIInsightService service;

    @Autowired
    public AIInsightController(
            AIInsightService service) {

        this.service = service;

    }

    @GetMapping
    public AIInsight getInsight() {

        return service.generateInsight();

    }

}