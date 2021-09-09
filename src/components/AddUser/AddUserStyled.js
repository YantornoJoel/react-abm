import React from 'react'

import { useForm } from '../../helpers/useForm';
import { save } from '../../service/Usuario'


import { Button, Container, Grid, makeStyles, TextField, Card } from '@material-ui/core'
import { AccountCircle, Phone, LocationOn, Fingerprint, Save } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


export const AddUserStyled = () => {

    const [formValues, handleInputChange, reset] = useForm({
        id: '',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: ''
    })
    const { id, nombre, apellido, direccion, telefono } = formValues;

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            history.push("/list")

        }, 2000);
        save(id, nombre, apellido, direccion, telefono)
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
            <Card variant="outlined" style={{background: 'white'}}>

                <h1 style={{ textAlign: 'center' }} className="mb-4 mt-3">Agregar usuario</h1>

                <form onSubmit={onSubmit}>

                    <div className={clases.margin}>
                        <Grid container spacing={1} justifyContent="center">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="input-with-icon-grid"
                                    placeholder="Ingrese un id"
                                    name="id"
                                    value={id}
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
                                    placeholder="Apellido"
                                    name="apellido"
                                    value={apellido}
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
                                    placeholder="Dirección"
                                    name="direccion"
                                    value={direccion}
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
                                    placeholder="Teléfono"
                                    name="telefono"
                                    value={telefono}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <Button
                        variant="contained"
                        color="secondary"
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
