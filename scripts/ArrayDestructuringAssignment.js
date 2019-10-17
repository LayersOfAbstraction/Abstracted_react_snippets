const developer = {
    firstName: 'Nathan',
    lastName: 'Sebhastian',
    developer: true,
    age: 25,
}

//destructure developer object
const {firstName, lastName} = developer;
console.log(firstName);
console.log(lastName);
console.log(developer);

ReactDOM.render(React.createElement(developer, {
    firstName,
    lastName,
}), document.getElementById('ArrayDestructingAssignment-example')); 