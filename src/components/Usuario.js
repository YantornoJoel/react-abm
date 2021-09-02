import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getAll } from '../service/Usuario'

export const UsuarioController = () => {

    const [usuario, setUsuario] = useState([])

    const listUser = async () => {
        const resp = await getAll();
        setUsuario(resp.data);
    }

    useEffect(() => {

        listUser();
    }, []);


    return (
        <div>
            <h1>Datos</h1>

            {
                usuario.map(u => (
                    <div key={u.id}>
                        <h1>Id: {u.id}</h1>
                        <h1>Nombre: {u.nombre}</h1>
                        <h1>Apellido: {u.apellido}</h1>
                        <h2>Dirección: {u.direccion}</h2>
                        <h2>Telefono: {u.telefono}</h2>
                    </div>
                ))
            }


        </div>
    )
}
