function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 5 + 1)
    return randomNumber
}

let testo = document.getElementById('app')

document.getElementById('bottone').addEventListener('click', function (){
    testo.innerHTML = ''
    let myValue = parseInt(document.getElementById('numero').value)
    if(myValue > 5){
        testo.innerHTML += 'Non si bara'
        return
    }

    let pc = randomNumber()
    let somma = myValue + pc

    if(somma % 2 == 0){
        testo.innerHTML += 'La somma dei due numeri è pari'
    } else {
        testo.innerHTML += 'La somma dei due numeri è dispari'
    }

    if (myValue > pc){
        testo.innerHTML += ' e congratulazioni hai vinto'
    } else  if(myValue < pc){
        testo.innerHTML += ' e congratulazioni hai perso'
    } else {
        testo.innerHTML += ' e congratulazioni hai pareggiato'
    }
})