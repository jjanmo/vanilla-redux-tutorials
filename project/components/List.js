const List = () => {
  const { list } = store.getState();
  const $main = document.querySelector("#main");
  const $listContainer = document.querySelector(".list-container");

  if ($listContainer) {
    $listContainer.innerHTML = `
      <ul class="list">
      ${list
        .map(
          (item) => `
        <li class="list-item" id=${item.id}>
          <input type="checkbox" />
          <div class="list-title">${item.title}</div>
        </li>
      `
        )
        .join("")}
      </ul>
    `;
  } else {
    const $listContainer = document.createElement("div");
    $listContainer.className = "list-container";
    $main.append($listContainer);
    $listContainer.innerHTML = `
      <ul class="list">
        ${list
          .map(
            (item) => `
          <li class="list-item" id=${item.id}>
            <input type="checkbox"/>
            <div class="list-title">${item.title}</div>
          </li>
        `
          )
          .join("")}
      </ul>
  `;
  }
};
