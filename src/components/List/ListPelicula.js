import React, { useEffect, useState } from 'react';

import { getAll } from '../../service/Pelicula';
import { ListPeliculaContainer } from './ListPeliculaStyled';

export const ListPelicula = () => {

    const [pelicula, setPelicula] = useState([]);

    const listPelicula = async () => {
        const resp = await getAll();
        setPelicula(resp.data);
    }

    useEffect(() => {
        listPelicula();
    }, []);


    return (
        <>
            <ListPeliculaContainer pelicula={pelicula} key={pelicula.id} />
        </>
    )
}
