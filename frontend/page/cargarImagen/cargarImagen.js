window.onload = () => {

    let formElement = document.querySelector("#form_i");
    console.log("a", formElement);
    formElement.onsubmit = async (e) => {
        e.preventDefault();
        let formFormData = new FormData(formElement);
        let url = "../../../BACKEND/controller/imagen.php?funcion=agregar";

        let config = {
            method: 'POST',
            body: formFormData

        }
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json()
        console.log(datos);



        if (datos = false) {
            alert("Error")
        }

        else {
            alert("Usuario agregado")
        }
    }
    
}