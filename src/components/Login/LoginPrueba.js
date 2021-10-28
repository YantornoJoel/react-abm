import React, { useContext, useEffect } from 'react'
import { useForm } from '../../helpers/useFormLogin';
import { AuthContext } from '../../context/AuthContext';


export const LoginPrueba = () => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    // useEffect(() => {
    //     if (errorMessage.length === 0) return

    //     // Alert.alert('Inicio de sesión incorrecto', errorMessage, [{
    //     //     text: 'Ok',
    //     //     onPress: removeError
    //     // }]);
    //     alert("ERROR")
    // }, [errorMessage])

    const onLogin = () => {
        signIn({ correo: email, password })
    }

    return (
        <>
            <h1>Prueba</h1>

            <input
                placeholder="Ingrese su email"
                onChangeText={(value) => onChange(value, 'email')}
                value={email}
                onSubmit={onLogin}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </>
    )
}
