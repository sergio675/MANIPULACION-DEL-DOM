
function cambiarTexto(){

    const selectorTitulo = document.getElementById('titulo');
    const nombreUsuario = prompt("Ingrese su nombre");
    const contenedor = document.getElementById('cont-general');


    // cambiando contenido de una eetiqueta desde js
    selectorTitulo.innerText = "Sergio abella";
    selectorTitulo.innerHTML = "<strong>USUARIO:</strong> " + nombreUsuario;
    //cambiando estilos de una etiqueta dede js
    selectorTitulo.style.backgroundColor = "white";
    selectorTitulo.style.color = "#000";
    selectorTitulo.style.padding = "20px"
    //cambiando estrutura  de una etiqueta desde js
    contenedor.classList.add('dia');
}

function circulo(){
    const selectorTitulo = document.getElementById('titulo');
    const circulo = document.getElementById('figura');
    const redondo = document.getElementById('cont-general');

    selectorTitulo.innerText = " Circulo";

    circulo.style.borderRadius = "50%";
    circulo.style.backgroundColor = "green";
}

function rombo(){

    const selectorTitulo = document.getElementById('titulo');
    const rombo = document.getElementById('figura');
    const triangulo = document.getElementById('cont-general');

    selectorTitulo.innerText = "rombo";

    rombo.style.transform = "rotate(45deg)";
    rombo.style.backgroundColor = "red";
}

function color(){

    const selectorTitulo = document.getElementById('titulo');
    const color = document.getElementById('cont-general');
    

    selectorTitulo.innerText = "color";
    color.style.backgroundColor = "yellow";
}

function imagen(){

    const selectorTitulo = document.getElementById('titulo');
    const imagen = document.getElementById('figura');
    selectorTitulo.innerText = "imagen";


    imagen.classList.add('imagen');
    imagen.style.backgroundSize="cover";
   
}

function arriba(){
    const selectorTitulo = document.getElementById('titulo');
    const arriba = document.getElementById('figura');
    selectorTitulo.innerText = "arriba";

    arriba.style.marginTop = "-40px";
}

function izquierda(){
    const selectorTitulo = document.getElementById('titulo');
    const izquierda = document.getElementById('figura');
    selectorTitulo.innerText = "izquierda";

    izquierda.style.marginLeft = "30px";
}

function abajo(){
    const selectorTitulo = document.getElementById('titulo');
    const abajo = document.getElementById('figura');
    selectorTitulo.innerText = "abajo";

    abajo.style.marginTop = "150px";
}

function derecha(){
    const selectorTitulo = document.getElementById('titulo');
    const derecha = document.getElementById('figura');
    selectorTitulo.innerText = "derecha";

    derecha.style.marginRight = "30px";
}

function diagonal(){
    const selectorTitulo = document.getElementById('titulo');
    const diagonal = document.getElementById('figura');
    selectorTitulo.innerText = "diagonal";

    diagonal.style.marginTop  = "180px";
    diagonal.style.marginLeft = "100px";
}

function animacion(){
    const selectorTitulo = document.getElementById('titulo');
    const animacion = document.getElementById('figura');
    selectorTitulo.innerText = "animacion";

    animacion.classList.toggle("animacion");
    
}

function degradado(){
    const selectorTitulo = document.getElementById('titulo');
    const degradado = document.getElementById('figura');
    selectorTitulo.innerText = "degradado";

    degradado.style.backgroundImage = "linear-gradient(to top,aquamarine,purple,red)";
    degradado.style.borderRadius = "0%";
}

function estrella(){
    const selectorTitulo = document.getElementById('titulo');
    const estrella = document.getElementById('figura');
    selectorTitulo.innerText = "degradado";

    estrella.classList.toggle("estrella");
}

function panelLateral(){
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}

function panelsuperior(){
    const superior = document.getElementById("panel-superior");
    superior.classList.toggle("active");
}

