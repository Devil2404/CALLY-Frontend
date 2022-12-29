import React from 'react'
import "../Styles/resume.css"
import $ from 'jquery';

function Resume() {
  document.title = "Resume - CALLY"
  const tx = document.getElementsByTagName("textarea");

  //for textarea
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
  }

  //for textarea
  function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  }

  //to clear the all fields
  const clearAll = () => {
    let input = document.getElementsByTagName("input")
    let textarea = document.getElementsByTagName("textarea")
    for (let e of input) {
      e.value = ""
    }
    for (let e of textarea) {
      e.value = ""
    }
  }

  // on click function to add more information fields in resume
  const addMore = (ele) => {
    if (ele === "Education") {
      $("#education").append(
        `<li>
          <h5><input type="month" placeholder="Year" /></h5>
          <h4><input type="text" placeholder="Degree Name" /></h4>
          <h4><input type="text" placeholder="University Name" /></h4>
       </li>`);
    }
    if (ele === "Language") {
      $("#language").append(
        `<li>
        <input type="text" placeholder="Language" />
        <input type="rnumber" class="percantage" oninput="max100()" placeholder="Ex. 60%" />
        </li>`
      )
    }
    if (ele === "Experience") {
      $("#experience").append(
        `<li>
       <div class="box">
       <div class="year_company">
       <h5>
       <input type="month" placeholder='starting' /><br /><h6>to</h6><input type="month" />
       </h5>
       <h5><input type="text" placeholder='Company Name' /></h5>
       </div>
       <div class="text">
       <h4>
       <input type="text" placeholder='Position' />
       </h4>
       <textarea name="profile" id="profiles" placeholder='Write about something your position or works'></textarea>
       </div>
       </div>
       </li>`
      )
    }
    if (ele === "Skills") {
      $("#skills").append(
        `<li><div class="box">
        <h4><input type="text" placeholder="Skill" /></h4>
        <input type="number" class="percantage"  placeholder="Ex. 100%" />
        </div></li>`
      )
    }
    if (ele === "int") {
      $("#interest").append(
        `<li>
        <input type="text" placeholder="Ex. Gaming" />
        </li>`
      )
    }
  }

  //validation on inputs
  const validation = () => {
    let input = document.getElementsByTagName("input")
    let textarea = document.getElementsByTagName("textarea")
    let number = /^[6-9]\d{9}$/gi;
    let email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    for (let e of input) {
      if (e.value === "") {
        alert("Please fill all empty fields")
        return 0
      }
    }
    for (let e of textarea) {
      if (e.value === "") {
        alert("Please fill all empty fields")
        return 0
      }
    }
    if (!number.test(input[2].value)) {
      alert("Please Enter valid phone number")
      return
    }
    if (!email.test(input[3].value)) {
      alert("Please Enter valid email")
      return
    }

    generateInput(input, textarea)
  }

  // taking inputs from users
  const generateInput = (input, textarea) => {
    let infoRes = {
      name: "",
      expertise: "",
      contact: "",
      email: "",
      linkedin: "",
      address: "",
      education: [{}],
      language: [{}],
      profile: "",
      experience: [{}],
      skills: [{}],
      interest: []
    };
    console.log("hi")
    infoRes.address = textarea[0].value;
    infoRes.profile = textarea[1].value;
    infoRes.name = input[0].value;
    infoRes.expertise = input[1].value;
    infoRes.contact = input[2].value;
    infoRes.email = input[3].value;
    infoRes.linkedin = input[4].value;

    let experienceNum = textarea.length - 2
    for (let i = 0; i < experienceNum; i++) {
      if (i === 0) {
        infoRes.experience[0].shortNote = textarea[i + 2].value;
      }
      else {
        infoRes.experience.push({})
        infoRes.experience[i].shortNote = textarea[i + 2].value;
      }
    }
    let j = 0
    for (let i = 5; i < input.length; i++) {
      let educationNum = infoRes.education.length
      let languageNum = infoRes.language.length
      if (input[i].placeholder === "Year") {
        if (i === 5) {
          infoRes.education[0].year = input[i].value
          infoRes.education[0].degree = input[i + 1].value
          infoRes.education[0].university = input[i + 2].value
          i += 2
        }
        else {
          infoRes.education.push({})
          infoRes.education[educationNum].year = input[i].value
          infoRes.education[educationNum].degree = input[i + 1].value
          infoRes.education[educationNum].university = input[i + 2].value
          i += 2
        }
      }
      if (input[i].placeholder === "Language") {
        if (i === (5 + 3 * educationNum)) {
          infoRes.language[0].language = input[i].value;
          infoRes.language[0].percentage = input[i + 1].value
          i += 1
        }
        else {
          infoRes.language.push({})
          let index = infoRes.language.length - 1
          infoRes.language[index].language = input[i].value;
          infoRes.language[index].percentage = input[i + 1].value
          i += 1
        }

      }
      if (input[i].placeholder === "starting") {
        infoRes.experience[j].starting = input[i].value;
        infoRes.experience[j].ending = input[i + 1].value;
        infoRes.experience[j].Company = input[i + 2].value;
        infoRes.experience[j].Position = input[i + 3].value;
        i += 3
        j++;
      }
      if (input[i].placeholder === "Skill") {
        if (i === (5 + 3 * educationNum + 2 * languageNum + 4 * experienceNum)) {
          infoRes.skills[0].skill = input[i].value;
          infoRes.skills[0].percentage = input[i + 1].value;
          i += 1;
        }
        else {
          infoRes.skills.push({})
          let index = infoRes.skills.length - 1
          infoRes.skills[index].skill = input[i].value;
          infoRes.skills[index].percentage = input[i + 1].value;
          i += 1;
        }
      }
      if (input[i].placeholder === "Ex. Gaming") {
        infoRes.interest.push(input[i].value)
      }
    }
  }

  // validation for less than 100 num & Present day set automatic
  const max100 = () => {
    let tags = document.getElementsByClassName("percantage")
    for (let tag of tags) {
      if (tag.value > 100) {
        alert("please insert less than or equal to 100 value")
        tag.value = ""
      }
    }

  }
  const getDate = () => {
    var today = new Date();
    let date = today.getMonth() + "/" + today.getFullYear()
    $("[placeholder=ending]").value = date
    console.log(date)
  }

  return (
    <div className="navbar">
      <div className="resumecontainer">
        <div className="left_side">
          <div className="profiletext">
            <div className="imgbox">
              <img src="https://images.unsplash.com/photo-1642509065947-5569edd10854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="" />
            </div>
            <h2><input type="text" placeholder='Your Name' /><br />
              <input type="text" placeholder="expertise" />  </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="iconr"><i className="fa fa-phone" aria-hidden="true"></i></span>
                <span className="infor"><input type="number" placeholder='contact no' /></span>
              </li>
              <li>
                <span className="iconr"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                <span className="infor"><input type="email" placeholder='email id' /></span>
              </li>
              <li>
                <span className="iconr"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
                <span className="infor"><input type="url" placeholder='linkedin' /></span>
              </li>
              <li>
                <span className="iconr"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                <span className="infor"><textarea name="address" id="address" placeholder='address'></textarea></span>
              </li>
            </ul>
          </div>
          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            <ul id="education">
              <li>
                <h5><input type="month" placeholder="Year" /></h5>
                <h4><input type="text" placeholder="Degree Name" /></h4>
                <h4><input type="text" placeholder="University Name" /></h4>
              </li>
            </ul>
            <button className='adder' onClick={() => addMore("Education")}>
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>

          <div className="contactInfo lang">
            <div className="title">Language</div>
            <ul id="language">
              <li>
                <input type="text" placeholder="Language" />
                <input type="number" className='percantage' onChange={max100} placeholder="Ex. 60%" />
              </li>
            </ul>
            <button className='adder' onClick={() => addMore("Language")}>
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              <textarea placeholder='Write about something yourself'></textarea>
            </p>
          </div>
          <div className="about" >
            <h2 className="title2">Experience</h2>
            <ul id="experience">
              <li>
                <div className="box">
                  <div className="year_company">
                    <h5>
                      <input type="month" placeholder='starting' onClick={getDate} /><br /><h6>to</h6><input type="month" placeholder='ending' />
                    </h5>
                    <h5><input type="text" placeholder='Company Name' /></h5>
                  </div>
                  <div className="text">
                    <h4>
                      <input type="text" placeholder='Position' />
                    </h4>
                    <textarea name="profile" id="profiles" placeholder='Write about something your position or works'></textarea>
                  </div>
                </div>
              </li>
            </ul>

            <button className='adder rightadder' onClick={() => addMore("Experience")}>
              Add More
            </button>
          </div>
          <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <ul id="skills">
              <li>
                <div className="box">
                  <h4><input type="text" placeholder="Skill" /></h4>
                  <input type="number" className='percantage' onChange={max100} placeholder="Ex. 100%" />
                </div>
              </li>
            </ul>
            <button className='adder rightadder' onClick={() => addMore("Skills")}>
              Add More
            </button>
          </div>

          <div className="about interest">
            <h2 className="title2">Interest</h2>
            <ul id='interest'>
              <li>
                <input type="text" placeholder="Ex. Gaming" />
              </li>
            </ul>
            <button className='adder rightadder' onClick={() => addMore("int")}>
              Add More
            </button>
          </div>
        </div>
      </div>

      <div className="button">
        <button id="gen" onClick={validation}>
          Generate
        </button>
        <button id="clear" onClick={clearAll}>
          Clear
        </button>
      </div>

    </div>
  )
}

export default Resume