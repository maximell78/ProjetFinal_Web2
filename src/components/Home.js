import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false            
        });
    }

    render() {
        return (
            <div>                
                {this.state.isLogin ? 
                    <a href="/"><button className="btn-success" onClick={() => this.handleLogout()}>Déconnexion</button></a>
                    : <Link to="/signin"><button className="btn-success rounded">Se connectez</button></Link>
                }
            </div>
        );
    }
}



export default Home;