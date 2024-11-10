import './LoginForm.css'
import React from 'react'
import { useState } from 'react'
export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        passcode: ''
    });
    const handleChange=(e)=>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
        };
        try {
            const response = await fetch('http://localhost:3000/users/passcode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });
            const data = await response.json();
            if (response.status === 200) {
                window.location.href = '/..index.html';
                document.cookie = `${data.userId}`;
                console.log(document.cookie);
            } else {
                console.log(data);
                alert('Either your passcode or email is wrong.');
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>

            <form onSubmit={handleSubmit} id="login-form">
                <h1 id="logo">Bunch.</h1>
                <div className="login-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange} required/>
                </div>
                <div className="login-input">
                    <label htmlFor="passcode">Password</label>
                    <input type="password" id="passcode" name="passcode" onChange={handleChange} required/>
                </div>
                <button type="submit" id="login-button">Log In</button>
               
            </form>
        </>
        

    )
}