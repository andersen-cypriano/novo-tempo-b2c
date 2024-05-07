const isMobile = window.matchMedia("(max-width: 768px)").matches;

const isLogged = () => {
  let name = 'LI-isUserLogged' + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const buttonAlertLoggedOut = {
  
  addAlertToLogin: function () {
    document.querySelectorAll('.pagina-produto .acoes-produto:not(.hide)[data-variacao-id]').forEach(element => {
    const buttonAlert = document.createElement('a');
    buttonAlert.setAttribute('href', '/conta/login');
    buttonAlert.textContent = 'Identifique-se para ser avisado';
    buttonAlert.classList.add('buttonAlertLoggedOut')
    element.appendChild(buttonAlert)
    });
    document.querySelector('.buttonAlertLoggedOut + div:has(.avise-me)').parentElement.firstElementChild.remove()
  },
  
  init: function () {
    this.addAlertToLogin();
  }
}

document.querySelector('.pagina-produto') && document.querySelector('meta[content="Indisponível"]') && isLogged  ? buttonAlertLoggedOut.init() : null; 
