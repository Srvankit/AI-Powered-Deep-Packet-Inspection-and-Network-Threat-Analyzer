@Service
public class AuthService {

    // fields

    // constructor


public AuthenticationResponse login(LoginRequest request) {

    User user = repository.findByEmail(request.getEmail())
            .orElse(null);

    if (user == null) {

        return new AuthenticationResponse(
                false,
                "User not found",
                null,
                null,
                null
        );
    }

    if (!passwordEncoder.matches(
            request.getPassword(),
            user.getPassword())) {

        return new AuthenticationResponse(
                false,
                "Invalid password",
                null,
                null,
                null
        );
    }

    return new AuthenticationResponse(
            true,
            "Login Successful",
            user.getFullName(),
            user.getEmail(),
            user.getRole()
    );
}
}
