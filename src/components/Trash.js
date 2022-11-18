import React from 'react'
import "../Styles/note.css"

function Trash() {
  document.title = "Your Bin"
  return (
    <div className='navbar'>
      <div className="introNotes">
        <div className="doodle">
          <div>
            {/* <css-doodle>
              `
              @grid: 8 / 90%;
              @shape: circle;

              transition: .2s @r(.6s);
              border-radius: @pick(100% 0, 0 100%);
              transform: scale(@r(.25, 1.25));

              background: hsla(
              calc(240 - 6 * @x * @y),
              70%, 68%, @r.8
              );
              `
            </css-doodle> */}

          </div>
        </div>
        <div className="introMsg">
          <h1>
            Trash
          </h1>
        </div>
      </div>
      <div className="mainNotes">
        <div className="notes">
          <div className="note">
            <div className="noteTitle">
              <h1>
                Title
              </h1>
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <div className="noteDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia tenetur impedit deserunt ea quaerat vitae a architecto exercitationem, culpa ipsum? Nulla, numquam maxime porro iste nesciunt iusto quidem unde, reprehenderit quam, esse amet adipisci sed laboriosam molestias itaque assumenda illo quos ullam obcaecati ducimus? Laudantium consectetur obcaecati animi eius ullam!
            </div>
            <div className="noteEnd">
              <div className="noteMenu">
                <ion-icon style={{ display: "inline-block", fontWeight: "bold" }} name="refresh-outline">
                  Restore
                </ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Trash