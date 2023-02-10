import React from 'react'
import "../Styles/login.css"
import { useState } from 'react'

function Login() {
    document.title = "Login - CALLY"
    const [sign, setSign] = useState(false);
    const [forget, setForget] = useState(false);
    const [send, setSend] = useState(false);
    const [pass, setPass] = useState(false);

    return (
        <div className="navbar">
            <div className="loginBox">
                <div className="loginForm">
                    <form
                    // className={send && pass && !forget ? "Signin" : "Sign"}
                    >
                        <input
                            required
                            className={
                                sign && !forget ? "Sign" : "Signin"
                            }
                            type="text" placeholder='Username*' />
                        <h4
                            className={
                                forget ? "Sign" : "Signin"
                            }
                        >
                            {
                                send ? "Enter the 6 digit code which is send to your Email"
                                    : "To retrieve Your account we send OTP on your account Email-id"
                            }

                        </h4>
                        <input
                            required
                            type="text"
                            placeholder={
                                send && forget ? "6-digit code" : "Email*"
                            } />
                        <input
                            required
                            className={
                                forget ? "Signin" : "Sign"
                            }
                            type="password"
                            placeholder="Password*" />
                        <h4
                            className={
                                !sign && !forget ? "Sign" : "Signin"
                            }
                            onClick={() => setForget(!forget)}
                        >
                            Forgot Your Password...
                        </h4>
                        <h2
                            onClick={() => {
                                setSend(!send)
                                setPass(!pass)
                            }}
                        >
                            {
                                sign ? "Sign-Up"
                                    : forget ? "Send"
                                        : "Login"
                            }
                        </h2>
                    </form>
                    {/* 
                    using backend check set the form visibility
                    <form
                        className={send && pass && forget ? "Sign" : "Signin"}
                    >
                        <h4>
                            Create a new password
                        </h4>
                        <input type="text" required placeholder='New Password*' />
                        <input type="password" required placeholder='Confirm Password*' />
                        <button>
                            Done
                        </button>
                    </form> */}
                </div>
                <div className="loginDoodle">
                    
                </div>
            </div>
            <div
                className={
                    forget ? "Signin" : "Sign loginDesc"
                }
            >
                <h2 onClick={() => setSign(!sign)}>
                    {
                        sign && !forget ? "Sign-in" : "Sign-Up"

                    }
                </h2>
                {
                    sign && !forget ? "" : "for New Users...!"

                }
            </div>
        </div>
    )
}

export default Login