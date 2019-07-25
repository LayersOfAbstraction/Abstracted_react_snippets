//Prints two lines. One with my name, 
//one with the current date + time.
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  //Insert component ouput into HTML DOM.  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //Dispose of component from memory when unmounted.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //"setState" is a property with setter functionality.
    this.setState({
      date: new Date()
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("p", null, this.state.date.toLocaleTimeString(), "."));
  }

}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('clock-example'));