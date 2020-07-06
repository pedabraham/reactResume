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
  const tstack = props.values;
  const htmlStack = tstack.map((technology,i) => {
    return(
      <div>
      <CheckButton skill={technology} />
      </div>
    )
  })
  return(htmlStack)
}

function History(){

}


/*class resume extends React.Components {
  constructor(props) {
    this.state={
      feed:[],
      stack: Array(this.props.lenght).fill(null),
    };
    this.props={
      list:[],
    }

  }


  getStackState(i){
    return(this.state.stack[i])
  }

  handleClick(i){

  }


  render(){
    return(
      <TechStack values={this.props.list} onClick={handleClick()} getStackState={getStackState()}/>
      <History feed={this.state.feed}/>
    )
  }
}*/

ReactDOM.render(
  <React.StrictMode>
    <TechStack values={["Python","HTML","CSS","React","C++"]} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
