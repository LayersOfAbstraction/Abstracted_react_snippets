class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.fname, " ", this.props.lname, ", ", this.props.description);
  }
}

ReactDOM.render(React.createElement(HelloMessage, {
  fname: "Jordan",
  lname: "Nash",
  description: "your life begins now from "
}), document.getElementById('hello-example')); 
