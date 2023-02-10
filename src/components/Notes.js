import React from 'react'
import "../Styles/note.css"
import 'css-doodle';
// import noteContext from '../context/noteContext.js';

function Notes() {
  document.title = "Notes - CALLY"
  // const notes = useContext(noteContext);

  const view = (id) => {
    document.getElementById(id).classList.add("viewNote")
    document.getElementById("back").style.display = "block"
  }

  const back = () => {
    const notes = document.getElementsByClassName("viewNote")[0];
    document.getElementById(notes.id).classList.remove("viewNote")
    document.getElementById("back").style.display = "none"
  }

  return (
    <div className="navbar">
      <h2 id='intro'>
        Make Your wish list today
      </h2>
      <div className="mainNotes">
        <ion-icon name="arrow-back-outline" id="back" onClick={back}></ion-icon>
        <ul>
          <li id="1" onClick={() => view("1")}>
            <h2
              contentEditable="true"
              suppressContentEditableWarning="true"
            >Title #1</h2>
            <p
              contentEditable="true"
              suppressContentEditableWarning="true"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente expedita, maxime consequuntur tenetur quos nesciunt porro dolorem repellendus ipsa adipisci aliquid dolorum laboriosam architecto nihil sunt exercitationem eos nostrum incidunt! Maiores asperiores, sed alias enim quibusdam molestiae commodi quos est dolore eius quod cum quasi necessitatibus omnis excepturi sunt.
            </p>
          </li>
          <li>
            <h2>Title #1</h2>
            <p>Buying a CAR!</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Notes
