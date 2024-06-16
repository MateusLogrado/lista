let resposta = document.getElementById("resposta")

function calcular(){
    let larg = Number(document.getElementById("larg").value)
    let comp = Number(document.getElementById("comp").value)
    let altura = Number(document.getElementById("altura").value)

    console.log(larg)
    console.log(comp)
    console.log(altura)

    let largComp = larg * comp
    console.log(largComp)

    let primaderesposta = largComp * comp / 3
    console.log(primaderesposta)

    resposta.innerHTML = "O volume da piramede é " + primaderesposta
}