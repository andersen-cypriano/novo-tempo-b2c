const bannerCategoria = {
  createElement: function (elHTML, className) {
    const element = document.createElement(elHTML);
    element.classList.add(className);
    return element;
  },
  
  createContentBanner: function () {
    const contentBanner = this.createElement('div', 'vitrine-categorias');
    const content = this.createElement('div', 'content-vitrine-categorias');
    contentBanner.appendChild(content);

    document.querySelector('#listagemProdutos > ul[data-produtos-linha]').after(contentBanner);
  },
  moveItensCategorias: function() {
    document.querySelectorAll('.mini-banner a').forEach(element => {
      const title = this.createElement('div', 'button-categoria');
      title.innerHTML = `${element.title}`;
      element.appendChild(title)
      document.querySelector('.content-vitrine-categorias').appendChild(element)
    })

    // REMOVE ALL MINI BANNERS
    document.querySelectorAll('.mini-banner').forEach(element => {
      element.remove();
    })
  },
  createSectionTitle: function () {
    const sectionTitle = this.createElement('h1', 'title-section');
    sectionTitle.textContent = 'Categorias Mais Procuradas'
    document.querySelector('.vitrine-categorias').prepend(sectionTitle)
  },
  init: function () {
    this.createContentBanner();
    this.createSectionTitle();
    this.moveItensCategorias();
    console.log('ini banner categorias!!');
  }
}

document.querySelector('.mini-banner') ? bannerCategoria.init() : null;