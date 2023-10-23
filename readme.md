```markdown
# Node Authentication Package

This package provides a set of utilities for handling authentication in Node.js applications. It includes functionalities for password hashing, token generation and verification, as well as utilities for sending verification and password reset emails.

## Features

- **Password Hashing**: Securely hash passwords using bcrypt.
- **Token Generation and Verification**: Create and verify JWT tokens.
- **Email Verification**: Send emails for account verification.
- **Password Reset**: Send emails for password resetting.
- **Role-based Access Control**: Easily manage user roles and permissions.

## Installation

Install the package using npm:

```bash
npm install auth-plus
```

Or using yarn:

```bash
yarn add auth-plus
```

## Usage

### Importing the Package

```javascript
const auth = require('auth-plus');
```

### Hashing Passwords

```javascript
const hashedPassword = await auth.hashPassword('myPlainPassword');
```

### Comparing Passwords

```javascript
const isMatch = await auth.comparePassword('myPlainPassword', hashedPassword);
```

### Generating JWT Tokens

```javascript
const token = auth.generateToken(user, 'mySecretKey');
```

### Verifying JWT Tokens

```javascript
const payload = auth.verifyToken(token, 'mySecretKey');
```

### Sending Verification Email

```javascript
await auth.sendEmail({
  email: 'user@example.com',
  subject: 'Verify your email',
  message: 'Verification token: abc123',
});
```

## Configuration

Ensure to set the following environment variables:

- `EMAIL_HOST`: The SMTP server host.
- `EMAIL_PORT`: The SMTP server port.
- `EMAIL_USERNAME`: The username for the SMTP server.
- `EMAIL_PASSWORD`: The password for the SMTP server.
- `EMAIL_FROM`: The sender email address.

## Contributing

Contributions are welcome! If you find a bug or want a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Ensure to replace `node-auth-package` with the actual name of your package and provide additional details or examples as necessary.