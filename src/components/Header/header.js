const isDesktop = window.matchMedia("(min-width: 768px)").matches;

function createElement(elemntHTML, className) {
  const elHTML = document.createElement(`${elemntHTML}`);
  elHTML.classList.add(`${className}`);

  return elHTML;
}

const headerDesktop = {
  createElementHeader: function () {
    const contentHeader = document.createElement("header");
    const defaultHeader = document.querySelector("#cabecalho");

    contentHeader.classList.add("header");
    defaultHeader.before(contentHeader);

    this.insertElementsOnHeader();
  },
  insertElementsOnHeader: function () {
    const containerCenter = createElement("div", "container-center");
    containerCenter.classList.add("content-header");

    document.querySelector("header").appendChild(containerCenter);

    this.createTopBarContent();
    this.createAlertBar();
    this.createSearchContent();
    this.createLogo();
    this.createContentMenuUser();
    this.moveMainMenu();
  },
  createTopBarContent: () => {
    const contentTopBar = createElement("div", "content-top-bar");
    contentTopBar.appendChild(createElement("div", "container-center"));
    contentTopBar.children[0].appendChild(
      document.querySelector(".row-fluid:has(.canais-contato)")
    );
    document.querySelector("header").prepend(contentTopBar);

    // hidden labels
    document
      .querySelectorAll(".canais-contato ul li > span i")
      .forEach((element) => {
        const text = element.nextSibling.textContent.split(":")[1];
        element.nextSibling.textContent = text;
      });
  },
  createAlertBar: () => {
    const alertBar = createElement("div", "alert-bar");
    alertBar.appendChild(createElement("div", "container-center"));
    alertBar.children[0].innerHTML = `
      <p>SITE EXCLUSIVO PARA LOJISTAS. COMPRAS PARA USO PESSOAL <a href="/" target="_blank">CLIQUE AQUI</a>.</p>
    `;
    document.querySelector(".content-top-bar").after(alertBar);
  },
  createSearchContent: () => {
    const contentSearch = createElement("div", "content-search");
    contentSearch.appendChild(document.querySelector("form#form-buscar"));

    document.querySelector("header .content-header").appendChild(contentSearch);
  },
  createLogo: () => {
    const logo = createElement("div", "logo");
    const logoCover = document.querySelector("h1.logo a");

    logoCover
      ? logo.appendChild(document.querySelector("h1.logo a"))
      : logo.appendChild(document.querySelector("h2.logo a"));
    document.querySelector("header > .content-header").appendChild(logo);
  },
  createContentMenuUser: () => {
    const contentMenuUser = createElement("div", "content-menu-user");

    contentMenuUser.appendChild(
      document.querySelector(".superior > div:has(.menu-user-logged)")
    );
    contentMenuUser.children[0].removeAttribute("class");
    contentMenuUser.children[0].classList.add("content-user");

    // create content button login
    document
      .querySelector("header .content-header")
      .appendChild(contentMenuUser);

    document.querySelector(".content-user > a.bem-vindo").innerHTML = `
      <span class="icon-welcome"></span>
      <p>Entrar / Cadastre-se</p>
    `;

    const contentButtonMiniCart = createElement(
      "div",
      "content-button-minicart"
    );
    contentButtonMiniCart.appendChild(
      document.querySelector(".inferior .carrinho")
    );
    document
      .querySelector("header .content-header .content-menu-user")
      .appendChild(contentButtonMiniCart);
  },
  moveMainMenu: () => {
    document
      .querySelector("header > .content-header")
      .after(document.querySelector(".menu.superior"));
  },
  init: function () {
    this.createElementHeader();
    !isDesktop ? headerMObile.init() : null;
  },
};

const headerMObile = {
  createButtonMainMenu: function () {
    const buttonMainMenu = createElement("div", "content-menu-mobile");
    buttonMainMenu.appendChild(createElement("div", "btn-menu-mobile"))
    
    document.querySelector(".content-header").prepend(buttonMainMenu);
    document.querySelector('.content-menu-mobile .btn-menu-mobile').addEventListener('click', e =>{
      e.target.classList.toggle("btn-menu-mobile-close");
      e.target.nextElementSibling.classList.toggle("open-menu");
    })

    this. moveMainMenu();
  },
  moveMainMenu: function () {
    const contentMenu = document.querySelector('.content-menu-mobile');
    const mainMenu = document.querySelector('.menu.superior');

    contentMenu.appendChild(mainMenu);
    this.changeClassElementsMenu();
    this.addEventListenerWithSubMenu();
  },
  changeClassElementsMenu: function () {
    document.querySelector('.menu.superior').className = 'menu-principal';
    document.querySelectorAll('ul[class*="nivel-"').forEach(element => {
      const nivelMenu = element.className;
      switch (nivelMenu) {
        case 'nivel-um':
          element.className = 'nivelUm'
          break;
        case 'nivel-dois borda-alpha':
          element.className = 'nivelDois'
          break;
        case 'nivel-tres':
          element.className = 'nivelTres'
          break;
      
        default:
          break;
      }
    })
  },
  addEventListenerWithSubMenu: function () {
    document.querySelectorAll('.nivelUm > li.com-filho >a').forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        element.classList.toggle('menu-active')
        element.nextElementSibling.classList.toggle('submenu-open')
      })
    })
    document.querySelectorAll('.nivelDois > li.com-filho >a').forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        element.classList.toggle('menu-active');
        element.nextElementSibling.classList.toggle('submenu-open')
      })
    })
    document.querySelectorAll('.nivelTres > li.com-filho >a').forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        element.classList.toggle('menu-active');
        element.nextElementSibling.classList.toggle('submenu-open')
      })
    })
  },
  init: function () {
    isDesktop ? null : this.createButtonMainMenu();
    console.log('header init9')
  },
};

window.addEventListener("load", function () {
  headerDesktop.init();
});
