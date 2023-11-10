const lunghezzapassword = document.getElementById("lunghezza")
const caratteriminuscoli = document.getElementById("caratteri-minuscoli")
const caratterimaiuscoli = document.getElementById("caratteri-maiuscoli")
const caratterinumeri = document.getElementById("caratteri-numeri")
const caratterispeciali = document.getElementById("caratteri-speciali")
const generaBtn = document.getElementById("genera-btn")
const risultatoDiv = document.getElementById("risultato")

const listacaratteriminuscoli = "abcdefghijklmnopqrstuvwxyz"
const listacaratterimaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const listacaratterinumeri = "0123456789"
const listacaratterispeciali = "!$?%^&*()_-+={[}]:;@#|\<,>.?/"

generaBtn.addEventListener("click", generaPassword)

function generaPassword(){
    let stringainiziale = ""
    let risultato = ""



  if(caratteriminuscoli.checked) stringainiziale += listacaratteriminuscoli
  if(caratterimaiuscoli.checked) stringainiziale += listacaratterimaiuscoli
  if(caratterinumeri.checked) stringainiziale += listacaratterinumeri
  if(caratterispeciali.checked) stringainiziale += listacaratterispeciali

    for(let i =0; i<lunghezzapassword.value; i++){
      risultato += stringainiziale.charAt(
        Math.floor(Math.random()*stringainiziale.length)
    )
}

    risultatoDiv.innerHTML = ""
risultatoDiv.innerHTML = risultato

}