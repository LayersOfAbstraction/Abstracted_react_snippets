function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return React.createElement("li", null, props.value);
}

function NumberList(props) {
  const numbers = props.numbers;
  return React.createElement("ul", null, numbers.map(number => React.createElement(ListItem, {
    key: number.toString(),
    value: number
  })));
}

const numbers = [2, 3, 4, 5, 6];
ReactDOM.render(React.createElement(NumberList, {
  numbers: numbers
}), document.getElementById('key-list'));