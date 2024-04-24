
export const PasswordValidator = {
    required: 'Password field is required',
    minLength: {
        value: 6,
        message: 'Password must have a minimum 6 characters'
    },
    maxLength: {
        value: 16,
        message: 'Password must have a maximum 16 characters'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{4,}$/i,
        message: "Password must have A-Z, a-z, 0-9, !@#$%^&*()",
    }
};

