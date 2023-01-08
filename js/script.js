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
    console.log(this.value);
    var tamano = this.value
    $.ajax(
        {
            url: "http://localhost:5000/checksize",
            type: "POST",
            data: {
                tam: tamano
            },
            success: function(response){
                $("#resultado_tamano").html(response);
            }
        });
});
