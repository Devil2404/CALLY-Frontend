import React from 'react'
import '../Styles/home.css'
import { NavLink } from 'react-router-dom'
import Greet from '../assets/Welcome-rafiki.svg';
import Resume from '../assets/Online resume-rafiki.svg';
import News from '../assets/News-bro.svg';
import Type from '../assets/Code typing-bro.svg';
import Money from '../assets/Analytics-bro.svg';
import Notes from '../assets/Taking notes-rafiki.svg';
function Home() {
  document.title = "CALLY - Friendship";
  const ROUTES = [
    {
      path: "/resume",
      src: Resume,
      name: "Resume Builder"
    },
    {
      path: "/notes",
      src: Notes,
      name: "Notes"
    },
    {
      path: "/money",
      src: Money,
      name: "Budget Analysis"
    },
    {
      path: "/news",
      src: News,
      name: "News"
    },
    {
      path: "/type",
      src: Type,
      name: "Typing"
    }

  ]
  return (
    <div>
      <div className="main">
        < div className="text">
          <h1>
            Welcome in CALLY
          </h1>
          <h4>
            We are here for you...
          </h4>
        </div>
        <div className="greeting">
          <img src={Greet} alt="" />
        </div>
        <div className="custom-shape-divider-bottom-1664449033">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, odio soluta dicta quos rerum laboriosam autem, quo temporibus atque repellat ab aperiam. Eaque, error officia nesciunt voluptatum ipsum facere suscipit illum repellat tempore veritatis, nobis corporis nostrum similique saepe facilis deserunt quaerat quae animi odio nulla minus perferendis odit praesentium.
        </p>
      </div>
      <div className="grid">
        {
          ROUTES.map((route) => {
            return (
              <div
                className="container"
                key={route.path}
              >
                <div className="img">
                  <img src={route.src} alt="" />
                </div>
                <div className="info">
                  <NavLink to={route.path}>
                    {route.name}
                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home