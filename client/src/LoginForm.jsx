import './LoginForm.css'
import React from 'react'
import { useState } from 'react'
export default function LoginForm() {
    return (
        <>

            <form id="login-form">
                <h1 id="logo">Bunch.</h1>
                <div className="login-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="login-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit" id="login-button">Log In</button>
               
            </form>
        </>
        

    )
    
}