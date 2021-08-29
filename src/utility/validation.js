export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const validatePassword = (password) => {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
}

export const validatePincode = (pincode) => {
    const re = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    return re.test(pincode);
}

export const validateUsername = (username) => {
    const re = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    return re.test(username);
}