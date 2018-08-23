import React, { Component } from 'react';
import 'loginform.css';
import '@material-ui/core';

class loginform extends Component{
    render(){
        return (
            <div className="loginform">
                <div className="loginform-container">
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Email Id</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Password</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div>
                    <button class="mdc-button" onClick={loginUser}>Login</button>
                    </div>
                </div>
            </div>
        )
    }

    loginUser(){
        console.log('login clicked');
    }
}