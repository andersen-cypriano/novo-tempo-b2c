const barraNewsLetter = {
  createElements: function () {
    const hands = document.createElement("div");
    hands.classList.add("hands-newsletter");

    const flowers = document.createElement("div");
    flowers.classList.add("flowers-newsletter");

    document.querySelector("#barraNewsletter .newsletter").appendChild(hands);
    document.querySelector("#barraNewsletter .newsletter").appendChild(flowers);
  },
  moveDescription: () => {
    document
      .querySelector(".newsletter .interno .titulo")
      .appendChild(
        document.querySelector(".newsletter .interno .newsletter-cadastro")
      );
  },
  init: function () {
    this.createElements();
    this.moveDescription();
    console.log('move banner#')
  },
};

document.querySelector("#barraNewsletter .newsletter")
  ? barraNewsLetter.init()
  : null;
