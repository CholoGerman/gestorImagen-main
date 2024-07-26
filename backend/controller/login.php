<?php

function login(){

    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];

    if ($usuario == 'superman' && $contraseña == 'franco123') {
       session_start();
      $_SESSION['usuario'] = $usuario;
       
    } else {
        echo "Usuario o contraseña incorrectos.";
        session_destroy();
    }

}

?>