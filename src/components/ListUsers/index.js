import React from 'react';
import { ListItemIcon, Avatar} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ModelUser from '../../models/user';
import ModelChat from '../../models/chat';
import { ListUsersContainer,H2,ItemText } from './ListUsersElements';

const ListUsers = (props) => {
    const localUser = ModelUser.getUser();
    const index = props.users.findIndex(p => p.id === localUser.id);

    if(index > -1){
        props.users.splice(index, 1);    
    }

    return (
        <ListUsersContainer>
            <H2>Lista de Usuarios</H2>
            <List>
                {
                    props.users.map((user) => {
                        function onClick(idFriend) {
                            const emiter = ModelUser.getUser();
                            const idChat = ModelChat.findChat(idFriend, emiter.id);
                            console.log(idChat);
                            if (idChat) {
                                window.location.href="/chat/"+idChat;
                                
                                return;
                            }

                            const uuidChat = ModelChat.addChat('unoauno');
                            ModelChat.addUserToChat(uuidChat, emiter.id);
                            ModelChat.addUserToChat(uuidChat, user.id);
                            window.location.href="/chat/"+uuidChat;
                        };

                        return (
                            <ListItem key={user.id} button onClick={() => onClick(user.id)}>
                                <ListItemIcon>
                                    <Avatar>{user.nickname[0].toUpperCase()}  </Avatar>
                                </ListItemIcon>
                                <ItemText>{user.nickname}</ItemText>
                            </ListItem>
                        );
                    })
                }
            </List>
        </ListUsersContainer>
    )
}

export default ListUsers;