const initBanner = {
  
  moveBannerRodape: function() {
    document.querySelector('#rodape').before(document.querySelector('.tarja'));
  },
  init: function() {
    document.querySelector('.tarja') ? this.moveBannerRodape() : null;
    console.log('init banners');
  }
}

document.querySelector('.pagina-inicial') ? initBanner.init() : null;

