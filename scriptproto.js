//array and object
const user = {
    proto :{
        regester(name,userName,email){
            this.name =  name;
            this.userName = userName; 
            this.email = email;
            console.log("sighn up success");
        },
        login(userName,email){
           if(this.userName === userName && this.email === email){
            this.isSignin = true;
           }
           else{
            console.log("your user name is incorrect");
            this.isSignin = false;
           };
        },
    },
},
user.regester{"yeasir","arafat","yeasirarafat005@gmail.com"};
user.login{"yeasir","arafat","yeasirarafat005@gmail.com"}


if(user.isSignin){
    console.log("welcome",userName);   
}
else{
    console.log("you are not athorised")
}