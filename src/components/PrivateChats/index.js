import React from 'react';
import { ListItemIcon} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelUser from '../../models/user';
import { PrivateChatsContainer,H2,WrapUser} from './PrivateChatsElements';

const PrivateChats = (props) => {

    return (
        <PrivateChatsContainer>
            <H2>
                MIS CHATS
            </H2>
            <List>
                {
                    (props.chats) ?
                    props.chats.map((chat) => {
                        function onClick(idChat) {
                            window.location.href = "/chat/" + idChat;
                        };
                        const uuidFriend = chat.users.find(user => user !== window.sessionStorage.getItem('uuid'));
                        const friend = (uuidFriend) ? ModelUser.findUserinListUsers(uuidFriend).nickname : { nickname: '' };

                        return (
                            <ListItem key={chat.id} button onClick={() => onClick(chat.id)}>
                                <ListItemIcon>
                                    <WrapUser>{friend}</WrapUser>
                                </ListItemIcon>
                                <ListItemText primary={chat.category} secondary={(chat.messages) ? 'Mensaje(s): ' + chat.messages.length : 'Mensajes: 0'} />
                            </ListItem>
                        );
                    }) :
                    <br/>
                }
            </List>
        </PrivateChatsContainer>
    )
}

export default PrivateChats;