const Form = () => {
  const $wrapper = document.querySelector(".wrapper");
  $wrapper.innerHTML = `
      <div class="form-container hidden">
        <div class="close-button">❌</div>
        <h2>Add your POST 📝</h2>
        <form>
          <div class="row">
            <label for="title">TITLE</label>
            <input type="text" name="title" id="title"/>
            <input type=hidden name="id" id="id"/>
          </div>
          <div class="row">
            <label for="description">DESCRIPTION</label>
            <textarea name="description" id="description" rows="5" cols="33"></textarea>
          </div>
          <button type="submit" class="submit-button" >SUBMIT</button>
        </form>
      </div>
    `;
};
