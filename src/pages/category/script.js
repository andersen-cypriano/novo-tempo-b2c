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
    contentButton.appendChild(buttonClose);
    
    contentFilter.appendChild(buttonFilter);
    contentFilter.addEventListener('click', ()=>{
      document.querySelector('.coluna').classList.toggle('show-filter')
    })
    document.querySelector('.ordenar-listagem > div').prepend(contentFilter);
    document.querySelector('.coluna').prepend(contentButton);
  },
  
  init: function () {
    console.log('init filter');
    this.createFilterButton();
  }
}

categoryPage.init();