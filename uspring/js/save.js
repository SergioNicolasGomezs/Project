function save(){
    db.collection("usuarios").add({
        Comentario: document.getElementById("Coment").value,
        Contraseña: document.getElementById("password").value,
        Usuario: document.getElementById("user").value
    })
    .then((docRef) => {
    alert("User added successfully")
    })
    .catch((error) => {
        alert("error message")
    });
}
