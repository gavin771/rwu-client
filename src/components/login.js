import React, { Component } from 'react';
import {Button} from 'react-materialize';
import * as userActions from '../actions/userActions';
import News from './news';
import Header from './header';
import Register from './register'

const URL_LOGINPAGE = 'http://localhost:3000/login';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            login:'',
            username:'',
            password:''
        }
    }

    componentDidMount() {
        fetch(URL_LOGINPAGE, { method: 'GET'})
        .then(json => {
            this.setState({
                login:json,
                username:json,
                password:json
            })
        })
    }

    handleEmailChange =(e) =>{
        this.setState({username: e.target.value});
    }   

    handlePasswordChange =(e) =>{
        this.setState({password: e.target.value});
    }

    handleLogin = () => {
        userActions.login(this.state.username,this.state.password)  
    }

    handleLoginWithFacebook = () => {
        userActions.loginFacebook()
    }

    handleLoginWithGoogle = () => {
        userActions.loginGoogle()
    }

    render() {
        return (
            <div className="login-news row">
                <div className="login-news-header">
                    <Header/>
                </div>
                <div className="newsComponent">
                    <News/>
                </div>
                <br/>
                <div className="loginPage">
                    <div className="row">
                        <div className="col s12">
                            <ul className="tabs">
                            <li className="tab col s3"><a href="#test1">Login</a></li>
                            <li className="tab col s3"><a href="#test2">Register</a></li>
                            </ul>
                        </div>
                        <div id="test1" className="col s12">
                            <div className="z-depth-1 grey lighten-4 row">
                            <form className="col s12 login-form">
                                <div className='input-field col s12'>
                                    <input className='validate' type='email' name='username' id='username' onChange={this.handleEmailChange}/>
                                    <label className='username'>Enter your email</label>
                                </div>
                                <div className='input-field col s12'>
                                    <input className='validate' type='password' name='password' id='password' onChange={this.handlePasswordChange }/>
                                    <label className='password'>Enter your password</label>
                                </div>
                                <br />
                                <center>
                                    <div className="login-page-buttons">
                                        <div className='login-button-user'>
                                        <Button type='submit' id="user" name='btn_login' className='waves-effect waves-light user' onClick={this.handleLogin}>Login</Button>
                                        <Button id="skip" waves='light' node='a' href='/dashboard'> 
                                        Skip
                                        </Button>
                                        </div>
                                        <h6 className="loginOr"><span>OR</span></h6>
                                        <div className='login-button-facebook'>
                                        <Button type='submit' id="facebook" name='btn_login_facebook' className='waves-effect waves-light btn social facebook' onClick={this.handleLoginWithFacebook}>
                                        <i className="fa fa-facebook"></i> Log In with Facebook</Button>
                                        </div>
                                        <div className='login-button-google'>
                                        <Button type='submit' id="google" name='btn_login_google' className='waves-effect waves-light google-button btn social google' onClick={this.handleLoginWithGoogle}> 
                                        <i className="fa fa-google"></i> Log In with Google</Button>
                                        </div>
                                    </div>
                                </center>
                            </form>
                            </div>
                        </div>
                        <div id="test2" className="col s12">
                            <Register/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;