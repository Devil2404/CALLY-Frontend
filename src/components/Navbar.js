import React from 'react'
import '../Styles/navbar.css'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const ROUTES = [
    {
        path: "/home",
        icon: 'home-outline',
        route: "Home"
    },
    {
        path: "/notes",
        icon: 'pencil-outline',
        route: "Notes"
    },
    {
        path: "/trash",
        icon: 'trash-outline',
        route: "Trash"
    },
    {
        path: "/resume",
        icon: 'clipboard-outline',
        route: "Resume"
    },
    {
        path: "/news",
        icon: "newspaper-outline",
        route: "News"
    },
    {
        path: "/type",
        icon: "keypad-outline",
        route: "Typing"
    }
]

function Navbar() {
    const location = useLocation();
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="head">
                <div id="menu" onClick={() => setMenu(!menu)}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div id="login">
                    <NavLink to="/login">
                        <button>Log-in</button>
                    </NavLink>
                </div>
            </div>
            <div id="logo">
                <h1>
                    CALLY
                </h1>
            </div>
            <div
                id="nav"
                className={
                    menu ? "mobile" : ""
                }
            >
                <ul>
                    {
                        ROUTES.map((route) => {
                            return (
                                <li
                                    key={route.path}
                                >
                                    <NavLink
                                        to={route.path}
                                        className={
                                            (location.pathname === route.path) ? "active" : "inactive"
                                        }

                                    >
                                        <span className="icon">
                                            <ion-icon name={route.icon}></ion-icon>
                                        </span>
                                        <span className="list">{route.route}</span>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar