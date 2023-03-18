/* console.log('Hola mundo');
alert('Hola mundo'); */

// Metodos para capturar
//Selección por clase de un elemento

/* const encabezado=document.getElementsByClassName('encabezado');
console.log('encabezado');

const encabezado2=document.getElementById('encabezado');
console.log('encabezado2'); */

//-----------------------------------------------------

//Seleciona con idependencia si es id o class
//.clase
//# id

/* const head=document.querySelector('.header');
console.log(head);

const formulario=document.querySelector('#busqueda');
console.log(formulario);
//solo con el selector
const foot=document.querySelector('footer');
console.log(foot); */

//-----------------------------------------------------

//acceder desde otra clase, elemento padre e hijo
//navegando atravez de las clases

/* const cont=document.querySelector('.footer.container');
console.log(foot);
console.log(cont);

const row=document.querySelector('.footer.container');
console.log(row); */

//-----------------------------------------------------
//Seleccionar todas las clases de un mismo tipo
/* const container=document.querySelectorAll('.row');
console.log(container); */


//-----------------------------------------------------
//Acceder a una etiqueta y cambiarla
// const title2=document.querySelector('.contenido-hero h2');
// title2.textContent='Nuevo texto';//METER TEXTO PLANO
// title2.innerHTML='Nuevo texto <p><b>Texto en Inner</b></p>';//METER ETIQUETAS DE HTML

// const title3=document.querySelector('.contenido-hero p ');
// title3.textContent='Todos los cursos a $60';//METER TEXTO PLANO
//--------------------------------------------------------
// let monto=80;
// const title3=document.querySelector('.contenido-hero p ');
// title3.textContent=`Todos los cursos a ${monto}`;

//--------------------------------------------------------
//Acceder al css desde js
// title2.style.backgroundColor='red';
// title2.style.textDecoration='underline';
// title2.style.textTransform='uppercase';


//--------------------------------------------------------
// const contHero=document.querySelector('.contenido-hero');
// console.log(conteHero.classList);

// conteHero.classList.add('nuevaclase')//agregar
// console.log(conteHero.classList);

// conteHero.classList.remove('nuevaclase')//remover
// console.log(conteHero.classList);

//--------------------------------------
//agregar lo que me envio


//---------------------------------------
//Tranversind de DOM

const listaDeCursos=document.querySelector('#lista-cursos');
//console.log(listaDeCursos.children[1].children)//tiene hijos
//console.log(listaDeCursos.children[1].children[0])//navegar entre los hijos

//------------------------------------------------------

//console.log(listaDeCursos.children[1].children)//tiene hijos

//console.log(listaDeCursos.children) para saber cuantos hijs tiene
const tit=listaDeCursos.children[0];//navegar entre los hijo
tit.textContent='Elemento desde el padre';
//console.log(listaDeCursos.children[1].children[0].children[0].children[0]);

//iterar del padre alos hijos
const img=listaDeCursos.children[1].children[0].children[0].children[0];
img.src='img/estrellas.png';

//-----------------------------------------------------
//Tarea en casa
//cambiar el precio de 200 a 500

//iterar del hijo al padre
//console.log(img.parentElement.parentElement);

//iterar desde hermanos
const hermanos=document.querySelector('#lista-cursos .row .four.columns');
console.log(hermanos);
const nextBrother=hermanos.nextElementSibling;
console.log(nextBrother);

const nextBrother3=hermanos.nextElementSibling;
console.log(nextBrother3);


//Eliminar del DOM
//PRIMERA Eliminación directa
listaDeCursos.remove();