import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { CSSTransitionGroup } from 'react-transition-group';
import {entradasIngles,entradasEspañol} from './entrys.js'


class CheckButtonForm extends React.Component {
  /*props
  skillOn - state of the button
  onClick - function of the button
  skill - text of the button
  */
  render() {
    let buttonClass = this.props.skillOn ? "skill-button" : "skill-button skill-rejected";

    return (
      <div className={buttonClass}>
        <div className="skill-name">
          <form>
            <label>
              <input
                type="checkbox"
                checked={this.props.skillOn}
                onChange={()=>this.props.onClickSkill()} />
              {this.props.skill}
              <div className="skill-line"></div>
            </label>
          </form>
        </div>
      </div>

    );
  }
}

function TechStack(props) {
  /*props
  values - JSON object with the name and state(selected or not) of each skill
  onClick - function to change the state of current skill
  */
  const values = props.values;
  const htmlStack = values.map((skill,i) => {

    const key="ts"+skill.name;
    return(
      <div key={key}>
      <CheckButtonForm skill={skill.name} skillOn={skill.show} onClickSkill={()=>props.onClickSkill(i)}/>
      </div>
    )
  })
  return(
    <div className="techStack">
    {htmlStack}
    </div>
  )
}

function Post(props){
  /*props
  value - JSON object with the data of the post
  */
  let description = props.value.description.map((line,i)=>
    <li key={props.title + i.toString()}>{line}</li>)

  let link = props.value.link ? <a href={props.value.link}>link</a> : " "

  let text = (
    <>
      <div className="post-title">
      {props.value.title}
      </div>
      <div className="post-place">
      {props.value.place}
      </div>
      <div className="post-description">
      <ul>
        {description}
      </ul>
      </div>
      {link}
    </>
  )

  if(props.value.pic){
    const pic = props.value.pic;
    return(
      <div className="post pgrid">
        <img src={pic}  alt="Drawing" className="picture"/>
        <div className="Post-text">
        {text}
        </div>
      </div>
    )
  } else{
    return(
      <div className="post">
        {text}
      </div>
    )
  }
}

function Feed(props){
  /*props
  values - array of posts
  */
  const list = props.values;
  const feed = list.map((post,i) => {
    let plineClass = i<list.length -1 ? "PostLine" : "PostLine noColor"

      return(
        <div key={post.title}>
        <Post value={post}/>
        <div className={plineClass}></div>
        </div>
      )
  })
  const garabato = require('./Path.png');
  return(
    < >
      <CSSTransitionGroup
      transitionName="inOutFeed"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={500}
      >
          {feed}
          <img key={"garabato"} src={garabato}  alt="Drawing" className="resumeFinalDraw"/>
        </CSSTransitionGroup>
    </>
  )
}

class Language extends React.Component {
  /*props
  onClick - function to change the language
  */

  render(){
    let español = this.props.lan==="español" ? "lan-button" : "lan-button falseB";
    let english = this.props.lan==="english" ? "lan-button" : "lan-button falseB";
    return(
      <>
        <button className={english} onClick={()=>this.props.onClick("english")}>
          English
        </button> /
        <button className={español} onClick={()=>this.props.onClick("español")}>
          Español
        </button>
      </>
    )
  }
}

class Resume extends React.Component{
  /*props
  lan - language of the content
  */

  constructor(props){
    const skills = ["Python","JavaScript","HTML","CSS","React","jQuery","VHDL","thin films"];
    const skillJSON = skills.map(name=>({"name":name, "show": true}));

    super(props);
    this.state = {
      skills : skillJSON,
      language: "english"
    }
  }

  handleSkillState(i){
    const skills = this.state.skills;
    const skillState= skills[i].show;
    skills[i].show = !skillState;
    //let feed = this.filterFeed(entradasIngles,this.state.skills);
    this.setState({
      skills: skills,
    })
  }

