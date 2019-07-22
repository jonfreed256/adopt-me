import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Madison & Mazie",
      animal: "dog",
      breed: "mixed"
    }),
    React.createElement(Pet, {
      name: "Harper",
      animal: "dog",
      breed: "mixed"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "dog",
      breed: "black lab"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
