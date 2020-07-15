import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CSSTransitionGroup } from 'react-transition-group';

class CheckButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
    //  skillOn: true,
    }
  }

  //handleClick(){
    //const skillState= this.state.skillOn;
    //this.setState({
      //skillOn: !skillState,
    //})
  //}

  render(){
    const skill = this.props.skill;
    const button = (
      <button className="skill-button" onClick ={()=>this.props.onClick()}>
        <div className="skill-name">
            <div>{skill}</div>
            <div className="circle reject">
                <div className="reject reject-line"></div>
            </div>
        </div>
        <div className="skill-line"></div>
      </button>
    );

    const buttonDimed =(
      <button className={"skill-rejected skill-button"} onClick={()=>this.props.onClick()}>
        <div className="skill-name">
            <div>{skill}</div>
        </div>
        <div className="skill-line"></div>
      </button>
    )

    return(this.props.skillOn ? button : buttonDimed)
  }
}

function TechStack(props) {
  const values = props.values;
  const htmlStack = values.map((skill,i) => {

    const key="ts"+skill.name;
    return(
      <div key={key}>
      <CheckButton skill={skill.name} skillOn={skill.show} onClick={()=>props.onClick(i)}/>
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
  let description = props.value.description.map((line,i)=>
  <li key={props.title + i.toString()}>{line}</li>)
  if(props.value.pic){
    const pic = props.value.pic;
    return(
      <div className="post pgrid">
        <div className="post-graphics">
          <img src={pic}  alt="Drawing" className="picture"/>
        </div>
        <div className="Post-text">
          <div className="post-title">
          {props.value.title}
          </div>
          <div className="post-place">
          {props.value.place}
          </div>
          <div className="post-description">
          {description}
          </div>
        </div>
      </div>
    )
  } else{
    return(
      <div className="post">
        <div className="post-title">
          {props.value.title}
        </div>
        <div className="post-place">
          {props.value.place}
        </div>
        <div className="post-description">
          {description}
        </div>
      </div>
    )
  }
}

function Feed(props){
  const list = props.values;
  const feed = list.map((post,i) => {
    const pline = <div className="PostLine"></div>
    if (i<list.length -1){
      return(
        <div key={post.title}>
        <Post value={post}/>
        <div className="PostLine"></div>
        </div>
      )
    }
    else{
      return(
        <div key={post.title}>
        <Post value={post}/>
        <div className="PostLine noColor"></div>
        </div>)
    }
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

let entry1= {
        "title":"Trend Antenna Intern",
        "place":"Continental AG,  September 2019 - february 2020",
        "description":["Built a system from the ground up to a proof of concept using sprints.","Developed the frontend of a car application using Python, jQuery, JavaScript, HTML, and CSS.","Designed multiple mockups using Adobe XD.","Use of git for version control."]
      };

let entryTest2= [
  {
    "title":"This site developer",
    "place": "My home, 2020 pandemic",
    "description":["Designed the sketches of the site using Apple notes.","Designed mockups of the site using Sketch.","Developed the site trough components using React."],

  },entry1,{
    "title":"Developer of Controller Designer",
    "place": "Universidad de Guanajuato, 2019",
  	"description":["Created a web tool to design classic controllers using HTML, CSS, JavaScript, and Python as the backend thanks to flask.","Implented the root-locus and frequency response methods to design controllers using Python."]
  },{
    "title":"Participant in a summer research program with the work “Multi-focus Image fusion using interpolations”",
    "place":" Universidad de Guanajuato, 2018",
  	"description":["Developed an algorithm to combine two images, of the same scene and a distinct level of focus, 	in a single image by employing several image processing techniques, using Python."]
  },{
    "title":"Member of project “Optical characterization of materials”",
    "place":"Universidad de Guanajuato, 2017",
  	"description":["Modified, and tested, a methodology to synthesize thin films doped with an ionic liquid, 	obtaining great nonlinear absorption properties."]
  },{
    "title":"Co-Developer of MDSM" ,
    "place":"Universidad de Guanajuato, 2016",
  	"description":["Created an interface to open a strongbox using hand gestures by employing an array of CNY70 	sensors controlled by an FPGA described in, the hardware description language, VHDL."]
  }
]

const entradasEspañol = [
  {
    "title":"Desarrollador de este sitio",
    "place":"Mi casa, pandemia 2020",
    "description":["Diseñé bocetos del sitio usando notas de Apple", "Realicé maquetas del sitio usando Sketch", "Desarrollé el sitio mediante componentes usando React.","Diseñé el sitio usando CSS y HTML."]
  },
  {
    "title":"Pasante de Innovación y Desarrollo",
    "place": "Continental AG,  Septiembre 2019 - febrero 2020",
    "description": ["Se creó un sistema desde 0 hasta la prueba de conceptos usando sprints.",
    "Desarrollé el frontend del sistema usando HTML, CSS, JavaScript y jQuery.",
    "Desarrollé en conjunto con mi equipo del backend usando Python y Flask.",
    "Diseñé prototipos en adobe XD."]
  },
  {
    "title":  "Desarrollador de Controller Designer",
    "place":  "Universidad de Guanajuato, 2019",
    "description":["Se creó una herramienta web para diseñar controladores clásicos usando HTML, 	CSS, JS y Python como el backend gracias a flask."],
    "link":   "https://github.com/pedabraham/ControlDiscreto",

  },
  {
    "title":"Autor del proyecto “Fusión de imágenes multi-foco usando interpolaciones polinominales”",
    "place":"Verano de investigación de la Universidad de Guanajuato, 2018",
    "description":[" Desarrollé un algoritmo capaz de combinar dos imágenes, de la misma escena y distinto nivel 	de enfoque, en una sola empleando diversas técnicas de procesamiento de imágenes usando 	Python con librerías como  NumPy y OpenCV."],
    "link":"http://www.jovenesenlaciencia.ugto.mx/index.php/jovenesenlaciencia/article/view/2826/2080"
  },
  {
  "title":"Miembro del proyecto “Caracterización óptica de materiales”",
  "place":"Universidad de Guanajuato, 2017",
  "description":["Se propuso una metodología para sintetizar películas delgadas (thin films) dopadas con líquidos iónicos, obteniendo como propiedad mas destacable la absorción no lineal."]
},
{
  "title":" Co-Desarrollador de MDSM",
  "place": "Universidad de Guanajuato, 2016",
  "description": [" Creé una interfaz de cerradura, para usar gestos de la mano, empleando un arreglo de 	componentes CNY70 conectados a un FPGA cuyo código estaba descrito en VHDL."],
  "link": "http://pedabraham.github.io/MDSM/"
},
]

class Language extends React.Component {
  constructor(props){
    super(props);
    this.state={
      españolClass: "lan-button falseB",
      englishClass: "lan-button"
    }
  }

  lanSwitch(language){
    if (language==="español") {
      this.setState({
        españolClass: "lan-button",
        englishClass: "lan-button falseB"
      })
    }else if (language==="english") {
      this.setState({
        españolClass: "lan-button falseB",
        englishClass: "lan-button "
      })
    }
    this.props.onClick(language);
  }

  render(){
    return(
      <>
        <button className={this.state.englishClass} onClick={()=>this.lanSwitch("english")}>
          English
        </button> /
        <button className={this.state.españolClass} onClick={()=>this.lanSwitch("español")}>
          Español
        </button>
      </>
    )
  }
}

class Resume extends React.Component{
  constructor(props){
    const skills = ["Python","HTML","CSS","React","jQuery","VHDL","thin films"];
    const skillJSON = skills.map(name=>({"name":name, "show": true}));

    super(props);
    this.state = {
      skills : skillJSON,
      language: "english"
    }
  }

  handleClick(i){
    const skills = this.state.skills;
    const skillState= skills[i].show;
    skills[i].show = !skillState;
    //let feed = this.filterFeed(entryTest2,this.state.skills);
    this.setState({
      skills: skills,
    })
  }

  filterFeed(rawFeed,skills){
    let feed2pass = [];
    let breakfor2 = false;
    rawFeed.forEach((post) => {
      for (var i = 0; i < post.description.length; i++) {
        breakfor2 = false;
        for (var j = 0; j < skills.length; j++) {
          if (post.description[i].includes(skills[j].name) && skills[j].show) {
            feed2pass = feed2pass.concat(post);
            breakfor2=true;
            break;
          }
        }
        if(breakfor2){
          break;
        }
      }
    });
    return feed2pass;
  }

  render(){
    const lanFeed = this.props.lan==="english" ? entryTest2 : entradasEspañol;
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
          <TechStack values={this.state.skills}  onClick={(i)=>this.handleClick(i)} />
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
    Si deseas saber mas sobre mi o mi opinión de algún tema, no dudes en contactarme.

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

class AboutMe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      language: "english"
    }
  }

  setLan(language){
    this.setState({
      language: language
    })
  }

  render(){
    const pic = require("./IMG_8740.jpeg")
    return(
      <>
      <div className="greyW">
          <div className="gridTitle">
            <div className="header">
              Pedro Abraham <br />
              Moreno Vazquez
              <div className="ResumeLine"></div>
            </div>
            <div className="language">
              <Language onClick={(lan)=>this.setLan(lan)}/>
            </div>
          </div>
          <div className="mail">
          e-mail: <a href="mailto:pedabraham@gmail.com">pedabraham@gmail.com</a>
          </div>
          <div className="aboutMe">
            <img src={pic}  alt="Drawing" className="picture"/>
            <CSSTransitionGroup
            transitionName="inOutFeed"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={500}
            >
                <div key={"abs"} className="abstract">
                  {this.state.language=="english" ? absEng : absEspañol}
                </div>
            </CSSTransitionGroup>
          </div>
        </div>
        <Resume lan={this.state.language}/>
      </>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <AboutMe/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
