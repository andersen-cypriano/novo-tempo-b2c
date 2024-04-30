const url404 = document.querySelector('meta[property="og:url"]').content;


const pagina404 = {
  setClassOnBody: function () {
   document.querySelector('body').classList.add('pagina404');
  },
  addImage404: function () {
    const img = document.createElement('img');
    img.src = 'https://cdn.awsli.com.br/2454/2454272/arquivos/smoke.png';
    img.classList.add('smoke')
    document.querySelector('.pagina404 .conteudo > h1').after(img)
  },
  init: function() {
    this.setClassOnBody();
    this.addImage404();
    console.log('init 404.');
  }
}

document.querySelector('.pagina-busca .conteudo > h1 ').textContent.search('nenhum') >= 0 ? pagina404.init() : null;