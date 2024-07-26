<?php
session_start();

if(isset($_SESSION['usuario'])){
    
    echo 'Bienvenido';
} else{
    echo 'Por favor inicia sesión';
}
?>