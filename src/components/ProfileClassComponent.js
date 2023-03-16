import React from "react";

class ProfileClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    
    console.log('c const')
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prabhatlodhi");
    const json = await data.json();
    
    console.log('c cdm API')
    this.setState({
      userInfo: json,
    });
    
    console.log('c cdm')
  }

  componentDidUpdate(){
    console.log("cc up")
  }

  componentWillUnmount(){
    
    console.log("cccccccccc unmount")
  }

  render() {
    
    console.log('c render')
    return (
      <div>
        <h1>Hello from Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h3 className="nameee">{this.state.userInfo.name}</h3>
        <h3>{this.state.userInfo.location}</h3>
        {/* <p>{this.state.count}</p>  onClick={() => this.setState({ count: this.state.count + 1 })}*/}
        {/* <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          rrrrrrrrrr
        </button> */}
      </div>
    );
  }
}

export default ProfileClassComponent;
