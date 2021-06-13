class MyFooter extends HTMLElement{
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="footer">
            <div class="left">
                <label>Copyright ©2021 The Recipe Critic All right reserved.</label>
            </div>
            <div class="right">
                <label>Designed & Developed by :</label>
                <h3>Meha Makwana</h3>
            </div>                
        </div>
      </footer>
      `
    }
  }
  
  customElements.define('my-footer', MyFooter)