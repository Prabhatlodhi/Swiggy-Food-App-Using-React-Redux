import React from "react";

class ProfileClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }



  render(
  ) {
    return (
      <div>
        <h1>Hello from Profile Class Component</h1>
        <h3>{this.props.name}</h3>
        {/* <p>{this.state.count}</p>  onClick={() => this.setState({ count: this.state.count + 1 })}*/ }
        <p>{this.state.count}</p>
        <button  onClick={    ()=> this.setState({ count : this.state.count + 1}) }>rrrrrrrrrr</button>
      </div>
    );
  }
}

export default ProfileClassComponent;
