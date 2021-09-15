import React from 'react';
import { login } from '../utils/index';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('../App.js');
    }

    return (
        <button onClick={() => handleLogin()} className="btn-primary rounded">Se connecter</button>
    );
};

export default SignIn;