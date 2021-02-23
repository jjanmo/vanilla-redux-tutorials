const Buttons = () => {
  const $main = document.querySelector("#main");
  const $buttonContainer = document.createElement("div");
  $buttonContainer.className = "button-container";
  ["ADD", "DELETE"].forEach((text) => {
    const $button = document.createElement("button");
    $button.textContent = text;
    $button.className = `${text.toLowerCase()}-button`;
    $buttonContainer.append($button);
  });

  $main.append($buttonContainer);
};
