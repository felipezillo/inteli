;class Tutorial extends Phaser.Scene{
    constructor(){
        super({ key: 'Tutorial' });
        this.enemyInfo = new Personagem(100, 40);
        this.kakashiInfo = new Personagem(100, 50);

        //Variáveis auxiliares:
        this.enemyFlip = true;
        this.attackFlag = false
        this.visible = true;
    }

    preload(){
        //Carregamento das imagens e sprites 
        this.load.spritesheet('kakashiRight', './assets/Kakashi_Right.png', { frameWidth: 90, frameHeight: 90 });
        this.load.spritesheet('kakashiLeft', './assets/Kakashi_Left.png', { frameWidth: 90, frameHeight: 90 });
        this.load.spritesheet('zabuza', './assets/zabuza.png', { frameWidth: 70, frameHeight: 80 });
        this.load.spritesheet('enemy', './assets/enemy.png', { frameWidth: 50, frameHeight: 65 });
        this.load.spritesheet('enemyDT', './assets/enemy_dt.png', { frameWidth: 68, frameHeight: 53 });
        this.load.spritesheet('weapon', './assets/weapon.png', { frameWidth: 35, frameHeight: 30});
        this.load.image('bg', './assets/dojo.jpg');
        this.load.image('mangekyou', './assets/mangekyou.png');
        this.load.image('floor', './assets/platform.png');
    }

    create(){
        //Configurando o background do Dojo e deixando-o cobrindo a tela toda
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg')
        let scaleX = this.cameras.main.width / image.width
        let scaleY = this.cameras.main.height / image.height
        let scale = Math.max(scaleX, scaleY)
        image.setScale(scale).setScrollFactor(0)


        //Definindo os textos para o tutorial:
        this.tutorialText = this.add.text(globalVariables.gameWidth/2 - 85, 230, 'Tutorial', { fontSize: '45px', fill: '#ffffff' });
        this.add.text(globalVariables.gameWidth/2 - 750, 320, 'Aperte Q para usar o poder', { fontSize: '35px', fill: '#ffffff' });
        this.add.text(globalVariables.gameWidth - 750, 320, 'Aperte Espaço para dash', { fontSize: '35px', fill: '#ffffff' });

        //Definindo as variáveis de personagens:
        globalVariables.player = this.physics.add.sprite(0, globalVariables.gameHeight - 120, 'kakashiRight').setScale(2);
        this.enemy = this.physics.add.sprite(globalVariables.gameWidth/2, globalVariables.gameHeight - 100, 'enemy').setScale(3).setFlipX(true);

        //Definindo as variáveis de telcas:
        globalVariables.cursors = this.input.keyboard.createCursorKeys();

        //Chamando a função que cria as animações
        this.createAnimations();

        //Criando as colisões dos personagens:
        globalVariables.player.setCollideWorldBounds(true);
        this.enemy.setCollideWorldBounds(true);
        this.physics.add.overlap(this.enemy, globalVariables.player, () => {
            if(!this.attackFlag){
                this.attackFlag = true;
                if(this.enemy.anims.isPlaying && this.enemy.anims.key !== 'enemyAttack'){
                    this.enemy.anims.play('enemyAttack').once('animationcomplete', () => {
                        let golpe = new Golpe(1, this.enemyInfo, this.kakashiInfo);
                        golpe.strike();
                        this.enemy.anims.play('inimigoParado');
                    });
                }
            }else{
                
            }
        });
        this.enemy.anims.play('inimigoParado');

        //Adicionando o chão:
        this.floor = this.physics.add.staticGroup();
        this.floor.create(globalVariables.gameWidth/2, globalVariables.gameHeight, 'floor').setScale(2, .05).refreshBody();
        this.floor.setVisible(false);
        this.physics.add.collider(this.floor, globalVariables.player);

        //Criando o Sharingan
        globalVariables.sharingan = this.add.image(globalVariables.gameWidth/2, globalVariables.gameHeight/2, 'mangekyou').setVisible(false).setScale(.07);
        

    };

    update(){

        //Configurando as movimentaçõs do personagem Kakashi
        if(globalVariables.cursors.right.isDown){
            //Movimentação para a direita
            if(globalVariables.player.anims.isPlaying && globalVariables.player.anims.currentAnim.key !== 'runRight' && globalVariables.player.anims.currentAnim.key !== 'runLeft'){
                return;
            }
            this.flip = false;
            globalVariables.player.anims.play('runRight', true);
            globalVariables.player.setVelocityX(300);
            globalVariables.downFlag = true;
        }else if(globalVariables.cursors.right.isUp && globalVariables.cursors.left.isUp && globalVariables.cursors.up.isUp){
            //Parar a movimentaçao para a direita
            if(globalVariables.downFlag){
                if(!this.flip){
                    globalVariables.player.setFrame(0);
                    globalVariables.player.anims.stop();
                    globalVariables.downFlag = false;
                    globalVariables.player.setVelocityX(0);
                    globalVariables.player.setVelocityY(0);
                }else{
                    globalVariables.player.setFrame(9);
                    globalVariables.player.anims.stop();
                    globalVariables.downFlag = false;
                    globalVariables.player.setVelocityX(0);
                    globalVariables.player.setVelocityY(0);
                }
            }
        }else if(globalVariables.cursors.left.isDown){
            //Movimentação para a esquerda
            if(globalVariables.player.anims.isPlaying && globalVariables.player.anims.currentAnim.key !== 'runRight' && globalVariables.player.anims.currentAnim.key !== 'runLeft'){
                return;
            }
            if(!this.flip){
                this.flip = true;
                globalVariables.player.anims.play('runLeft');
            }
            globalVariables.player.play('runLeft', true);
            globalVariables.player.setVelocityX(-300);
            globalVariables.downFlag = true;
        }else if(globalVariables.cursors.up.isDown){
            //Configurando o pulo
            if(globalVariables.player.anims.isPlaying && globalVariables.player.anims.currentAnim.key !== 'runRight' && globalVariables.player.anims.currentAnim.key !== 'runLeft'){
                return;
            }
            let animation = 'jumpRight';
            let frame = 0;
            if(this.flip){ 
                animation = 'jumpLeft';
                frame = 9;
            };
            globalVariables.player.setVelocityY(-400);
            globalVariables.player.anims.play(animation).once('animationcomplete', () => {
                globalVariables.player.anims.stop();
                globalVariables.player.setFrame(frame);
                globalVariables.player.setVelocityY(0);
            });
        };

        //Configurando o dash do Kakashi
        this.input.keyboard.on('keydown-SPACE', () => {
            if(globalVariables.player.anims.isPlaying || globalVariables.cursors.right.isDown || globalVariables.cursors.left.isDown){
                return;
            }
            if(!this.flip){
                //Dash para a direita
                globalVariables.player.anims.play('dashRight').once('animationcomplete', () => {
                    globalVariables.player.x += 300;
                    globalVariables.player.anims.play('stopDashRight');
                });
                globalVariables.player.setVelocityX(0);
            }else{
                //Dash para a esquerda
                globalVariables.player.anims.play('dashLeft').once('animationcomplete', () => {
                    globalVariables.player.x -= 300;
                    globalVariables.player.anims.play('stopDashLeft');
                });
                globalVariables.player.setVelocityX(0);
            }
        });

        //Poder de Sharingan
        this.input.keyboard.on('keydown-Q', () => {
            if(globalVariables.player.anims.isPlaying || globalVariables.cursors.right.isDown || globalVariables.cursors.left.isDown){ 
                return; 
            }
            if(!this.flip){
                //Sharingan para a direita
                globalVariables.player.anims.play('startSharinganRight').once('animationcomplete', () => {
                    globalVariables.sharingan.setVisible(true);
                    globalVariables.player.anims.play('endSharinganRight').once('animationcomplete', () => {
                        globalVariables.sharingan.setVisible(false);
                        if(this.enemy.x > globalVariables.player.x){
                            let golpe = new Golpe(1, this.kakashiInfo, this.enemyInfo);
                            golpe.strike();
                            this.enemy.setVelocityX(20);
                            this.enemy.anims.play('enemyHit').once('animationcomplete', () => {
                                if(this.enemyInfo.vida > 0){
                                    this.enemy.anims.play('inimigoParado');
                                }else{
                                    this.enemy.setVisible(false);
                                }
                                this.enemy.setVelocityX(0); 
                            });
                        };
                    });
                }); 
            }else{
                //Sharingan para a esquerda
                globalVariables.player.anims.play('startSharinganLeft').once('animationcomplete', () => {
                    globalVariables.sharingan.setVisible(true);
                    globalVariables.player.anims.play('endSharinganLeft').once('animationcomplete', () => {
                        globalVariables.sharingan.setVisible(false);
                        if(this.enemy.x < globalVariables.player.x){
                            let golpe = new Golpe(1, this.kakashiInfo, this.enemyInfo);
                            golpe.strike();
                            this.enemy.setVelocityX(-20);
                            this.enemy.anims.play('enemyHit').once('animationcomplete', () => {
                                if(this.enemyInfo.vida > 0){
                                    this.enemy.anims.play('inimigoParado');
                                }else{
                                    this.enemy.setVisible(false);
                                }
                                this.enemy.setVelocityX(0); 
                            });
                        };
                    })
                })
            }
            
        });
        //Atualizando a posição do Sharingan
        globalVariables.sharingan.setPosition(globalVariables.player.x, globalVariables.player.y - globalVariables.player.height - 20);

        //Trocando o inimigo de lado
        if(globalVariables.player.x > this.enemy.x && this.enemyFlip){
            this.enemy.setFlipX(false);
            this.enemyFlip = false;
        }else if(globalVariables.player.x < this.enemy.x && !this.enemyFlip){
            this.enemy.setFlipX(true);
            this.enemyFlip = true;
        }

        //Mudando os textos de 'tutorial' para 'parabéns, você conseguiu', uma vez que o jogador tenha derrotado o inimigo
        if(!this.enemy.visible && this.visible){
            this.tutorialText.destroy();
            this.add.text(globalVariables.gameWidth/2 - 330, 230, 'Parabéns, você conseguiu!', { fontSize: '45px', fill: '#ffffff' });
            this.visible = false;
        }
    };

    //Função para criar todas as animações
    createAnimations(){
        //Criaão de animações dos inimigos
        this.anims.create({
            key: 'teste',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 30 }),
            frameRate: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'inimigoParado',
            frames: this.anims.generateFrameNumbers('enemy', { frames: [0, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'enemyJump',
            frames: this.anims.generateFrameNumbers('enemy', { frames: [6, 6, 6, 12, 12, 12]}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'enemyHit',
            frames: this.anims.generateFrameNumbers('enemy', { frames: [18, 18, 19, 19, 24, 24]}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'enemyDie',
            frames: this.anims.generateFrameNumbers('enemyDT', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'enemyAttack',
            frames: this.anims.generateFrameNumbers('enemyDT', { frames: [5, 6, 7, 8] }),
            frameRate: 10,
            repeat: 0
        });

        

        //Criando as animções do Kakashi para a direita:
        this.anims.create({
            key: 'startSharinganRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [6, 7, 8] }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'endSharinganRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [8, 8, 8, 8, 8, 8, 8, 7, 6] }),
            frameRate: 10,
            repeat: 0
        })
        
        this.anims.create({
            key: 'dashRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [24, 25, 26, 27, 28, 29] }),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: 'stopDashRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [29, 29,  6] }),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: 'runRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [18, 19, 20, 21, 22, 23] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'jumpRight',
            frames: this.anims.generateFrameNumbers('kakashiRight', { frames: [24, 25, 26, 27, 27, 27] }),
            frameRate: 10,
            repeat: 0
        })


        //Criando as animações do Kakashi para a esquerda
        this.anims.create({
            key: 'startSharinganLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [9, 10, 11] }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'endSharinganLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [11, 11, 11, 11, 11, 11, 11, 10, 9] }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'runLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [18, 19, 20, 21, 22, 23] }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'dashLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [24, 25, 26, 27, 28, 29] }),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: 'stopDashLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [29, 29,  9] }),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: 'jumpLeft',
            frames: this.anims.generateFrameNumbers('kakashiLeft', { frames: [24, 25, 26, 27, 27, 27] }),
            frameRate: 10,
            repeat: 0
        })
    };
};

//Definição da classe Personagem para cálculo de dano
class Personagem{
    constructor(vida, dano){
        this.vida = vida;
        this.dano = dano;
    }

    //Getters
    getVida(){
        return this.vida;
    }
    getDano(){
        return this.dano;
    }

    //Métodos
    perderVida(valor){
        this.vida -= valor;
    }
    recuperarVida(valor){
        this.vida += valor;
    }
};

//Definição da classe Golpe para auxílio no cálculo de dano
class Golpe{
    constructor(multiplicador, atacante, vitima){
        this.multiplicador = multiplicador;
        this.atacante = atacante;
        this.vitima = vitima;
    }

    //Getters
    getMultiplicador(){
        return this.multiplicador;
    }

    getAtacante(){
        return this.atacante;
    }

    getVitima(){
        return this.vitima;
    }

    //Métodos
    strike(){
        this.vitima.perderVida(this.atacante.dano * this.multiplicador);
    }
};
