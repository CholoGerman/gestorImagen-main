<?php
require_once '../conexion/conexion.php';

class imagen {

    function obtener() {
        $connection = connection();
        $sql = "SELECT * FROM imagen ";
        $respuesta = $connection->query($sql);
        $imagen = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagen;
    }

    public function agregar($nombre, $imagen) { 
        $rutaTemporal = $imagen["tmp_name"];
        $nombreImagen = $imagen["name"];
        $extension = pathinfo($nombreImagen, PATHINFO_EXTENSION);
        $sql = "INSERT INTO imagen (nombre, extension) VALUES('$nombre', '$extension');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        $id = $connection->insert_id;
        move_uploaded_file($rutaTemporal, "../../imagenes/$id.$extension");
        return $respuesta;
    }

}
?>