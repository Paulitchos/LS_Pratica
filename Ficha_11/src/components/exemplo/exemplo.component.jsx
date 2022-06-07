import React, { useState } from "react";
import "./exemplo.css";

function InfoComponent(props) {
  const { title, src, allVisible, onAllTextVisible } = props;
  const texto = props.children;
  const maxLength = 200;

  function getText() {
    let text;
    if (texto.length <= maxLength) {
      text = texto;
    } else if (!allVisible) {
      text = `${texto.substr(0, maxLength).trim()}...`;
    } else text = texto;
    console.log("passou aqui");
    return text;
  }

  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src={src} alt={title} />
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{getText()}</p>
          {!allVisible ? (
            <a onClick={onAllTextVisible}> Expandir Todos </a>
          ) : (
            <a onClick={onAllTextVisible}> Reduzir Todos </a>
          )}
        </div>
      </div>
    </>
  );
}
export default InfoComponent;
