class MyHeader extends HTMLElement{
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="header">
            <div class="name">
                <a href="index.html">The Recipe Critic</a>
            </div>

            <div class="topnav" id="myTopnav">         
                <a href="index.html" class="active">About us</a>
                <a href="loginpage.html">Sign In/Up</a>
                <a href="Free.html">Free Recipies</a>
                <a href="feedback.html">Feedback</a>
            </div>

            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn"><i class="fa fa-bars"></i></button>
              <div id="myDropdown">
                <ul class="dropdown-menu-right">
                  <li><a href="index.html" class="active">About us</a></li>
                  <li><a href="loginpage.html">Sign In/Up</a></li>
                  <li><a href="Free.html">Free Recipies</a></li>
                  <li><a href="feedback.html">Feedback</a></li>
                </ul>
              </div>
            </div>           
        </div>
      </header>
      `
    }
}

  customElements.define('my-header', MyHeader)