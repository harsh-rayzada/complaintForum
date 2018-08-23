import React, { Component } from 'react';
import '@material-ui/core';

class signupform extends Component{
    render(){
        return (
            <div className="signupform">
                <div className="signupform-container">
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Email Id</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Username</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Password</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div className="mdc-text-field">
                        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
                        <label class="mdc-floating-label" for="my-text-field">Confirm Password</label>
                        <div class="mdc-line-ripple"></div>
                    </div>
                    <div>
                        <button class="mdc-button" onClick={signUpUser}>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }

    signUpUser(){
        console.log('signup clicked');
    }
}