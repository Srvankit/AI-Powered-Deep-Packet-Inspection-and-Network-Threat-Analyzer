package com.ankit.deeppacketinspection.auth;

public class AuthenticationResponse {

    private boolean success;

    private String message;

    private String fullName;

    private String email;

    private String role;

    private String token;

    public AuthenticationResponse() {
    }

    public AuthenticationResponse(
            boolean success,
            String message,
            String fullName,
            String email,
            String role,
            String token) {

        this.success = success;
        this.message = message;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}