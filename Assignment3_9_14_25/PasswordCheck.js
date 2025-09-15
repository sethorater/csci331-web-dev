function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("too short");
        return false;
    }
    if (password.includes("password") || password.includes("1234")) {
        console.log("has either password or 1234");
        return false;
    }
    let digit = false;
    for (let i = 0; i < password.length; i++) {
        const codeVal = password.charCodeAt(i);
        if (codeVal >= 48 && codeVal <=57) {
            digit = true;
            break;
        }
    }
}

isStrongPassword("qwerty1");
isStrongPassword("qwertypassword1");
isStrongPassword("qwertyasdf12");