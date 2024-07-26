<?php
require_once '../model/imagenDAO.php';

$funcion = $_GET['funcion'];

switch ($funcion) {

    case "agregar";
        agregar();
        break;

    case "obtener";
        obtener();
        break;

}
function obtener(){
    $resultado = (new imagen())->obtener();
    echo json_encode($resultado);
}

function agregar(){
    $nombre = $_GET['nombre'];
    $imagen = $_FILES['imagen'];
    $imagenDAO= new imagen();
    $imagenDAO->agregar($nombre, $imagen);
}