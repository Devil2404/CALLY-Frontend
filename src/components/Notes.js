import React from 'react'
import "../Styles/note.css"
import 'css-doodle';

function Notes() {
  document.title = "Notes - CALLY"
  return (
    <div className="navbar">
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
            Notes
          </h1>
          <h4>
            create your notes today
          </h4>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
              </div>
              <div className="noteDate">
                <h6>
                  27/07/2030
                </h6>
              </div>
            </div>
          </div>
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
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon
                  style={{ float: "right" }}
                  name="star-outline"></ion-icon>
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

export default Notes
