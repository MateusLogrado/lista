let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")

function calcular(){
    let mmhg = Number(document.getElementById("mmhg").value)
    let psi = Number(document.getElementById("psi").value)
    
    console.log(mmhg)
    console.log(psi)

    let calculo1 = mmhg * 0.0193367801
    let calculo2 = psi / 0.0193367801

    resposta1.innerHTML = "a conversão fica = " + calculo1 + " psi"
    resposta2.innerHTML = "a conversão fica = " + calculo2 + " mmhg"
}