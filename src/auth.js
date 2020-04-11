class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb){
        this.authenticated = true;
        cb();
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