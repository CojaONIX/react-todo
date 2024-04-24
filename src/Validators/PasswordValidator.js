
export const PasswordValidator = {
    required: 'Password field is required',
    validate: {
        trimCheck: value => value.trim() !== '' || 'Password cannot be empty or spaces only'
    }
};