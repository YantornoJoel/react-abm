import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom';
import { Add, Group, Home, Settings, LockOpen } from '@material-ui/icons';


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

export const Navigation = () => {
    const clases = useStyles();
    const [value, setValue] = useState(0);

    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push("/");
        else if (value === 1) {
            history.push("/list")
            setValue(5) //Para evitar el error de que cuando se toque en editar no se pueda volver al listado
        }
        else if (value === 2) history.push("/add");
        else if (value === 3) history.push("/settings");
        else if (value === 4) history.push("/login")

    }, [value, history])

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={clases.root}
        >
            <BottomNavigationAction style={{ color: 'white' }} label="Inicio" icon={<Home />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Listado" icon={<Group />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Añadir" icon={<Add />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Configuración" icon={<Settings />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Login" icon={<LockOpen />} />
        </BottomNavigation>
    );
}