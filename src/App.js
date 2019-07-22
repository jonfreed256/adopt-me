const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
