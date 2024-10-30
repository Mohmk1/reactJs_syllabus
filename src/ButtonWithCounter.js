import React from "react";
import withCounter from "./withCounter";

const Button = ({ count, incrementCount }) => {
  return <button onClick={incrementCount}>Cliqué {count} fois</button>;
};

// Composant enrichi avec le HOC
export default withCounter(Button);
