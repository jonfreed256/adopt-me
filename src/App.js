import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Madison & Mazie",
  //       animal: "dog",
  //       breed: "mixed"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Harper",
  //       animal: "dog",
  //       breed: "mixed"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "dog",
  //       breed: "black lab"
  //     })
  //   ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mazie" animal="dog" breed="mixed" />
      <Pet name="Madison" animal="dog" breed="mixed" />
      <Pet name="Harper" animal="dog" breed="mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
