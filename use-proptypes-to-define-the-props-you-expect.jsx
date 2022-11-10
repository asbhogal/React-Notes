// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line

Items.propTypes = { quantity: PropTypes.number.isRequired }

// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

// Note: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';