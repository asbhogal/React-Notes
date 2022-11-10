// There is a component in the code editor that is trying to render a firstName property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of firstName.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      "firstName" : "Aman Singh"
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};