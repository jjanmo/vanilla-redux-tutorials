const List = ($main) => {
  const $listContainer = document.createElement("div");
  $listContainer.className = "list-container";
  $listContainer.innerHTML = `
    <ul class="list">
    <li class="list-item">
      <div class="list-title">HTML</div>
      <button class="list-delete-button">Delete</button>
    </li>
    <li>
      <div class="list-title">CSS</div>
      <button class="list-delete-button">Delete</button>
    </li>
  </ul>
  `;

  $main.append($listContainer);
};

// export default List;
