// Variável de configuração do jogo
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT ,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    backgroundColor: "#3242a8",
    physics: {
      gravity: { y: 0 },
      default: "arcade",
      arcade: {
        gravity: { y: 400 },
        debug: false,
      },
    },
    scene: [Menu, Tutorial],
  };

// Cria as variáveis globais que auxiliaram no código do jogo
const globalVariables = { gameWidth: window.innerWidth, gameHeight: window.innerHeight, downFlag: false};
  
// Cria instância do Phaser
globalVariables.game = new Phaser.Game(config);