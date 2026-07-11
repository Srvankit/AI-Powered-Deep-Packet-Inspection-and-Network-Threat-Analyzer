package com.ankit.deeppacketinspection.api.service;

import com.ankit.deeppacketinspection.api.dto.AIInsight;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AIInsightService {

    public AIInsight generateInsight() {

        int score = 18;

        String level = "LOW";

        String summary =
                "Network traffic appears healthy with minimal suspicious activity.";

        List<String> recommendations = new ArrayList<>();

        recommendations.add("Continue monitoring network traffic.");
        recommendations.add("Enable IDS/IPS for advanced protection.");
        recommendations.add("Keep firewall rules updated.");
        recommendations.add("Review suspicious flows periodically.");

        return new AIInsight(
                score,
                level,
                summary,
                recommendations
        );
    }

}