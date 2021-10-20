import React from 'react'


import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container } from '@material-ui/core';
import { deletePelicula } from '../../service/Pelicula';


import Swal from 'sweetalert2';
import { Delete, Edit } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    button: {
        marginTop: 20,
        float: 'right'
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    tableContainer: {
        borderRadius: '20px 20px 0px 0px',
        margin: '10px 10px',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
}));


const deletePeliculaId = async (id) => {
    await deletePelicula(id)
}

export const ListPeliculaContainer = ({ pelicula }) => {

    const history = useHistory();

    const clases = useStyles();

    return (
        <Container fixed className="mt-5">
            <h1 style={{ textAlign: 'center' }}>Datos</h1>
            <TableContainer component={Paper} className={clases.tableContainer}>
                <Table className={clases.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Nombre</StyledTableCell>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Categoria</StyledTableCell>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Creador</StyledTableCell>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Año</StyledTableCell>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Id</StyledTableCell>
                            <StyledTableCell className={clases.tableHeaderCell} align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pelicula.map((pelicula) => (
                            <StyledTableRow key={pelicula.id}>
                                <StyledTableCell component="th" scope="row" className={clases.name}>
                                    {pelicula.nombre}
                                </StyledTableCell>
                                <StyledTableCell align="center">{pelicula.categoria}</StyledTableCell>
                                <StyledTableCell align="center">{pelicula.creador}</StyledTableCell>
                                <StyledTableCell align="center">{pelicula.año}</StyledTableCell>
                                <StyledTableCell align="center">{pelicula.id}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Edit
                                        onClick={() => {
                                            localStorage.setItem('idPelicula', pelicula.id)
                                            history.push("/pelicula/update")
                                        }}
                                    />
                                    <Delete
                                        // style={{ paddingLeft: 15, color: 'red' }}
                                        style={{ marginLeft: 15, color: 'red' }}
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'Eliminar pelicula',
                                                text: `¿Seguro que desea eliminar la pelicula ${pelicula.nombre}?`,
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Si',
                                                cancelButtonText: 'No'
                                            })
                                                .then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                            'Borrado',
                                                            `La pelicula ${pelicula.nombre} ha sido borrado correctamente.`,
                                                            'success'
                                                        )
                                                        deletePeliculaId(pelicula.id)
                                                        setTimeout(() => {
                                                            history.push("/settings");
                                                        }, 1000);
                                                    }
                                                })
                                        }}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" className={clases.button}
                onClick={() => {
                    history.push("/pelicula/add")
                }}
            >
                Añadir pelicula
            </Button>
        </Container>

    )
}
