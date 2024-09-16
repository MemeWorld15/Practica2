$(document).ready(function() {
    // Función para generar un RFC
    $("#Generar").click(function() {
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoP").val();
        var apellidoMaterno = $("#apellidoM").val();
        var fechaNacimiento = $("#fechaN").val();

        // Validar los campos
        if (!nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento) {
            alert("Completa todos los campos.");
            return;
        }

        // Obtener las primeras letras del nombre y apellidos
        nombre = nombre.substring(0, 1).toUpperCase();
        apellidoPaterno = apellidoPaterno.substring(0, 2).toUpperCase();
        apellidoMaterno = apellidoMaterno.substring(0, 1).toUpperCase();

        // Formatear fecha n
        var fecha = new Date(fechaNacimiento);
        var año = fecha.getFullYear().toString().substring(2, 4);
        var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        var dia = ("0" + fecha.getDate()).slice(-2);

        // Formar el RFC con los datos
        var rfc = apellidoPaterno + apellidoMaterno + nombre + año + mes + dia;
        $("#RFC").val(rfc);
    });

    // Función para consultar API de usuario
    $("#consultarUsuario").click(function() {
        var userId = $("#idusuario").val();

        if (!userId) {
            alert("Introduce un ID de usuario.");
            return;
        }

        var apiUrl = "https://jsonplaceholder.typicode.com/users/" + userId;

        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $("#nombreUsuario").val(data.name);
                $("#email").val(data.email);
            },
            error: function() {
                alert("Error al obtener los datos.");
            }
        });
    });
});