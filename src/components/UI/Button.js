import React from "react";
import cls from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={cls.button}
      type={props.type || "button"}
      onClick={props.iClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
