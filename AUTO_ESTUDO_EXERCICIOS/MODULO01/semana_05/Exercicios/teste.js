class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`O nome do animal é: ${this.nome}. E sua idade é: ${this.idade}`);
    }
}

let cachorro = new Animal('Bob', 4);
let gato = new Animal('Saori', 7);

cachorro.descrever();
gato.descrever();