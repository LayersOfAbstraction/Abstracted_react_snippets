//This is a satateful class aka Component. In addition to taking input 
//data (accessed via this.props). Components can maintain internal state data
//(accessed via this.state).
class Timer extends React.Component {
    constructor(props) {
      super(props);
      //state's data changes repeatedly until it reaches 0.
      this.state = {
        seconds: 5000
      };
    }
  
    trick() {
      this.setState(state => ({
          //Subtract 1 value per each re-invoking of render().
        seconds: state.seconds - 1
      }));
    }
    
    //Mount current timer value to memory.
    componentDidMount() {
      this.interval = setInterval(() => this.trick(), 0);
    }
    //Get old value out of memory prior to rendering new value.
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    //When the state's data changes, this event will get updated until timer reaches 0.
    render() {
      return React.createElement("div", null, "We don't even get time now to watch this timer count down! ", this.state.seconds);      
    }
  
  }
  
  ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));
