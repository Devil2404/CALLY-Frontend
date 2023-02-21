import React from 'react'
import "../Styles/type.css"
import { useState, useEffect } from 'react'
import Words from "../assets/Words.js"
import $ from 'jquery';

function Type() {
  document.title = "Typing -CALLY"
  const [word, setWord] = useState(false);
  const [time, setTime] = useState(false);
  var wordlength = 0, str = "", letter = 0, current = 0, passagelength = 0, rigth = 0, wrongCount = 0;

  useEffect(() => {
    stringGeneration(1, "levels")
    // eslint-disable-next-line
  }, [])

  //task 
  //5) auto slider
  //6) timer 

  //1: for set timer color
  const active = (x, y) => {
    let a = document.getElementsByClassName("number");
    for (let b of a) {
      b.classList.remove("active")
    }
    document.getElementById(x).classList.add("active")
    stringGeneration(parseInt(x), y)
  }

  //2: for get a details of string
  const getDetails = (typeCount) => {
    var typeSub = ""
    let a = document.getElementsByClassName("active");
    typeSub = a[1].innerText
    typeCount = parseInt(a[2].id)
    stringGeneration(typeCount, typeSub)
  }

  //3: for reset everything 
  const restart = () => {
    document.getElementById("words").innerHTML = "";
    document.getElementById("wordsInput").value = "";
    document.getElementById("wordsInput").focus();
    current = 0;
    rigth = 0;
    wrongCount = 0;
  }

  //4: for generation string
  const stringGeneration = (typeCount, typeSub) => {
    restart()
    let word = '', divContainer;
    if (typeSub === "words")
      typeCount = typeCount > 1 ? Math.pow(5, 2) * Math.pow(2, typeCount - 2) : 10;
    else
      typeCount = typeCount > 1 ? 30 * Math.pow(2, typeCount - 1) : 30;

    passagelength = typeCount
    for (let i = 0; i < typeCount; i++) {
      word = Words[Math.floor(Math.random() * 490)]
      divContainer = document.createElement("div")
      divContainer.setAttribute("class", "word");
      if (i === 0)
        divContainer.classList.add("current")
      for (let letter of word) {
        divContainer.innerHTML += `<letter>${letter}</letter>`
      }
      $("#words").append(divContainer)
    }
  }


  //5: when correct input 
  const correct = () => {
    wordlength--;
    $(`.current letter:nth-child(${letter + 1})`).addClass("correct")
    letter++;
    rigth++
  }

  //6: when wrong input
  const wrong = () => {
    wordlength--;
    $(`.current letter:nth-child(${letter + 1})`).addClass("wrong")
    letter++;
    wrongCount++
  }

  //7: for restart the input field 
  const reinitialize = (element, check) => {
    str = element.innerText
    wordlength = str.length
    letter = check === "b" ? wordlength - 1 : 0
  }


  //8: for current passing 
  const currentPassing = (x) => {
    let tags = document.getElementsByClassName("word");
    tags[current].classList.remove("current")
    if (passagelength - 1 > current && x === "n")
      tags[current + 1].classList.add("current")
    else if (passagelength - 1 >= current && x === "b" && current > -1) {
      tags[current - 1].classList.add("current")
      tags[current].classList.remove("error")
      reinitialize(tags[current - 1], x)
    }
  }

  //9: this is for emergency purpose if current is missing then its helpful
  const noCurrent = () => {
    let tags = document.getElementsByClassName("word")
    if (document.getElementsByClassName("current").length === 0) {
      tags[current].classList.add("current")
      return tags[current]
    }
    return document.getElementsByClassName("current")[0]
  }


  //10: for checking 
  const check = (e) => {
    let l = document.getElementById("wordsInput")
    let element = noCurrent()
    if (l.value.length === 1 && e.nativeEvent.data !== null) {
      reinitialize(element)
      if (str[letter] === e.nativeEvent.data) {
        correct()
      }
      else {
        wrong()
      }
    }
    else {
      if (str[letter] === e.nativeEvent.data) {
        correct()
      }
      else if (e.nativeEvent.data === null) {
        let ele = $(`.current letter:nth-child(${l.value.length + 1})`)
        let nextEle=$(`.current letter:nth-child(${letter + 1})`)
        wordlength++
        ele.hasClass("correct") ? rigth-- : wrongCount--
        ele.hasClass("correct") ? ele.removeClass("correct") : ele.removeClass("wrong")
        if (ele.hasClass("extra")) { ele.remove(); wrongCount-- }
        letter--;
        if ((letter < 0 || l.value === "") && current > 0) {
          currentPassing("b");
          l.value = str
          current--;
        }
        if (current === 0 && $(".error").length > 0) {
          $(".error").removeClass("error")
        }
        if (nextEle.is(".correct,.wrong,.extra")) {
          if(nextEle.hasClass("extra")) {
            nextEle.remove()
          }
          else{
            nextEle.removeClass("correct")
            nextEle.removeClass("wrong")
          }

        }
      }
      else if (wordlength <= 0 && e.nativeEvent.data !== null && e.nativeEvent.data.includes(" ")) {
        l.value = ""
        //for undeline 
        if (element.innerHTML.includes("wrong")) {
          element.classList.add("error")
        }
        //for passing on current
        currentPassing("n");
        current++;
      }
      else if (wordlength <= 0) {
        element.innerHTML += `<letter class="wrong extra">${e.nativeEvent.data}</letter>`
      }
      else {
        wrong()
      }
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
      <input id="wordsInput" tabIndex="0" autoComplete="off" autoCapitalize="off" autoCorrect="off" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" list="autocompleteOff" spellCheck="false" autoFocus onInput={(e) => check(e)} />
      <div className="copy" id="words">
      </div>
      <button id='refresh'>
        <ion-icon name="refresh-outline" onClick={getDetails}></ion-icon>
      </button>
    </div>
  )
}

export default Type