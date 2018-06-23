import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import reactiv from "../images/logo/reactiv.png";
import worldCup from "../images/logo/worldcup2018.png";

const URL_HOME = 'http://localhost:3000/home';

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            home:''
        }
    }

    componentDidMount() {
        fetch(URL_HOME, { method: 'GET'})
        .then(json => {
            this.setState({home:json})
        })
    }

    render() {
        return (
            <div className="homepage">
                <div className="world-cup-logo card-image">
                    <img src={worldCup} alt="world-cup"/>
                </div>
                <div className="reactiv-logo card-image">
                    <img src={reactiv} alt="reactiv"/>
                </div>
                <div className="appTitle center-align">
                    <h2>
                        Reactiv World Cup App
                    </h2>
                </div>
                <div className="homepage-buttons center-align">
                    <Button id="login" waves='light' node='a' href='/login'> 
                        Login
                    </Button>
                    <Button id="register" waves='light' node='a' href='/register'> 
                        Register
                    </Button>
                    <Button id="skip" waves='light' node='a' href='/dashboard'> 
                        Skip
                    </Button>
                </div>
            </div>
        );
    }
}

export default Home;
