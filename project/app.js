const App = () => {
  store.subscribe(Detail);
  List();
  Detail();

  const $list = document.querySelectorAll(".list-item");
  $list.forEach(($item) =>
    $item.addEventListener("click", (e) => {
      const { target, currentTarget } = e;
      if (target.tagName === "DIV") {
        store.dispatch({
          type: "select",
          id: parseInt(currentTarget.id),
        });
      } else if (target.tagName === "INPUT") {
        //delete를 위한 체크
      }
    })
  );
};

App();
