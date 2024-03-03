class Menu extends Phaser.Scene{
    constructor(){
        super({ key: 'Menu' });
    }

    preload(){
        //Carregamento das imagens
        this.load.image('startButton', '../assets/startButton.png');
        this.load.spritesheet('kakashi', '../assets/Kakashi_Right.png', { frameWidth: 90, frameHeight: 90 });
    }

    create(){
        //Criação do botão e do personagem:
        this.startButton = this.add.image(globalVariables.gameWidth/2, globalVariables.gameHeight - 200, 'startButton').setScale(.3).setInteractive();
        let character = this.add.sprite(globalVariables.gameWidth/2, globalVariables.gameHeight/2, 'kakashi');

        //Criação da animação que será reproduzida em loop no menu
        this.anims.create({
            key: 'menuSharingan',
            frames: this.anims.generateFrameNumbers('kakashi', { frames: [6, 7, 8, 8, 8, 8, 8, 8, 8, 7, 6, 6, 6, 6, 6] }),
            frameRate: 5,
            repeat: -1
        });

        //Criando o texto para o título do jogo:
        this.add.text(globalVariables.gameWidth/2 - 210, 100, 'Jounin Adventure', { fontSize: '45px', fill: '#fff000' });

        //Fazendo a personagem reproduzir a animação
        character.play('menuSharingan', true);

        //Criando o evento de clique no botão
        this.startButton.on('pointerup', () => {
            this.scene.start('Tutorial');
        })
    }
};