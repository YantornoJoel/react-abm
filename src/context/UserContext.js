import React, { createContext, useEffect, useState } from "react";

import usuarioApi from "../service/usuarioApi";


export const UserContext = createContext({});


export const UserProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {

        const { data } = await usuarioApi.get('/all');
        setUsuarios([...data, usuarios])
    };


    return (
        <UserContext.Provider value={{
            usuarios,
            getAll
        }}>
            {children}
        </UserContext.Provider>
    )
}
