let idade = prompt("insira sua idade:");

if(idade < 16){
    console.log("Não pode votar!");
}else if(idade < 18){
    console.log("Voto facultativo!");
}else{
    console.log("Voto obrigatório!");
}