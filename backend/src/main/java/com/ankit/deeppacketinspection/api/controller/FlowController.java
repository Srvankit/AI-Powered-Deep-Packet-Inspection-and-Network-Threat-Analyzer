package com.ankit.deeppacketinspection.api.controller;

import com.ankit.deeppacketinspection.model.AnalysisResult;
import com.ankit.deeppacketinspection.flow.FlowTable;
import com.ankit.deeppacketinspection.api.service.AnalysisStateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flows")
@CrossOrigin(origins = "http://localhost:5174")
public class FlowController {

    private final AnalysisStateService stateService;

    @Autowired
    public FlowController(AnalysisStateService stateService) {
        this.stateService = stateService;
    }

    @GetMapping
    public FlowTable getFlows() {

        AnalysisResult result = stateService.getLatestAnalysis();

        if (result == null) {
            return new FlowTable();
        }

        System.out.println(
                "Stored Flow Count = " +
                stateService.getLatestAnalysis()
                        .getFlowTable()
                        .getFlowCount()
            );

        return result.getFlowTable();
    }
}