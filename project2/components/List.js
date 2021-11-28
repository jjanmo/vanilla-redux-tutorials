const List = () => {
  const { list } = store.getState();
  const $main = document.querySelector("#main");

  const $button = document.createElement("button");
  $button.className = "add-button";
  $button.textContent = "+";

  let $listContainer = document.querySelector(".list-container");

  if ($listContainer) {
    $listContainer.innerHTML = `
      <ul class="list">
      ${list
        .map(
          (item) => `
        <li class="list-item" id=${item.id}>
          <div class="list-title">${item.title}</div>
          <button class="update-button">Update</button>
          <button class="delete-button">Delete</button>
        </li>
      `
        )
        .join("")}
      </ul>
    `;
  } else {
    $listContainer = document.createElement("div");
    $listContainer.className = "list-container";
    $main.append($listContainer);
    $listContainer.innerHTML = `
      <ul class="list">
        ${list
          .map(
            (item) => `
          <li class="list-item" id=${item.id}>
            <div class="list-title">${item.title}</div>
            <button class="update-button">Update</button>
            <button class="delete-button">Delete</button>
          </li>
        `
          )
          .join("")}
      </ul>
  `;
  }

  $listContainer.prepend($button);
};
