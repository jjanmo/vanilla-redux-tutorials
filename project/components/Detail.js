const Detail = () => {
  const { list } = store.getState();
  const selectedItem = list.filter((item) => item.selected)[0];

  const $main = document.querySelector("#main");
  const $detailContainer = document.querySelector(".detail-container");

  if ($detailContainer) {
    const $detailTitle = document.querySelector(".detail-title");
    $detailTitle.textContent = selectedItem.title;
    const $detailContents = document.querySelector(".detail-contents");
    $detailContents.textContent = selectedItem.description;
  } else {
    const $datailContainer = document.createElement("div");
    $datailContainer.className = "detail-container";
    $datailContainer.innerHTML = `
      <div class="detail">
        <h2 class="detail-title">${selectedItem.title}</h2>
        <div class="detail-contents">${selectedItem.description}</div>
      </div>
    `;
    $main.append($datailContainer);
  }
};
