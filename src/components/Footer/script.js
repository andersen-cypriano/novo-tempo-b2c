const footer = {
  createContentFooter: function() {
    const contentFooter = document.createElement('footer');
    contentFooter.classList.add('content-footer');

    const contentInfosFooter = document.createElement('div');
    contentInfosFooter.classList.add('container-center');

    contentFooter.appendChild(contentInfosFooter);
    document.querySelector('#rodape').before(contentFooter);
    this.moveColumns();
  },
  moveColumns: function () {
    const content = document.querySelector('.content-footer .container-center');
    
    content.appendChild(document.querySelector('.sobre-loja-rodape'));
    content.appendChild(document.querySelector('.links-rodape-paginas'));

    const title = document.createElement('span');
    title.classList.add('titulo');
    title.textContent = 'Redes Sociais';
    content.appendChild(document.querySelector('.lista-redes'));
    document.querySelector('footer .lista-redes').prepend(title);

    this.createContentPayment();
    this.createContentSelos();
    this.createSectionLegal();

  },
  createContentPayment: function () {
    const contentPayment = document.createElement('div');
    contentPayment.classList.add('content-payment');

    const title = document.createElement('span');
    title.classList.add('titulo');
    title.textContent = 'Formas de pagamento';

    contentPayment.innerHTML = `
    <ul>
      <li>
        <a href="#">Forma de Pagamento á combinar</a>
      </li>
      <li>
        <a href="#">Envio á Combinar (FOB)</a>
      </li>
    </ul>
    `;

    document.querySelector('.sobre-loja-rodape').appendChild(title);
    document.querySelector('.sobre-loja-rodape').appendChild(contentPayment);
  },
  createContentSelos: function () {
    document.querySelector('footer .lista-redes').appendChild(document.querySelector('.selos'));
  },
  createSectionLegal: function () {
    const sectionLegal = document.createElement('div');
    sectionLegal.classList.add('content-legal');

    const contentInfosLegal = document.createElement('div');
    contentInfosLegal.classList.add('container-center');

    const contentlogos = document.createElement('div');
    contentlogos.classList.add('content-logos');

    contentInfosLegal.appendChild(contentlogos);

    contentInfosLegal.appendChild(document.querySelector('.pagamento-selos + div p')) 
    
    sectionLegal.appendChild(contentInfosLegal);
    document.querySelector('.content-footer').appendChild(sectionLegal);
    this.createLogosFooter();
  },
  createLogosFooter: function() {
    document.querySelector('.content-logos').appendChild(document.querySelector('.pagamento-selos + div a'))

    const contentLogoMT = document.createElement('a')
    contentLogoMT.classList.add('logo-mt');
    contentLogoMT.setAttribute('href', 'https://mtsolucoes.com.br/?utm_source=novotempo&utm_medium=NOVOTEMPO');
    contentLogoMT.setAttribute('target', '_blank');

    contentLogoMT.innerHTML = `
      <img src="https://cdn.awsli.com.br/2454/2454272/arquivos/logo-mtsolucoes-topo2.svg" alt="MT Soluções"/>
    `
    document.querySelector('.content-logos').appendChild(contentLogoMT);
  },
  init: function () {
    this.createContentFooter();
    
    console.log('init footer#');
  }
}

document.querySelector('#rodape') ? footer.init() : null;