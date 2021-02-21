const App = () => {
  store.subscribe(Detail);
  List();
  Buttons();
  const $main = document.querySelector("#main");
  const $wrapper = document.createElement("div");
  $wrapper.className = "wrapper";
  $main.append($wrapper);
  Detail();

  const $list = document.querySelectorAll(".list-item");
  $list.forEach(($item) =>
    $item.addEventListener("click", (e) => {
      const { target, currentTarget } = e;
      console.log(target.tagName);
      if (target.tagName === "DIV") {
        store.dispatch({
          type: "SELECT",
          id: parseInt(currentTarget.id),
        });
      } else if (target.tagName === "INPUT") {
        //delete를 위한 체크
      }
    })
  );

  const $addButton = document.querySelector(".add-button");
  $addButton.addEventListener("click", (e) => {
    store.dispatch({
      type: "ADD",
    });
    Form();
  });
};

App();
