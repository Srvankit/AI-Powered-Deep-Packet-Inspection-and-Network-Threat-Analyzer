package com.ankit.deeppacketinspection.auth.service;

import com.ankit.deeppacketinspection.auth.AuthenticationResponse;
import com.ankit.deeppacketinspection.auth.LoginRequest;
import com.ankit.deeppacketinspection.auth.RegisterRequest;
import com.ankit.deeppacketinspection.auth.User;
import com.ankit.deeppacketinspection.auth.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ankit.deeppacketinspection.auth.security.JwtService;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

@Service
public class AuthService {

    private final UserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final CustomUserDetailsService userDetailsService;

    public AuthService(
        UserRepository repository,
        PasswordEncoder passwordEncoder,
        AuthenticationManager authenticationManager,
        JwtService jwtService,
        CustomUserDetailsService userDetailsService) {

        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        }

    /**
     * Register a new user.
     */
    public AuthenticationResponse register(RegisterRequest request) {

        if (repository.existsByEmail(request.getEmail())) {

            return new AuthenticationResponse(
                false,
                "Email already registered",
                null,
                null,
                null,
                null
        );
        }

        User user = new User();

        user.setFullName(request.getFullName());

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole("USER");

        repository.save(user);

        return new AuthenticationResponse(
                true,
                "Registration Successful",
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                null
        );
    }

    /**
     * Login existing user.
     */
    public AuthenticationResponse login(LoginRequest request) {

    try {

        System.out.println("STEP 1 - Authenticating user");

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        System.out.println("STEP 2 - Authentication successful");

        UserDetails userDetails =
                userDetailsService.loadUserByUsername(request.getEmail());

        System.out.println("STEP 3 - UserDetails loaded");

        User user = repository.findByEmail(request.getEmail()).orElseThrow();

        System.out.println("STEP 4 - User found in database");

        String token = jwtService.generateToken(userDetails);

        System.out.println("STEP 5 - JWT generated");

        return new AuthenticationResponse(
                true,
                "Login Successful",
                user.getFullName(),
                user.getEmail(),
                user.getRole(),
                token
        );

    } catch (Exception e) {
        e.printStackTrace();   // This is the important part
        throw e;
    }
}

}