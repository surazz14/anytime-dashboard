export default {
    required: value => (!value ? 'This is a required field' : undefined),
    email: value =>
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined,
    passwordMatch: (confirmPassword, password) => {
        console.log('passwordmatch', password, confirmPassword);
        if (!confirmPassword) {
            return 'This is a required field';
        }
        if (password !== confirmPassword) {
            return "Confirm password didn't match";
        }
        return undefined;
    },
};
