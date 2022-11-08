import React from 'react'
import "../Styles/login.css"
import { useState } from 'react'

function Login() {
    const [sign, setSign] = useState(false);

    return (
        <div className="navbar">
            <div className="loginBox">
                <div className="loginForm">
                    <form>
                        <input
                            className={
                                sign ? "Sign" : "Signin"
                            }
                            type="text" placeholder='Username*' />
                        <input type="text" placeholder='Email*' />
                        <input type="password" placeholder="Password*" />
                        <button>
                            {
                                sign ? "Sign-Up" : "Login"
                            }
                        </button>
                    </form>
                </div>
                <div className="loginDoodle">

                </div>
            </div>
            <div className="loginDesc">
                <h2 onClick={() => setSign(!sign)}>
                    Sign Up
                </h2>
                for New Users....!
            </div>
        </div>
    )
}

export default Login