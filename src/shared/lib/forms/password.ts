export const PASSWORD_REQUIRED_VALUE         = true;
export const PASSWORD_REQUIRED_ERROR_MESSAGE = 'You must enter a password';

export const PASSWORD_PATTERN_VALUE         = /^[a-zA-Z0-9]+$/;
export const PASSWORD_PATTERN_ERROR_MESSAGE = 'It is allowed to use only Latin characters and numbers';

export const PASSWORD_MIN_LENGTH_VALUE         = 8;
export const PASSWORD_MIN_LENGTH_ERROR_MESSAGE = `The minimum password length is ${PASSWORD_MIN_LENGTH_VALUE} characters`;

export const PASSWORD_MAX_LENGTH_VALUE         = 64;
export const PASSWORD_MAX_LENGTH_ERROR_MESSAGE = `The maximum password length is ${PASSWORD_MAX_LENGTH_VALUE} characters`;

export const PASSWORD_MISMATCH_ERROR_MESSAGE = 'Password mismatch';