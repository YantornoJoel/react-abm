import React, { useState } from 'react';
import { login } from '../../service/Usuario';


export const Login = () => {
    const [state, setState] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target

        //console.log(id)
        //console.log(value)

        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const name = state.name;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        login(
            name
        )
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ingrese su nombre de usuario"
                    value={state.name}
                    onChange={handleChange}
                />

                <input type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    value={state.password}
                    onChange={handleChange}
                />
                <button type="submit">
                    Ingresar
                </button>

            </form>
        </div>
    )
}