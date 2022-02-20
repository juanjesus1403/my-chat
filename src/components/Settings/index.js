import React from 'react';
import ModelUser from '../../models/user';
import { SettingContainer,H2, InputText,Button } from './SettingsElements';

const Settings = () => {
    let nickName = "";

    const onClick = () => {
        ModelUser.editUser(nickName);
        window.location.reload()
        
    };

    const changeNickName = function (e) {
        nickName = e.target.value ;
    };
    return (
        <SettingContainer>
                <H2>Cambia tu nombre</H2>
                <br/>
                <InputText id="standard-basic" label="Nickname" onChange={changeNickName} />
                <br/>
                <Button onClick={onClick}>Guardar</Button>
        </SettingContainer>
    )
};

export default Settings;