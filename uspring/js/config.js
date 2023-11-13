document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe de forma predeterminada
    event.preventDefault();

    // Obtiene los valores de los campos del formulario
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("contra").value;
    var comment = document.getElementById("coment").value;

    if (user === '' || password === '') {
        alert('Por favor, completa todos los campos');
      } else {
        // Si los campos están completos, puedes hacer algo aquí, como enviar el formulario o realizar otras acciones.
        // Por ahora, solo mostramos un mensaje de éxito.
        alert('Formulario enviado con éxito');
      }

    // Puedes hacer lo que quieras con las variables, por ejemplo, mostrarlas en la consola
    console.log("usuario: " + user);
    console.log("contra: " + password);
    console.log("coment: " + comment);
});


