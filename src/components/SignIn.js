import React from 'react';
import { login } from '../utils';
import NavBar from './navbar';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push("/dashboard");
    }

    return (
        <div className="container pt-5">
            <div className="row">
                <NavBar/>
                <h1 className="text-center pb-3">Connectez-vous à votre compte</h1>
                <div className="col-12 text-center">
                    <input type="text" name="username" placeholder="Votre nom d'utilisateur" />
                </div>
                <div className="col-12 text-center pt-3">
                    <input type="password" name="password" placeholder="Votre mot de passe" />
                </div>
                <div className="col-12 text-center pt-5">
                    <button onClick={() => handleLogin()} className="btn-primary rounded text-center">Se connecter</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

