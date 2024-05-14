const colorsList = {
  Affair:"#714693",
  Akaroa:"#D4C4A8",
  Amarelo:"#FFFF00",
  Azul:"#1717FF",
  AzulCeu:"#D0E0E3",
  Azulaco:"#6FA8DC",
  Azulclaro:"#CFE2F3",
  Azulescuro:"#0B5394",
  Azulpetroleo:"#134F5C",
  BaliHai:"#859FAF",
  Beige:"#F5F5DC",
  Blossom:"#DCB4BC",
  Bombay:"#AFB1B8",
  Branco:"#FFFFFF",
  Bronze:"#3F2109",
  Bronzetone:"#4D400F",
  BrownBramble:"#592804",
  ButterflyBush:"#624E9A",
  Calico:"#E0C095",
  Cameo:"#D9B99B",
  CapePalliser:"#A26645",
  Celeste:"#D1D2CA",
  Cello:"#1E385B",
  Cinza:"#666666",
  CopperRust:"#944747",
  Coral:"#FF7F50",
  CyanAqua:"#00FFFF",
  Dourado:"#BF9000",
  GableGreen:"#163531",
  HoneyFlower:"#4F1C70",
  InternationalKleinBlue:"#002FA7",
  Laranja:"#FF9900",
  Lilas:"#8E7CC3",
  LilacBush:"#9874D3",
  Marrom:"#B45F06",
  MetallicBronze:"#49371B",
  Minsk:"#3F307F",
  Mustard:"#FFDB58",
  Pampas:"#F4F2EE",
  Preto:"#000000",
  PearlLusta:"#FCF4DC",
  QuarterPearlLusta:"#FFFDF4",
  RedViolet:"#C71585",
  Rosa:"#F4CCCC",
  Salmon:"#FF8C69",
  Sandal:"#AA8D6F",
  Silver:"#C0C0C0",
  SilverChalice:"#ACACAC",
  Stack:"#8A8F8A",
  SweetCorn:"#FBEA8C",
  Tabasco:"#A02712",
  Tana:"#D9DCC1",
  Terracota:"#E06666",
  TobaccoBrown:"#715D47",
  Tosca:"#8D3F3F",
  Tussock:"#C5994B",
  Verde:"#0C9800",
  Vermelho:"#FF0000",
  YellowMetal:"#716338",
  Bordeaux:"#5C0120",
}

const twoColorsVariaton2 = {
  searchTwoColorsVariation: function () {
    document.querySelectorAll('.atributos a[data-variacao-nome]').forEach(element => {
      const colors = element.getAttribute('data-variacao-nome').replace(' ','').split('/');
      const color1Hex = colorsList[`${colors[0].replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')}`]
      const color2Hex = colorsList[`${colors[1].replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '')}`]
      colors.length == 2 ? this.setHexColor(color1Hex, color2Hex, element) : null;
    })
  },
  setHexColor: function (color1, color2, element) {
    element.firstElementChild.classList.add('two-colors-variation');
    console.log(element.firstElementChild)
    element.firstElementChild.setAttribute("style", `border-color: ${color1} ${color2}`);
  },
  init: function () {
    this.searchTwoColorsVariation();
  }
}
twoColorsVariaton2.init();
console.log('init variattions!')