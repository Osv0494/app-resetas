export function header() {
    const headerHTML = document.createElement("header");
    const body = document.querySelector("body");
  
    headerHTML.innerHTML = `
    <nav id="navbar">
          <a href="">    
          <img class="img-logo"
          src=""
          alt="Company Logo"
        /></a>
          <div class="licks-navbar">
            <a href="#">MTB</a>
            <a href="#">Ruta</a>
            <a href="#">    
              <img
              class="logo-shopping-cart"
              src=""
              alt="Icon Shoppping Cart"/>
                <span id="account-cart">0</span>
            </a>
        </div>
      </nav
    `;
  
    body.appendChild(headerHTML);
  };
  /*header
  header {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.104);
    padding: 10px 0;
    margin-bottom: 10px;
  }
  #navbar {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
  }
  .img-logo {
    height: 80px;
  }
  .logo-shopping-cart {
    height: 25px;
  }
  .licks-navbar {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  #account-cart {
    background-color: red;
    border-radius: 100%;
    display: inline-block;
    width: 20px;
    aspect-ratio: 1;
    text-align: center;
  }
*/
  