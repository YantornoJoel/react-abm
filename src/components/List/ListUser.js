import React, { useEffect, useState } from 'react';

import { getAll } from '../../service/Usuario'
import { ListUserContainer } from './ListUserStyled';

export const ListUser = () => {

    const [usuario, setUsuario] = useState([])

    const listUser = async () => {
        const resp = await getAll();
        setUsuario(resp.data);
    }

    useEffect(() => {
        listUser();
    }, []);


    return (
        <>
            <ListUserContainer usuario={usuario} key={usuario.id} />
        </>
    )
}
