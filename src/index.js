import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class CheckButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      skillOn: true,
    }
  }

  handleClick(){
    const skillState= this.state.skillOn;
    this.setState({
      skillOn: !skillState,
    })
  }

  render(){
    const skill = this.props.skill;
    const button = (
      <button className="skill-button" onClick ={()=>this.handleClick()}>
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
      <button className={"skill-rejected skill-button"} onClick={()=>this.handleClick()}>
        <div className="skill-name">
            <div>{skill}</div>
        </div>
        <div className="skill-line"></div>
      </button>
    )

    return(this.state.skillOn ? button : buttonDimed)
  }
}

function TechStack(props) {
  const values = props.values;
  const htmlStack = values.map((technology,i) => {
    return(
      <div>
      <CheckButton skill={technology} />
      </div>
    )
  })
  return(htmlStack)
}

function Post(props){
  let description = props.value.description.map(x=> <li>{x}</li>)

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

function Feed(props){
  const list = props.values;
  const feed = list.map((post,i) => {
    const pline = <div className="PostLine"></div>
    if (i<list.length -1){
      return([<Post value={post}/>,pline])
    }
    else{
      return(<Post value={post}/>)
    }
  })
  const logo = require('./Path.png');
  return(
    < >
      {feed}
      <img src={logo}  alt="Drawing" className="resumeFinalDraw"/>
    </>
  )
}

let entry1= {
        "title":"Trend Antenna Intern",
        "place":"Continental AG,  September 2019 - february 2020",
        "description":["Built a system from the ground up to a proof of concept using sprints.","Developed the frontend of a car application using Python, jQuery, JavaScript, HTML, and CSS.","Designed multiple mockups using Adobe XD.","Use of git for version control."]
      };

let entriesTest = [entry1,entry1,entry1,entry1,entry1,entry1]

let entryTest2= [entry1,{
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
}]

function Resume(props){

  return(
    <div className="resume">
      <div className="resume-header">
        <div className="resume-title">Resume</div>
        <div className="ResumeLine"></div>
      </div>
      <div className="resume-lan">
      </div>
      <div className="resume-filters">
        <TechStack values={["Python","HTML","CSS","React","C++"]} />
      </div>
      <div className="resume-feed">
        <Feed values={entryTest2}/>
      </div>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Resume/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
