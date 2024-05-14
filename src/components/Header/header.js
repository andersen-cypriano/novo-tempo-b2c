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
    this.createLogo();
    this.createSearchContent();
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
  createSocialTopBar: function () {
    const clone = document.querySelector('.content-footer .lista-redes ul').cloneNode(true);
    clone.classList.add('sociais-topo')
    document.querySelector('.content-top-bar .container-center .row-fluid').prepend(clone);
  },
  createAlertBar: () => {
    const alertBar = createElement("div", "alert-bar");
    alertBar.appendChild(createElement("div", "container-center"));
    alertBar.children[0].innerHTML = `
      <p>É LOJISTA, QUER COMPRAR NO ATACADO? <a href="/" target="_blank">CLIQUE AQUI</a>.</p>
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
      
    `;

    const contentFavoriteButton = createElement(
      "a",
      "content-button-favorite"
    );
    contentFavoriteButton.setAttribute("href","/conta/favorito/listar")
    document
      .querySelector("header .content-header .content-menu-user")
      .appendChild(contentFavoriteButton);

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
    this.createSocialTopBar();
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
    console.log('HEADER')
  },
};

window.addEventListener("load", function () {
  headerDesktop.init();
});
