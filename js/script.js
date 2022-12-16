document.getElementById("formulario").addEventListener("submit", function(event) {
    if(document.getElementById("nombre").value == ""){
        document.getElementById("lb_nombre").style.color = "red";
        event.preventDefault();
    }
    if(document.getElementById("apellidos").value == ""){
        document.getElementById("lb_apellidos").style.color = "red";
        event.preventDefault();
    }
}
);
