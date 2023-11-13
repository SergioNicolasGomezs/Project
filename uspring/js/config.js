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
        // Si los campos están completos, muestra un mesaje de exito
        alert('Formulario enviado con éxito');
      }

    // mostrar los datos en la consola
    console.log("usuario: " + user);
    console.log("contra: " + password);
    console.log("coment: " + comment);
});


