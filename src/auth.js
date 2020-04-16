class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(){
        this.authenticated = true;
        console.log("Logged In");
    }

    logout(){
        this.authenticated = false;
        //cb();
        console.log("Logged Out");
    }

    isAuthenticated(cb){
        return this.authenticated;
    }
}

export default new Auth();