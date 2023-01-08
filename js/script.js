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

$("#tam").on('change', function() {
    let tamm = document.getElementById("resultado_tamano");
    console.log(this.value);
    
    fetch("http://localhost:5000/checksize", {
        method: "post"
    }). then(function(response) {
        tamm.innerHTML = response.text();
    }).catch(function(err) {
        console.log(err);
    });
});
