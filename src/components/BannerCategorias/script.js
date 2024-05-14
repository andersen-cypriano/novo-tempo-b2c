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

    document.querySelector('#corpo').prepend(contentBanner);
  },
  moveItensCategorias: function() {
    document.querySelectorAll('.mini-banner a').forEach(element => {
      const title = this.createElement('div', 'button-categoria');
      title.innerHTML = `${element.title}`;
      element.appendChild(title)

      const contentItem = this.createElement('div', 'content-item-categorias');
      contentItem.appendChild(element)
      document.querySelector('.content-vitrine-categorias').appendChild(contentItem)
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
  createSlick: function () {
    $('.content-vitrine-categorias').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    console.log('create slick!!')
  },
  init: function () {
    this.createContentBanner();
    this.createSectionTitle();
    this.moveItensCategorias();
    
    window.matchMedia("(max-width: 768px)").matches ? this.createSlick() : null;
    console.log('teste');
  }
}

document.querySelector('.mini-banner') ? bannerCategoria.init() : null;