const modalNewsLetter = {
  createContentInfoModal: function () {
    const contentInfosModal = document.createElement('div');
    contentInfosModal.classList.add('content-infos-modal-newsletter');

    document.querySelector('#modalNewsletter .newsletter .interno').prepend(contentInfosModal);

    this.moveItensToContentInfosModal();
  },
  moveItensToContentInfosModal: function () {
    const content = document.querySelector('.content-infos-modal-newsletter');

    content.appendChild(document.querySelector('#modalNewsletter .newsletter .interno > span.titulo'))
    content.appendChild(document.querySelector('#modalNewsletter .texto-newsletter.newsletter-cadastro'))
    console.log('modal')
  },
  init: function () {
    this.createContentInfoModal();
  }
}

document.querySelector('#modalNewsletter') ? modalNewsLetter.init() : null;