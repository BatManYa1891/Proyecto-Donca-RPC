document.getElementById('enviar').addEventListener('click', obtenerInfo);


function obtenerInfo() {
    document.getElementById('nombre').value = "";
    document.getElementById('email').value= "";
    document.getElementById('mensaje').value= "";
    let mensaje2 = document.getElementById('mensaje2');
    mensaje2.innerText = 'Gracias por comunicarte con nosotros, estaremos en contacto a la brevedad.';
}