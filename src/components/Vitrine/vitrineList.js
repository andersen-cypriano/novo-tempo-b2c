const vitrineListMobile = {
  clearElements: function () {
    document.querySelectorAll('.listagem-linha > ul > li').forEach(element => {
      element.removeAttribute('class')
    })
  },
  createSlickVitrine: function () {
    this.clearElements();
    document.querySelectorAll('#listagemProdutos ul[data-produtos-linha] > li > ul').forEach(element => {
      $(element).slick({
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    })
  },
  init: function () {
    document.querySelector('.pagina-inicial') ? this.createSlickVitrine() : null;
  }
}

window.matchMedia("(max-width: 768px)").matches ? vitrineListMobile.init() : null;