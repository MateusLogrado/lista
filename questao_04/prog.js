let resposta = document.getElementById("resposta")

function calcular(){
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    
    console.log(nome)
    console.log(idade)

    if ( idade <= 18){
        resposta.innerHTML = nome + " não tem idade o suficiente para votar"
    }
    else{
        resposta.innerHTML = nome + " tem idade o suficiente para votar"
    }
}