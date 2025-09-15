function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("too short");
        return false;
    }
}

isStrongPassword("qwerty1");