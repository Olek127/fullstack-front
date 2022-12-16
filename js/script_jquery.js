$("#formulario").submit( function(event){

    if($("#nombre").val() == "") {
        $("#lb_nombre").css("color", "red");
        event.preventDefault();
    }

    if($("#apellidos").val() == "") {
        $("#lb_apellidos").css("color", "red");
        event.preventDefault();
    }

});

