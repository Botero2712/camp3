import React, { useEffect } from 'react';
import axios from 'axios';
import { useApp } from 'D:/Univalle/Univalle/Bootcamp/lab2_campamento/frontend/context/AppContext';
import {manejarRespuesta} from '../utils/ResponseHandler';

const UserList = () => {

    const { usuarios, agregarUsuario, eliminarUsuario } = useApp();

    useEffect(() => {
        let isFetched = true;
        const obtenerUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/usuarios');
                if (isFetched){
                    response.data.forEach(usuario => agregarUsuario(usuario));
                    console.log(manejarRespuesta(response));
                }
            } catch (error) {
                console.error(manejarRespuesta(error.response));
            }
        };
        obtenerUsuarios();
        return () => {
            isFetched = false;
        };
    }, []);

    return (
        <div>
            <h3>Lista de Usuarios</h3>
            {usuarios.map(usuario => (
                <div key={usuario.id}>
                    <h4>{usuario.nombre}</h4>
                    <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;
