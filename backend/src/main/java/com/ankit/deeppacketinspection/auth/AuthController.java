    package com.ankit.deeppacketinspection.auth;

    import com.ankit.deeppacketinspection.auth.service.AuthService;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.security.core.Authentication;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;    

    import org.springframework.security.core.context.SecurityContextHolder;
    import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

    @RestController
    @RequestMapping("/api/auth")
    public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public AuthenticationResponse register(
            @RequestBody RegisterRequest request) {

        return service.register(request);

    }

    @PostMapping("/login")
    public AuthenticationResponse login(
            @RequestBody LoginRequest request) {

        return service.login(request);

    }

    @GetMapping("/me")
    public AuthenticationResponse currentUser(
            Authentication authentication) {

        if (authentication == null || !authentication.isAuthenticated()) {
            return new AuthenticationResponse(
                    false,
                    "Not authenticated",
                    null,
                    null,
                    null,
                    null
            );
        }
        return new AuthenticationResponse(
                true,
                "Authenticated",
                authentication.getName(),
                authentication.getName(),
                "USER",
                null
        );
    }

    @PostMapping("/logout")
    public AuthenticationResponse logout(
            HttpServletRequest request,
            HttpServletResponse response) {

        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            new SecurityContextLogoutHandler()
                    .logout(request, response, auth);
        }

        return new AuthenticationResponse(
                true,
                "Logged out successfully",
                null,
                null,
                null,
                null
        );
    }

}