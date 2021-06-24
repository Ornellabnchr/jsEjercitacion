//funciones Flechas =>

/*

var sumar = function(){ 
 
    console.log('hola a todos')

}


var sumar = (a,b) => 4

*/


//Objetos literales... JSON
/*
var alumno = {

    //key     Valor
    nombre: 'Cristian',
    apellido: 'Moran',
    edad: 38,
    //Metodos...acciones
    loge: function(){
        console.log('hola soy un metodo')
    }


}
console.log(alumno)
console.log(alumno.apellido)
console.log(alumno.loge())

console.log()

alumno.loge()

*/
//Document Objet Model..DOM

/*

body
h1
span
p
div
main
footer
form


*/


//console.log(document)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)

//console.log(document.all[10])

//document.all[10].textContent='hola probando'
//id... clase..
//console.log(document.getElementById('main-header')) 

//console.log(document.getElementById('header-title')) 

//.textContent ='Hola'

var encabezado = document.getElementById('header-title')

//var Usuario = prompt('ingrese su Usuario')

let usuarioRoot = "juan"

//var passUsuario = prompt('Ingrese pass')

let passRoot = 123456

var  meses = ['enero','febrero','marzo','abril'] 

// ........todo........true
// ..false...&&.....true = false
/*
if(Usuario == usuarioRoot || passUsuario==passRoot ) {

    encabezado.textContent = 'Puede ver el contenido' //imprime todo..<h5> hola pronbando 


}else{

    encabezado.textContent = 'No puede ver .. pague por ver' //imprime todo..<h5> hola pronbando 

}

// comparaciones logicas....Tablas de verdad

//AND ... (si algo es verdadero)..Y (si otra cosa es verdad) = True/false

// true ---- true = true
// true ---- false = false
// false --- true  = false
// false --- false = false
//.... &&...


// OR...o..   ||... 
// true ---- true = true
// true --- false = true
// false --- true = true
// false --- false = false

*/
///Agarro estos elementos por id de clase y los dejo en un array ElementsByClassNam
var items = document.getElementsByClassName('list-group-item')

console.log(items)

console.log(items[2])
///ingreso texto
items[2].textContent = 'hola yesenia'
///pongo en negrita font
items[2].style.fontWeight ='bold'

items[2].style.backgroundColor = 'yellow'

items[0].style.backgroundColor = 'yellow'
items[1].style.backgroundColor = 'yellow'
items[3].style.backgroundColor = 'yellow'


for(var i=0;i<items.length;i++){

    items[i].style.backgroundColor = 'green'


}

//pruebo boton pARA ENVIar lo de inputUnico
var probandoBoton = document.getElementById('button')
var pruebaBoton2 = document.getElementById('agregarClase')
//Agregar una Escucha... listener... escuchador de el click

probandoBoton.addEventListener('click', probandoE)
pruebaBoton2.addEventListener('click', probandoF)


//creando funcion F
function probandoE(){

    console.log('hola probando escuchador...')
    //alert('hola creanme que estoy haciendo click')
    document.getElementsByClassName('tittle').textContent = 'blue'
    /*

    1... asegurarme de capturar el header...
    2...agregar el evento style.background = 'green'

    */
    //tomo el valorde inputUnico, input para ingresar datos
    var valorBoton = document.getElementById('inputUnico')
    var resultado = parseInt(valorBoton.value) * 2
    var valorBox=document.getElementById('output1')
    valorBox.textContent= "La multiplicacion de ese valor por 2 es: " + resultado
    console.log(valorBox)
    
  

}





//creando funcion F
function probandoF(){

    console.log('hola probando escuchador...')
    //alert('hola creanme que estoy haciendo click')
    document.getElementsByClassName('tittle').textContent = 'blue'
    /*

    1... asegurarme de capturar el header...
    2...agregar el evento style.background = 'green'

    */
    //tomo el valorde inputUnico, input para ingresar datos
    var valorBoton = document.getElementById('inputUnico')
    var valorBoton2 = document.getElementById('la')
    var resultado = parseInt(valorBoton.value) * valorBoton2.value
    var valorDiv=document.getElementById('output')
    valorDiv.textContent= "La multiplicacion de ese valor por la cantidad seleccionada (" + valorBoton2.value + ") es: " + resultado
    console.log(valorDiv)
    
}

//

var pruebaBotonModal = document.getElementById('hide-modal')

pruebaBotonModal.addEventListener('click', probandoG)

function probandoG(){

    console.log('hola probando escuchador...')
    //alert('hola creanme que estoy haciendo click')
    document.getElementsByClassName('tittle').textContent = 'orange'
    /*

    1... asegurarme de capturar el header...
    2...agregar el evento style.background = 'green'

    */
    //tomo el valorde inputUnico, input para ingresar datos
    document.getElementById("modal").style.display="none"
    document.getElementById("overlay").style.display="none"
 
    
  

}

//creando funcion F
