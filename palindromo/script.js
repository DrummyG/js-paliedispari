let testo = document.getElementById('app')
const input = document.getElementById('parola')

document.getElementById('bottone').addEventListener('click', function(){
    let letters = input.value.split('')
    let palindromo = ''
    for(i = letters.length - 1; i >= 0; i--){
        palindromo += letters[i]
    }

    if(input.value == palindromo){
        testo.innerHTML = 'La parola è palindroma'
    } else{
        testo.innerHTML = 'La parola non è palindroma'
    }
})



