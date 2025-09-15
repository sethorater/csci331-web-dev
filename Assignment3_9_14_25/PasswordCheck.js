function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("too short");
        return false;
    }
    if (password.includes("password") || password.includes("1234")) {
        console.log("has either password or 1234");
        return false;
    }
}

isStrongPassword("qwerty1");
isStrongPassword("qwertypassword1");