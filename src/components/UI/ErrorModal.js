import React from "react";
import Card from "./Card";
import Button from "./Button";

import cls from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={cls.backdrop} onClick={props.iHandleClose} />
      <Card className={cls.modal}>
        <header className={cls.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={cls.content}>
          <p>{props.message}</p>
        </div>
        <footer className={cls.actions}>
          <Button type="button" iClick={props.iHandleClose}>
            Ok
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
