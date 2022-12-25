import React from 'react'
import "../Styles/type.css"
import { useState } from 'react'
import Words from "../assets/Words.js"

function Type() {
  document.title = "Typing -CALLY"
  const [word, setWord] = useState(false);
  const [time, setTime] = useState(false);
  var count = 0;
  // for set timer color
  const active = (x, y) => {
    let a = document.getElementsByClassName("number");
    for (let b of a) {
      b.classList.remove("active")
    }
    document.getElementById(x).classList.add("active")
    stringGeneration(parseInt(x), y)
  }

  //for get a details of string
  const getDetails = (typeCount) => {
    var typeSub = ""
    let a = document.getElementsByClassName("active");
    typeSub = a[1].innerText
    typeCount = parseInt(a[2].id)
    stringGeneration(typeCount, typeSub)
  }

  //for generation string
  const stringGeneration = (typeCount, typeSub) => {
    let str = ''
    if (typeSub === "words")
      typeCount = typeCount > 1 ? Math.pow(5, 2) * Math.pow(2, typeCount - 2) : 10;
    else
      typeCount = typeCount > 1 ? 30 * Math.pow(2, typeCount - 1) : 30;
    for (let i = 0; i < typeCount; i++) {
      str += Words[Math.floor(Math.random() * 490)] + " "
    }
    setData(str)
  }

  //reset all things & set data
  const setData = (str) => {
    document.getElementById("read").innerText = str
    document.getElementById("data").innerText = ""
    count = 0;
  }

  //for checking 
  const check = (e) => {
    let dataStr = document.getElementById("data")
    let readStr = document.getElementById("read").innerText
    if (readStr[count] === e.nativeEvent.data) {
      console.log("Yes", readStr[count])
      count++;
    }
    else if (e.nativeEvent.data === null) {
      console.log("back")
      count--;
    }
    else {
      console.log("no")
    }
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
                active("1", "time");
              }}
            >
              <ion-icon name="time-outline"></ion-icon>time
            </li>
            <li
              className={word ? "active" : ""}
              onClick={() => {
                setWord(!word)
                time ? setTime(!time) : setTime(time);
                active("1", "words");
              }}
            >
              <ion-icon name="text-outline"></ion-icon>words
            </li>
            <li
              className={!word && !time ? "active" : ""}
              onClick={() => {
                time ? setTime(!time) : setTime(time)
                word ? setWord(!word) : setWord(word)
                active("1", "levels")
              }}

            >
              <ion-icon name="stats-chart-outline"></ion-icon>levels
            </li>
          </div>
          <div className="typeCount">
            <li
              className='number'
              id='1'
              onClick={() => active("1", word ? "words" : "time")}
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
              onClick={() => active("2", word ? "words" : "time")}
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
              onClick={() => active("3", word ? "words" : "time")}
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
              onClick={() => active("4", word ? "words" : "time")}
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
      <h2 id="timer">
        25
      </h2>
      <div className="copy" id="read" >
        top relationship green body little who town up four at question need say last may miss where two ship weight through rock now oil problem sun hold such certain there if little area people morning to since soon west bottom include list more love later north best cut white both example story said power our white relationship will act great
      </div>
      <div className="copy" onInput={check} contentEditable="true" id="data"></div>
      <button id='refresh'>
        <ion-icon name="refresh-outline" onClick={getDetails}></ion-icon>
      </button>
    </div>
  )
}

export default Type