const App = () => {
  const $main = document.querySelector("#main");
  Buttons();
  List();

  const $wrapper = document.createElement("div");
  $wrapper.className = "wrapper";
  $main.append($wrapper);
  Form();
  Detail();

  const closeForm = () => {
    const $formContainer = document.querySelector(".form-container");
    const $detailContainer = document.querySelector(".detail-container");
    const $title = document.querySelector("#title");
    const $description = document.querySelector("#description");
    $formContainer.classList.add("hidden");
    $detailContainer.classList.remove("hidden");
    $title.value = "";
    $description.value = "";
  };

  const onSubmit = () => {
    const $title = document.querySelector("#title");
    const $description = document.querySelector("#description");
    const title = $title.value;
    const description = $description.value;
    store.dispatch({
      type: "ADD",
      title,
      description,
    });
    closeForm();
  };

  $main.addEventListener("click", (e) => {
    // console.log(e.target.className);
    switch (e.target.className) {
      case "list-title": {
        const $formContainer = document.querySelector(".form-container");
        if (!$formContainer.className.includes("hidden")) return;

        store.dispatch({
          type: "SELECT",
          id: parseInt(e.target.parentNode.id),
        });
        break;
      }
      case "add-button": {
        const $formContainer = document.querySelector(".form-container");
        const $detailContainer = document.querySelector(".detail-container");
        $formContainer.classList.remove("hidden");
        $detailContainer.classList.add("hidden");
        break;
      }
      case "submit-button": {
        e.preventDefault();
        onSubmit();
        break;
      }
      case "close-button": {
        closeForm();
      }
    }
  });
};

App();
