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
    const containerCenter = createElement(
      "div",
      'container-center'
      );
      containerCenter.classList.add('content-header');
      document.querySelector("header").appendChild(containerCenter);
      
      this.createTopBarContent();
      this.createSearchContent();
      this.createLogo();
  },
  createTopBarContent: () => {
    const contentTopBar = createElement('div', 'content-top-bar');
    contentTopBar.appendChild(createElement('div', 'container-center'));
    contentTopBar.children[0].appendChild(
      document.querySelector('.row-fluid:has(.canais-contato)')
    );
    document.querySelector("header").prepend(contentTopBar);
  },
  createSearchContent: () => {
    const contentSearch = createElement('div', 'content-search');
    contentSearch.appendChild(document.querySelector('form#form-buscar'))

    document.querySelector("header .content-header").appendChild(contentSearch);
  },
  createLogo: () => {
    const logo = createElement("div", "logo");
    logo.appendChild(document.querySelector("h1.logo a"));
    document.querySelector("header > .content-header").appendChild(logo);
  },
  init: function () {
    this.createElementHeader();
  },
};

window.addEventListener("load", function () {
  console.log("header");
  isDesktop ? headerDesktop.init() : null;
});
