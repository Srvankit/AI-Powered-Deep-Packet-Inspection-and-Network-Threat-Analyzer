package com.ankit.deeppacketinspection.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final PasswordEncoder passwordEncoder;

    public SecurityConfig(
            PasswordEncoder passwordEncoder) {

        this.passwordEncoder = passwordEncoder;

    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http

                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth

                        .requestMatchers(
                                "/api/auth/**",
                                "/api/analyze",
                                "/api/insights",
                                "/api/flows",
                                "/api/report/**",
                                "/hello",
                                "/h2-console/**"
                        )

                        .permitAll()

                        .anyRequest()

                        .authenticated()

                )

                .formLogin(Customizer.withDefaults())

                .logout(Customizer.withDefaults());

        http.headers(headers ->
                headers.frameOptions(frame -> frame.disable()));

        return http.build();

    }

}