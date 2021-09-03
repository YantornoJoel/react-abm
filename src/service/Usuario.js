import axios from 'axios';

import Swal from 'sweetalert2';

const url = 'http://localhost:8080/persona/api/v1/';

export const getAll = async () => {

    const resp = await axios.get(url + 'all');

    return resp;
};


export const findID = async (id) => {

    const resp = await axios.get(`${url}find/${id}`)

    return resp
}


export const save = async (id, nombre, apellido, direccion, telefono) => {

    const resp = await axios.post(`${url}save`, {

        id: id,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono

    })
        .then((resp) => {
            Swal.fire({
                title: 'Enviado',
                text: 'Usuario creado correctamente',
                icon: 'success',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                timer: 3000
            })
            return resp;
        })
        .catch((err) => {
            Swal.fire({
                title: 'Error',
                text: 'Ingrese todos los datos correctamente',
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                timer: 4000
            })
            return err
        })

    return resp
}