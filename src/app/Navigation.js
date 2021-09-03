import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export const Navigation = () => {
    const clases = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette: {
            secondary: {
                main: '#aed581',
            },
        },
    });

    return (
        <div>
            <BottomNavigation value={value} onChange={handleChange} className={clases.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>

            <div style={{ float: 'right' }}>
                <Link to="/add">
                    Añadir
                </Link>

                <Link to="/list">
                    Listado
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color='secondary' href="/add">
                        Añadir
                    </Button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button variant="contained" color="secondary" href="/add">
                        Listado
                    </Button>

                </ThemeProvider>

            </div>

        </div>
    );
}