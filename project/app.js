const App = () => {
  List();
  const $main = document.querySelector("#main");
  const $wrapper = document.createElement("div");
  $wrapper.className = "wrapper";
  $main.append($wrapper);
  Form();
  Detail();
  store.subscribe(Detail);
  store.subscribe(List);

  const $list = document.querySelectorAll(".list-item");
  $list.forEach(($item) =>
    $item.addEventListener("click", (e) => {
      const { target, currentTarget } = e;
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
    const $formContainer = document.querySelector(".form-container");
    const $detailContainer = document.querySelector(".detail-container");
    $formContainer.classList.remove("hidden");
    $detailContainer.classList.add("hidden");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const $title = document.querySelector("#title");
    const $description = document.querySelector("#description");
    const title = $title.value;
    const description = $description.value;
    store.dispatch({
      type: "ADD",
      title,
      description,
    });
    //
    const $formContainer = document.querySelector(".form-container");
    const $detailContainer = document.querySelector(".detail-container");
    $formContainer.classList.add("hidden");
    $detailContainer.classList.remove("hidden");
  };

  const $submitButton = document.querySelector(".submit-button");
  const $form = document.querySelector("form");
  $submitButton.addEventListener("submit", handleSubmit);
  $form.addEventListener("submit", handleSubmit);
};

App();
