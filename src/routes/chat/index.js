import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import 'moment/locale/es';

import ChatModel from '../../models/chat';
import UserModel from '../../models/user';
import MessageModel from '../../models/message';

import {ChatWrapper,ChatContainer,TopBar,BottonBar,H2} from './ChatElements'


import { useBroadcastChannel } from '../../tools/hooks';

const useStyles = makeStyles(() => ({
    item: {
        margin: '5px 10px 20px 10px;',
    },
}));

const Page = ({ match }) => {
    const chat = ChatModel.getChat(match.params.id);
    const broadcast = useBroadcastChannel(match.params.id);
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState(chat.messages);

    const classes = useStyles();

    const user = UserModel.getUser();
    const uuidFriend = chat.users.find(user => user !== window.sessionStorage.getItem('uuid'));
    const friend = (uuidFriend) ? UserModel.findUserinListUsers(uuidFriend) : { nickname: '' };

    const handleBroadcast = useCallback(
        e => {
            setMessages([...messages, e.data]);
        },
        [messages]
    );

    useEffect(() => {
        if (broadcast) {
            broadcast.onmessage = handleBroadcast;
        }
    }, [broadcast, handleBroadcast]);

    function handleSend() {
        const tmpmsg = MessageModel.addMessageToChat(match.params.id, msg, user.nickname);
        broadcast.postMessage(tmpmsg);
        setMessages([...messages, tmpmsg]);
        setMsg("");
    }

    function returnDashboard() {
        window.location.href = "/dashboard";
    }

    function hiddenMessage(idMessage) {
        const messages = MessageModel.hiddenMessage(match.params.id, idMessage);
        setMessages(messages);
    }

    return (


        <ChatWrapper>
            <TopBar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={returnDashboard}>
                        <ArrowBackIcon />
                    </IconButton>
                    <H2>{(chat.category) ? "Chat " + chat.category : "Chat con: " + friend.nickname}</H2>
            </TopBar>
            <ChatContainer>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                    >
                        {
                            messages.map((msg) => {
                                if (msg.user === user.nickname && msg.hidden === true) {
                                    return '';
                                }

                                if (msg.user === user.nickname) {
                                    return (<Grid
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start"
                                        spacing={1}
                                        className={classes.item}
                                        key={msg.id}
                                    >
                                        <Grid item>
                                            <Avatar>{msg.user[0]}</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography align="left">{msg.text}</Typography>
                                            <Typography align="left">
                                                <Moment locale="de" fromNow >{msg.date}</Moment>
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <IconButton aria-label="delete" onClick={() => hiddenMessage(msg.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>)
                                }

                                return (<Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    spacing={1}
                                    className={classes.item}
                                    key={msg.id}
                                >
                                    <Grid item>
                                        <Avatar>{msg.user[0]}</Avatar>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography align="left">{msg.text}</Typography>
                                        <Typography align="left">
                                            <Moment locale="de" fromNow >{msg.date}</Moment>
                                        </Typography>
                                    </Grid>
                                </Grid>)
                            })
                        }
                    </Grid>
            </ChatContainer>
            <BottonBar>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Mensaje"
                        fullWidth
                        margin="normal"
                        onChange={e => setMsg(e.target.value)}
                        value={msg}
                    />
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleSend}>
                        <SendIcon />
                    </IconButton>
            </BottonBar>
        </ChatWrapper>
    );
}

export default Page;
