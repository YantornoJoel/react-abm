import React from 'react'

import { useForm } from '../../helpers/useForm';
import { save } from '../../service/Pelicula'


import { Button, Container, Grid, makeStyles, TextField, Card } from '@material-ui/core'
import { AccountCircle, Create, DateRange, Fingerprint, Save } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


export const AddPeliculaStyled = () => {

    const [formValues, handleInputChange, reset] = useForm({
        id: '',
        nombre: '',
        categoria: '',
        creador: '',
        año: ''
    })
    const { id, nombre, categoria, creador, año } = formValues;

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            history.push("/pelicula/list")

        }, 2000);
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

                <h1 style={{ textAlign: 'center' }} className="mb-4 mt-3">AGREGAR PELICULA</h1>

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
                                <Create />
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
                                <DateRange />
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
