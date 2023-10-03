const user = {
    name: '',
    userName: '',
    email: '',
    isSignin: false,

    register(name, userName, email) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        console.log("Sign up success");
    },

    login(userName, email) {
        if (this.userName === userName && this.email === email) {
            this.isSignin = true;
        } else {
            console.log("Your username or email is incorrect");
            this.isSignin = false;
        }
    },
};

user.register("yeasir", "arafat", "yeasirarafat005@gmail.com");
user.login("yeasir", "yeasirarafat005@gmail.com");

if (user.isSignin) {
    console.log("Welcome", user.userName);
} else {
    console.log("You are not authorized");
}
