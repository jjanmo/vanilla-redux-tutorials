const Detail = () => {
  const { list, mode } = store.getState();
  if (mode === "Detail") {
    const $wrapper = document.querySelector(".wrapper");
    const $detailContainer = document.querySelector(".detail-container");
    const selectedItem = list.filter((item) => item.selected)[0];

    if ($detailContainer) {
      $detailContainer.className = "detail-container";
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
      $wrapper.append($datailContainer);
    }
  }
};
