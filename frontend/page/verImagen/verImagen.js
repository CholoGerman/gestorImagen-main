window.onload = () => {
    verImagen();
}
async function verImagen() {
    let url = "../../../BACKEND/controller/imagen.php?funcion=obtener";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar(datos)
}

function Listar(Imagenes) {
    let tbodyElement = document.querySelector("#cuerpoTablaUsuarios");
    imagenes.forEach((imagen) => {
        tbodyElement.innerHTML += `

<div></div>


    `;
    }
    )
}