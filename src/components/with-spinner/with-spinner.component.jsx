import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

// withSpinner is a HOC: Higher Order Component
// it's a function that recieves a component
// that we want to wrap the functionality of our WithSpinner feature with
// and that passed in component gets passed into*wrapped into A NEW new component that will be returned
// depending on the condition if isLoading is true or false
