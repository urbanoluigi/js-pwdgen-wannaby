const lunghezzaPassword = document.getElementById("lunghezza")
const caratteriMinuscoli = document.getElementById("caratteri-minuscoli")
const caratteriMaiuscoli = document.getElementById("caratteri-maiuscoli")
const caratteriNumerici = document.getElementById("caratteri-numerici")
const caratteriSpeciali = document.getElementById("caratteri-speciali")
const generaBtn = document.getElementById("genera-btn")
const risultato = document.getElementById("risultato")

const listacaratteriMinuscoli = "abcdefghijklmnopqwrstuvwxyz"
const listacaratteriMaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const listacaratteriNumerici = "0123456789"
const listacaratteriSpeciali = "!'£$%&/()=?^*#{}[]"

generaBtn.addEventListener("click", generaPassword)

function generaPassword(){
    let stringainiziale = ""
    let risultato = ""
    if(caratteriminuscoli.checked) stringainiziale += listacaratteriMinuscoli
    if(caratterimaiuscoli.checked) stringainiziale += listacaratteriMaiuscoli
    if(caratterinumerici.checked) stringainiziale += listacaratteriNumerici
    if(caratterispeciali.checked) stringainiziale += listacaratteriSpeciali

    for(let i =0; i<lunghezzapassword.value; i++){
      risultato += stringainiziale.chartAt(
        Math.floor(Math.random()*stringainiziale.length)
    )
}

risultatoDiv.innerHTML = ""
risultatoDiv.innerHTML = risultato

}