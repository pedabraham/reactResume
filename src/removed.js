class CheckButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
    //  skillOn: true,
    }
  }

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
