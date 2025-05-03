// function About(){
//     return <h1 className="w-10/12 mx-auto my-4 text-2xl">About Page</h1>
// }
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, query: "" };
  }
  componentDidMount() {
    console.log("About Component MOUNTED");
    this.timerId = setInterval(() => {
      console.log("Hi");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("ABOUT COMPONENT UPDATED");
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <>
        <h1 className="w-10/12 mx-auto my-4 text-2xl">
          About Page {this.props.name}
        </h1>
        <div className="w-10/12 mx-auto my-4 text-2xl">
          <button
            onClick={() =>
              this.setState({ ...this.state, count: this.state.count + 1 })
            }
          >
            Click
          </button>
          <span>{this.state.count}</span>
        </div>
      </>
    );
  }
}

export default About;
