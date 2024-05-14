const bannerDuplo = {
  moveBannerTarja: function () {
    document.querySelector('.vitrine-destaque').before(document.querySelector('.tarja'))
  },
  init: function () {
    this.moveBannerTarja();
  }
}

window.addEventListener("load", function () {
  bannerDuplo.init();
  console.log('load banner')
});