const Buttons = () => {
  const $listContainer = document.querySelector(".list-container");
  let $buttonContainer = document.querySelector(".button-container");

  if (!$buttonContainer) {
    $buttonContainer = document.createElement("div");
    $buttonContainer.className = "button-container";
    ["ADD", "DELETE"].forEach((text) => {
      const $button = document.createElement("button");
      $button.textContent = text;
      $button.className = `${text.toLowerCase()}-button`;
      $buttonContainer.append($button);
    });

    $listContainer.append($buttonContainer);
  }
};
