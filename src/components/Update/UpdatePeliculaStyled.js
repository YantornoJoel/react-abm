import React from 'react'

import { useForm } from '../../helpers/useForm';
import { save } from '../../service/Pelicula'


import { Button, Card, Container, Grid, makeStyles, TextField } from '@material-ui/core'
import { AccountCircle, Phone, LocationOn, Fingerprint, Save } from '@material-ui/icons';


export const UpdatePeliculaStyled = () => {

    const idPelicula = localStorage.getItem('idPelicula')

    const [formValues, handleInputChange, reset] = useForm({
        id: idPelicula,
        nombre: '',
        categoria: '',
        creador: '',
        año: ''
    })
    const { id, nombre, categoria, creador, año } = formValues;

    const onSubmit = (e) => {
        e.preventDefault();
        save(id, nombre, categoria, creador, año)
        reset()
    }


    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(1),
            float: 'right'
        },
    }));

    const clases = useStyles();

    return (

        <Container fixed className="mt-5">
            <Card variant="outlined" style={{ background: 'white' }}>
                <h1 style={{ textAlign: 'center', marginTop: '15px', marginBottom: '30px' }}>EDITAR PELICULA</h1>

                <form onSubmit={onSubmit}>

                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    disabled
                                    name="id"
                                    value={idPelicula}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    placeholder="Nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    placeholder="Categoria"
                                    name="categoria"
                                    value={categoria}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>


                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <LocationOn />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    placeholder="Creador"
                                    name="creador"
                                    value={creador}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>


                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <Phone />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    placeholder="Año"
                                    name="año"
                                    value={año}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={clases.button}
                        startIcon={<Save />}
                        type='submit'
                    >
                        Guardar
                    </Button>

                </form>
            </Card>
        </Container>
    )
}
