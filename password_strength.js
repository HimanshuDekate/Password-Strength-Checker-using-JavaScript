function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;
    
    switch (strength) {
        case 0:
        case 1:
            return "Very Weak";
        case 2:
            return "Weak";
        case 3:
            return "Moderate";
        case 4:
            return "Strong";
        case 5:
            return "Very Strong";
        default:
            return "Invalid Password";
    }
}

const password = prompt("Enter your password:");
const strength = checkPasswordStrength(password);
alert(`Password Strength: ${strength}`);
