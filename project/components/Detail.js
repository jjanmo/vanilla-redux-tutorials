const Detail = ($main) => {
  const $datailContainer = document.createElement("div");
  $datailContainer.className = "detail-container";
  $datailContainer.innerHTML = `
    <div class="detail">
      <h2 class="detail-title">Title</h2>
      <div class="detail-contents">HTML is...</div>
    </div>
  `;

  $main.append($datailContainer);
};

// export default Detail;
