window.onload = () => {

    function guardarLoginEnStorage(usuario) { //funcion para guardar el login en el localstorage
      window.localStorage.setItem("usuario", JSON.stringify(usuario));
    }

    function logout() { //funcion para cerrar la seision
      fetch('/logout', {
        method: 'POST',
      })
     .then(response => response.json())
     .then(data => {
        if (data.success) {
      
          localStorage.removeItem('usuario'); //Limpiar el localStorage
          
          window.location.href = '../page/login.html';  // Redirigir al usuario a la página de inicio
        } else {
          console.error('Error al cerrar sesión:', data.error);
        }
      })
      }
  
    let formElement = document.querySelector("#formlogin");    
    let usuarioInput = document.querySelector("#usuario"); //tomo el usuario
    let contraseñaInput = document.querySelector("#contraseña"); //tomo la contraseña
    
    formElement.onsubmit = async (e) => {
      e.preventDefault();
      let usuario = usuarioInput.value;
      let contraseña = contraseñaInput.value;
      
  
      let url = "../../../BACKEND/controller/login.php?funcion=login";
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //informamos que el contenido es de formato json
        },
        body: JSON.stringify({ usuario, contraseña }),
      }
      let respuesta = await fetch(url, config);
      let datos = await respuesta.json()
      console.log(datos);
      
      if (datos == false) {
        alert("Error")
      } else {
        alert("Usuario agregado")
        guardarLoginEnStorage(usuario);
      }
    }
  }
  
  if (localStorage.getItem('usuario') == null) { //si los datos del formulario no son validos
    window.location.href = '../page/login.html';  //redirigimos al login
    alert('Debes iniciar sesión para acceder a esta sección'); //enviamos una alerta
}




