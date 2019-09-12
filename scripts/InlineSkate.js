class InlineSkate extends React.Component {
  render() {
    return React.createElement(React.Fragment, null, "I am a ", this.props.brand, " designed for mass production.");
  }

}

ReactDOM.render(React.createElement(InlineSkate, {
  brand: "K2 Skate"
}), document.getElementById('classComponent'));