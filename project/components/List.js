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
          <input type="checkbox"/>
          <div class="list-title">${item.title}</div>
        </li>
      `
        )
        .join("")}
      </ul>
    `;
  } else {
    $main.innerHTML = `
    <div class="list-container">
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
    </div>
  `;
  }
};
