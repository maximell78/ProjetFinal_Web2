const Auth = {
    isLogin: false,
    authenticate () {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    },
};

export default Auth;