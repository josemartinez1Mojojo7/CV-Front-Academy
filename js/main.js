let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);
function onClick (event) {
    alert("Mensaje Enviado")
    let formulario = document.getElementById('formulario');    
    formulario.reset();       
}

document.getElementById("mostrar").addEventListener("click", ocultar)
function ocultar(event){
    if (document.getElementById('mostrar').value == "Mostrar Detalle") {
        document.getElementById('detalleP1').style.display = 'block';
        document.getElementById('detalleP2').style.display = 'block';
        document.getElementById('detalleP3').style.display = 'block';
        document.getElementById('mostrar').value="Ocultar Detalle";
    } else {
        document.getElementById('detalleP1').style.display = 'none';
        document.getElementById('detalleP2').style.display = 'none';
        document.getElementById('detalleP3').style.display = 'none';
        document.getElementById('mostrar').value="Mostrar Detalle";
    }
}