import React from 'react';
// import TextField from '@material-ui/core/TextField';
import {HomeContainer,H1, H2, Button, InputText} from './HomeElements'
import UserModel from '../../models/user';
import {obtenerUUID} from '../../tools/generador-uuid';
import { Redirect } from "react-router-dom";

const Page = () => {

    let nickName = "";
    const UUID = obtenerUUID();

    const onClick = () => {
        UserModel.addUser(UUID, nickName);
        window.location.href = '/dashboard';
    };

    const changeNickName = function (e) {
        nickName = e.target.value ;
    };

    if(UserModel.getUser()){
        return <Redirect to="/dashboard" />
    }
    return (
            <HomeContainer>
                <H1>Bienvenido</H1>
                <H2>Ingresa tu Nombre.</H2>
                <InputText onChange={changeNickName} />
                <Button onClick={onClick}>Iniciar</Button>
            </HomeContainer>
    )
};

export default Page;
