const categoryPage = {
  createFilterButton: function () {
    // create content filter
    const contentFilter = document.createElement('div');
    contentFilter.classList.add('content-button-filter');
    
    // create button filter
    const buttonFilter = document.createElement('div');
    buttonFilter.classList.add('filter-button');
    buttonFilter.innerHTML = `
      <span>Filtrar por</span>
    `
    const contentButton = document.createElement('div');
    contentButton.classList.add('content-close')
    

    const buttonClose = document.createElement('div');
    buttonClose.classList.add('close');
    buttonClose.innerHTML = `X`;
    buttonClose.addEventListener('click', e => {
      e.target.parentElement.parentElement.classList.remove('show-filter')
    })
    contentButton.appendChild(buttonClose);
    
    contentFilter.appendChild(buttonFilter);
    contentFilter.addEventListener('click', ()=>{
      document.querySelector('.coluna').classList.toggle('show-filter')
    })
    document.querySelector('.ordenar-listagem > div').prepend(contentFilter);
    document.querySelector('.coluna').prepend(contentButton);
  },
  addEventListenerMenu: function () {
    document.querySelector('.atributo-cor').classList.add('show-filtro-submenu');
    
    document.querySelectorAll('.coluna:has(.content-close) h4.titulo').forEach(element => {
      element.addEventListener('click', ()=>{
          element.nextElementSibling.classList.toggle('show-filtro-submenu')
      })
    })
  },
  
  init: function () {
    console.log('init filter5');
    this.createFilterButton();
    this.addEventListenerMenu();
  }
}

categoryPage.init();