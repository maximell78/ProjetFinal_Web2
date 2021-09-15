import React from 'react';
import { login } from '../utils';

const SignIn = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/Dashboard');
    }

    return (
        <button onClick={() => handleLogin()} className="btn-primary rounded text-center">Se connecter</button>
    );
};

export default SignIn;

