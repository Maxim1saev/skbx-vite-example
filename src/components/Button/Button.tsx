import React, { FC } from "react";

import "./Button.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={"button-root"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
