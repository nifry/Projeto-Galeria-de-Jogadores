//Dom

const foto = document.querySelector('#foto')
const bt01 = document.querySelector('#Neymar')
const bt02 = document.querySelector('#Richarlison')
const bt03 = document.querySelector('#Paqueta')
const bt04 = document.querySelector('#Vinicius')
const bt05 = document.querySelector('#Cristiano')
const bt06 = document.querySelector('#Messi')

//Eventos

bt01.addEventListener('click', Neymar)
bt02.addEventListener('click', Richarlison)
bt03.addEventListener('click', Paqueta)
bt04.addEventListener('click', Vinicius)
bt05.addEventListener('click', Cristiano)
bt06.addEventListener('click', Messi)

//Funções

function Neymar () {
foto.src = 'Images/neymar.jpg'
}  

function Richarlison () {
foto.src = 'Images/Richarlison.jpg'
}

function Paqueta () {
foto.src = 'Images/Paqueta.jpg'

}

function Vinicius (){
foto.src = 'Images/Vinicius.jpg'
}

function Cristiano () {
foto.src = 'Images/Cristiano.jpg'
}


function Messi () {
foto.src = 'Images/Messi.jpg'
}