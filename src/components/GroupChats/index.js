import React from 'react';
import { ListItemIcon, Avatar} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ModelChat from '../../models/chat';
import ModelUser from '../../models/user';
import CategoryChat from './CategoryChats/';
import { GroupChatsContainer,H2 } from './GroupChatsElements';


const GroupChats = (props) => {

    return (
        <GroupChatsContainer>
            <H2>CHATS GRUPALES
                <CategoryChat />
            </H2>
            <List>
                {
                    (props.chats) ?
                    props.chats.map((chat) => {
                        function onClick(idChat) {

                            if (!ModelChat.findUserInChat(idChat, ModelUser.getUser().id)) {
                                ModelChat.addUserToChat(idChat, ModelUser.getUser().id);
                            }

                            window.location.href = "/chat/" + idChat;
                        };

                        return (
                            <ListItem key={chat.id} button onClick={() => onClick(chat.id)}>
                                <ListItemIcon>
                                    <Avatar>{(chat.category) ? chat.category[0] : ''}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={chat.category} secondary={(chat.users) ? 'Usuarios: ' + chat.users.length : 'Usuarios: 0'} />
                            </ListItem>
                        );
                    }) :
                    <br/>
                }
            </List>
        </GroupChatsContainer>
    )
}

export default GroupChats;