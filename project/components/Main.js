const Main = () => {
  const $app = document.querySelector("#root");
  const $main = document.createElement("main");
  List($main);
  Detail($main);

  $app.append($main);
};
