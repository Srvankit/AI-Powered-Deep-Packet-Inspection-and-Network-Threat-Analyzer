package com.ankit.deeppacketinspection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Entry point for the AI Powered Deep Packet Inspection
 * Spring Boot application.
 *
 * Author: Ankit Yadav
 * Version: 1.0
 */
@SpringBootApplication
public class DeepPacketInspectionApplication {

    public static void main(String[] args) {

        SpringApplication.run(
                DeepPacketInspectionApplication.class,
                args
        );

    }

}