import React from 'react'
import "../Styles/type.css"
import { useState } from 'react'
import Words from "../assets/Words.js"

function Type() {
  document.title = "Typing -CALLY"
  const [word, setWord] = useState(false);
  const [time, setTime] = useState(false);
  const active = (x) => {
    let a = document.getElementsByClassName("number");
    for (let b of a) {
      b.classList.remove("active")
    }
    document.getElementById(x).classList.add("active")
  }
  document.getElementById("refresh").addEventListener("click", () => {
    document.getElementById("data").innerText = ""
    dataGenerate();
  })

  const dataGenerate = () => {
    let str = "";
    for (let i = 0; i < 60; i++) {
      let a = Math.floor(Math.random() * 496);
      str += `${Words[a]}  `;
    }
    document.getElementById("read").innerText = str
  }
  return (
    <div className='navbar'>
      <div className="typeHeader">
        <h1>
          <ion-icon name="infinite-outline"></ion-icon> TYPE
        </h1>
        <div className="typeMenu">
          <div className="typeSub">
            <li
              className={time ? "active" : ""}
              onClick={() => {
                setTime(!time);
                word ? setWord(!word) : setWord(word)
              }}
            >
              <ion-icon name="time-outline"></ion-icon>time
            </li>
            <li
              className={word ? "active" : ""}
              onClick={() => {
                setWord(!word)
                time ? setTime(!time) : setTime(time)
              }}
            >
              <ion-icon name="text-outline"></ion-icon>words
            </li>
            <li
              className={!word && !time ? "active" : ""}
              onClick={() => {
                time ? setTime(!time) : setTime(time)
                word ? setWord(!word) : setWord(word)
              }}

            >
              <ion-icon name="stats-chart-outline"></ion-icon>levels
            </li>
          </div>
          <div className="typeCount">
            <li
              className='number'
              id='1'
              onClick={() => active("1")}
            >
              {
                word ? "10"
                  : time ? "15"
                    : "random"
              }
            </li>
            <li
              className='number active'
              id='2'
              onClick={() => active("2")}
            >
              {
                word ? "25"
                  : time ? "30"
                    : "easy"
              }
            </li>
            <li
              className='number'
              id='3'
              onClick={() => active("3")}
            >
              {
                word ? "50"
                  : time ? "60"
                    : "medium"
              }
            </li>
            <li
              className='number'
              id='4'
              onClick={() => active("4")}
            >
              {
                word ? "100"
                  : time ? "120"
                    : "hard"
              }
            </li>
          </div>
        </div>
      </div>
      <div className="copy" id="read">
        top relationship green body little who town up four at question need say last may miss where two ship weight through rock now oil problem sun hold such certain there if little area people morning to since soon west bottom include list more love later north best cut white both example story said power our white relationship will act great
      </div>
      <div className="copy" contentEditable="true" id="data"></div>
      <button id='refresh'>
        <ion-icon name="refresh-outline"></ion-icon>
      </button>
    </div>
  )
}

export default Type