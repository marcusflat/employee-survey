import React from "react";
import InputRadioDefault from "../Inputs/Radio/Default";
import InputRadioSquare from "../Inputs/Radio/Square";

const componentDictionary = {
  radioDefault: props => <InputRadioDefault {...props} />,
  radioSquare: props => <InputRadioSquare {...props} />
}

function ComponentType({ type, ...props }) {
  return componentDictionary[type](props);
}

export default ComponentType
