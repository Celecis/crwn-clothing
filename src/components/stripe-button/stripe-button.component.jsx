import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  //stripe wants prices in cents, therefore we need to * 100
  const publishableKey =
    "pk_test_51Jd9pmGo1phruCnDrs0TVRRzfwjROhKQmewOIqTv66raySt9O2uBusWgbEoQf8ix4DypU2XwDp4RlKEiHGDhFMqH00FBxu70v7";
  //get key from stripe website

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
  //token is the on success callback function that triggers when we submit
};

export default StripeCheckoutButton;
