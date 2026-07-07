package com.ankit.deeppacketinspection.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/hello")
    public String hello() {

        return "Hello AI Powered DPI!";

    }

}