  filterFeed(rawFeed,skills){
    let finalFeed = [];
    let breakfor2 = false;
    rawFeed.forEach((post) => {
      for (var i = 0; i < post.description.length; i++) {
        breakfor2 = false;
        for (var j = 0; j < skills.length; j++) {
          if (post.description[i].includes(skills[j].name) && skills[j].show) {
            finalFeed = finalFeed.concat(post);
            breakfor2=true;
            break;
          }
        }
        if(breakfor2){
          break;
        }
      }
    });
    return finalFeed;
  }

  render(){
    const lanFeed = this.props.lan==="english" ? entradasIngles : entradasEspañol;
    const feed = this.filterFeed(lanFeed,this.state.skills);
    return(
      <div className="resume">
        <div className="header grid-resume-header">
            {this.props.lan==="english" ? "Collaborations" : "Colaboraciones"}
          <div className="ResumeLine"></div>
        </div>
        <div className="resume-filters">
          <div className="post-title">
            {this.props.lan==="english" ? "Skills" : "Habilidades"}
          </div>
          <TechStack values={this.state.skills}  onClickSkill={(i)=>this.handleSkillState(i)} />
        </div>
        <div className="resume-feed">
          <Feed values={feed}/>
        </div>
      </div>
    )
  }
}

const absEspañol = (
    <>
    Siempre he encontrado interesante como la tecnología hace evolucionar el comportamiento humano, pero también como la tecnología se adapta para ser mas accesible e intuitiva al humano, lo que genera un vibrante ciclo de mejora continua.
    <br />
    Hola, soy Pedro Abraham Moreno Vazquez, ingeniero apasionado por el internet y las tecnologías que lo forman,  además con un gran interés en temas como procesamiento digital de señales y visión por computadora.
    <br />
    Me gusta poder reunirme con un equipo y discutir sobre cómo podemos cambiar o mejorar las condiciones de nuestro entorno ya sea en un almuerzo, un maratón de hackeo o en un proyecto de 6 meses o más de duración.
    <br />
    <br />
    Si deseas saber mas sobre mí o mi opinión de algún tema, no dudes en contactarme.
    </>
  )

const absEng = (
  <>
    I have always found interesting how technology makes human behavior evolve, but at the same time technology adapts to be more intuitive and accessible, generating a vibrant improvement cycle.
    <br />
    Hello, I’m Pedro Abraham Moreno Vazquez, an engineer passionate for the internet and the technologies that form it, also with a great interest in topics like signal processing and computer vision.
    <br />
    I love being part of a team and discuss how we can change the conditions around us either in, a lunch, a hackathon, or a 6 or more months project.
    <br />
    <br />
    If you want to know more about me or discuss a special topic don’t hesitate to contact me.
  </>
)

class Profile extends React.Component{
  /*props
  */

  constructor(props){
    super(props);
    this.state = {
      language: "español"
    }
  }

  setLan(language){
    this.setState({
      language: language
    })
  }

  render(){
    return(
      <>
      <a className="skip-link" href="#bio">Skip to Bio</a>
      <div className="greyW">
        <div className="gridTitle">
          <div className="header">
              Pedro Abraham <br />
              Moreno Vazquez
              <div className="ResumeLine"></div>
              <div className="mail">
              e-mail: <a href="mailto:pedabraham@gmail.com">pedabraham@gmail.com</a>
              </div>
          </div>
          <div className="language">
              <Language onClick={(lan)=>this.setLan(lan)} lan={this.state.language} />
          </div>
        </div>
        <AboutMe lan={this.state.language}/>
      </div>
        <Resume lan={this.state.language}/>
      </>
    )
  }
}

function AboutMe(props){
  const pic = require("./Menotion.png")
  return(
    <div className="aboutMe" id="bio">
      <img src={pic}  alt="Drawing" className="picture"/>
      <div key={"abs"} className="abstract">
        {props.lan==="english" ? absEng : absEspañol}
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Profile/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
