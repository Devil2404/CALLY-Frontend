import React from 'react'
import "../Styles/news.css"
import Money from '../assets/Analytics-bro.svg';
function News() {
  document.title = "News - CALLY"
  const ROUTE = ["Recent", "Science", "Economy", "Politics", "Health", "Sports", "International"]
  return (
    <div className="navbar">
      <div className="newsIntro">
        <h1>
          News
        </h1>
        <h4>
          Always keep aware of your surrounding
        </h4>

      </div>
      <div className="newsMenu">
        <ul>
          {
            ROUTE.map((route) => {
              return (
                <li
                  key={route}
                >
                  {route}
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="newsItem">
        <div className="news">
          <div className="newsImg">
            <img src={Money} alt="" />
          </div>
          <div className="newsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates quaerat voluptatibus aliquid quasi perferendis omnis beatae, sed cupiditate repudiandae?
          </div>
          <button>
            Read More
          </button>
        </div>
        <div className="news">
          <div className="newsImg">
            <img src={Money} alt="" />
          </div>
          <div className="newsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates quaerat voluptatibus aliquid quasi perferendis omnis beatae, sed cupiditate repudiandae?
          </div>
          <button>
            Read More
          </button>
        </div>
        <div className="news">
          <div className="newsImg">
            <img src={Money} alt="" />
          </div>
          <div className="newsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates quaerat voluptatibus aliquid quasi perferendis omnis beatae, sed cupiditate repudiandae?
          </div>
          <button>
            Read More
          </button>
        </div>
        <div className="news">
          <div className="newsImg">
            <img src={Money} alt="" />
          </div>
          <div className="newsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates quaerat voluptatibus aliquid quasi perferendis omnis beatae, sed cupiditate repudiandae?
          </div>
          <button>
            Read More
          </button>
        </div>
        <div className="news">
          <div className="newsImg">
            <img src={Money} alt="" />
          </div>
          <div className="newsDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates quaerat voluptatibus aliquid quasi perferendis omnis beatae, sed cupiditate repudiandae?
          </div>
          <button>
            Read More
          </button>
        </div>
      </div>

    </div>
  )
}

export default News