// Render an instance of the Welcome component in the parent component App. Here (in the App component), give Welcome a prop of name and assign it a value of a string (declaring the prop with a name by default creates it, followed by the value to assign to it). Within the child, Welcome, access the name prop within the strong tags.

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Aman" />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{ this.props.name }</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};