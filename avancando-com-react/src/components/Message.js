import React from "react";

export const Message = (props) => {
  return <h1>{props.title}</h1>;
};

export const WelcomeMessage = () => {
  return <Message title="Bem vindo"></Message>;
};
