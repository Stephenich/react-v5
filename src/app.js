const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopte Me!"),
    React.createElement(Pet, {
      name: "Diesel",
      animal: "Dog",
      breed: "Staff",
    }),
    React.createElement(Pet, {
      name: "Chungus",
      animal: "Rabbit",
      breed: "Giant Papillon",
    }),
    React.createElement(Pet, {
      name: "Arya",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
