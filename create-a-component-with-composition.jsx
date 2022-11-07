// In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

// Note: ChildComponent is defined with an ES6 arrow function because this is a very common practice when using React.

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

          <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};

// The ParentComponent returns two children components within its <div>: the <h1> element and the <div> rendered from the ChildComponent at the top