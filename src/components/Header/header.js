const isDesktop = window.matchMedia("(min-width: 768px)");

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
    logo.appendChild(document.querySelector("h1.logo a"));
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

    const contentButtonMiniCart = createElement('div', 'content-button-minicart');
    contentButtonMiniCart.appendChild(document.querySelector('.inferior .carrinho'));
    document
      .querySelector("header .content-header .content-menu-user")
      .appendChild(contentButtonMiniCart);
    
  },
  moveMainMenu: () => {
    document.querySelector('header > .content-header').after(document.querySelector('.menu.superior'))
  },
  init: function () {
    this.createElementHeader();
  },
};

window.addEventListener("load", function () {
  console.log("header!");
  isDesktop ? headerDesktop.init() : null;
});
