document.querySelector('div').addEventListener('click', function() {
    alert('Hola! Soy el div');
});



const boton = document.getElementById('miBoton');
const div = document.getElementById('miDiv');

boton.addEventListener('click', function() {
    event.stopPropagation(); 
    alert('Hola');
});

div.addEventListener('click', function() {
    alert('Hola! Soy el div');
});
