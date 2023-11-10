const lunghezzapassword = document.getElementById("lunghezza")
const caratteriminuscoli = document.getElementById("caratteri-minuscoli")
const caratterimaiuscoli = document.getElementById("caratteri-numerici")
const caratterispeciali = document.getElementById("caratteri-speciali")
const generaBtn = document.getElementById("genera-btn")
const risultato = document.getElementById("risultato")

const listacaratteriminuscoli = "abcdefghijklmnopqwrstuvwxyz"
const listacaratterimaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const listacaratterinumeri = "0123456789"
const listacaratterispeciali = "!'£$%&/()=?^*#{}[]"

generaBtn.addEventListener("click", generaPassword)

function generaPassword(){
    let stringainiziale = ""
let risultato = ""
if(caratteriminuscoli.checked) stringainiziale += listacaratteriminuscoli
if(caratterimaiuscoli.checked) stringainiziale += listacaratterimaiuscoli
if(caratterinumerici.checked) stringainiziale += listacaratterinumeri
if(caratterispeciali.checked) stringainiziale += listacaratterispeciali

for(let i =0; i<lunghezzapassword.ariaValueMax; i++){
    risultato += stringainiziale.chartAt(
        Math.floor(Math.random()*stringainiziale.length)
    )
}
risultatoDiv.innerHTML = ""
risultatoDiv.innerHTML = risultato
}