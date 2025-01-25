export const manejarRespuesta = (response) => {
    switch (response.status) {
        case 200:
            return 'Operación exitosa';
        case 201:
            return 'Recurso creado exitosamente';
        case 400:
            return 'Error en la solicitud';
        case 404:
            return 'Recurso no encontrado';
        case 500:
            return 'Error en el servidor';
        default:
            return 'Estado desconocido';
    }
};
