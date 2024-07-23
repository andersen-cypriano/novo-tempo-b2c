const favoriteButton = {
  addFavoriteButtonOnProductList: function () {
    document
      .querySelectorAll("[data-id]")
      .forEach((element) => {
        this.createButton(element, element.getAttribute("data-id"));
      });
  },
  createButton: function (element, dataId) {
    const button = document.createElement("a");
    button.classList.add("favorite-button");
    button.setAttribute("href", `/conta/favorito/${dataId}/adicionar`);

    element.prepend(button);
  },
  init: function () {
    this.addFavoriteButtonOnProductList();
  },
};

window.addEventListener("load", () => {
  document.querySelector("[data-id]")
    ? favoriteButton.init()
    : null;
});
