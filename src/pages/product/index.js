const productPage = {
  moveBreadCrumb: function () {
    document.querySelector('.breadcrumbs') ? document.querySelector('.produto').prepend(document.querySelector('.breadcrumbs')) : null

    document.querySelector('.breadcrumbs + .row-fluid').classList.add('content-produto');
  },
  moveButtonShare: function () {
    document.querySelector('.info-principal-produto .nome-produto').after(document.querySelector('.produto-compartilhar'));
    
    // create button to share
    const btnShare = document.createElement('div');
    btnShare.classList.add('btn-share');
    btnShare.textContent = 'Compartilhar';
    btnShare.addEventListener('click', e => {
      e.target.nextElementSibling.classList.toggle('show-share-item');
    })

    document.querySelector('.produto-compartilhar').prepend(btnShare)
  },
  moveButtonDisponibilidade: function () {
    document.querySelector('.produto-compartilhar').appendChild(document.querySelector('.disp-entrega'))
  },
  moveElements: function () {
    this.moveBreadCrumb();
    this.moveButtonShare();
    this.moveButtonDisponibilidade();
  },
  init: function () {
    this.moveElements();
    window.matchMedia("(max-width: 768px)").matches ? productPageMobile.init() : null;
  }
}

const productPageMobile = {
  moveShareButton: function () {
    document.querySelector('.codigo-produto').after(document.querySelector('.produto-compartilhar'))
  },
  initProductPageMobile: function () {
    document.querySelectorAll('.aproveite-tambem > ul > li ul > li').length > 1 ? this.createSlickRecomendations() : null;
  },
  moveDisponibilidade: function () {
    document.querySelector('.disponibilidade-produto').after(document.querySelector('.disponibilidade.disp-entrega'))
  },
  clearElements: function () {
    document.querySelectorAll('.aproveite-tambem .listagem-linha > ul > li').forEach(element => {
      element.removeAttribute('class')
    })
  },
  createSlickRecomendations: function () {
    this.clearElements();
    $('.aproveite-tambem > ul > li > ul').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
    });
    console.log('init slick')
  },
  init: function () {
    this.moveShareButton();
    this.moveDisponibilidade();
    document.querySelectorAll('.aproveite-tambem > ul > li > ul > li').length > 1 ? this.createSlickRecomendations() : null
    // this.twoColorsVariaton();
  }
}



const twoColorsVariaton = {
  searchTwoColorsVariation: function () {
    document.querySelectorAll('.atributos a[data-variacao-nome]').forEach(element => {
      const colors = element.getAttribute('data-variacao-nome').replace(' ','').split('/');
      const color1Hex = colorList[`${colors[0].replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')}`]
      const color2Hex = colorList[`${colors[1].replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')}`]
      colors.length == 2 ? setHexColor(color1Hex, color2Hex, element) : null;
    })
  },
  setHexColor: function (color1, color2, element) {
    element.firstElementChild.classList.add('two-colors-variation');
    console.log(element.firstElementChild)
    element.firstElementChild.setAttribute("style", `border-color: ${color1} ${color2}`);
  },
  init: function () {
    this.searchTwoColorsVariation();
  }
}


productPage.init();