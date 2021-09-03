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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    button: {
        marginTop: 20,
        float: 'right'
    }
});


export const ListUserContainer = ({ usuario }) => {

    const clases = useStyles();

    return (
        <Container fixed>
            <h1 style={{ textAlign: 'center' }}>Datos</h1>
            <TableContainer component={Paper}>
                <Table className={clases.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Apellido</StyledTableCell>
                            <StyledTableCell align="center">Dirección</StyledTableCell>
                            <StyledTableCell align="center">Teléfono</StyledTableCell>
                            <StyledTableCell align="center">Id</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuario.map((usuario) => (
                            <StyledTableRow key={usuario.id}>
                                <StyledTableCell component="th" scope="row">
                                    {usuario.nombre}
                                </StyledTableCell>
                                <StyledTableCell align="center">{usuario.apellido}</StyledTableCell>
                                <StyledTableCell align="center">{usuario.direccion}</StyledTableCell>
                                <StyledTableCell align="center">{usuario.telefono}</StyledTableCell>
                                <StyledTableCell align="center">{usuario.id}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" className={clases.button}>
                Añadir usuario
            </Button>
        </Container>

    )
}
