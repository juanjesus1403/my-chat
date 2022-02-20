import React from 'react'
// import PropTypes from 'prop-types';

import ModelUser from '../../../models/user';
import ModelChat from '../../../models/chat';
import Sidebar from '../Sidebar';

import ListUsers from '../../../components/ListUsers/index';
import GroupChats from '../../../components/GroupChats/index';
import PrivateChats from '../../../components/PrivateChats/index';
import Settings from '../../../components/Settings/index';

// import { Drawer } from './InfoSectionElements';

import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";



const InfoSection = () => {


    const user = ModelUser.getUser();
    const users = ModelUser.getUsers();
        
  return (
    <>
        <div>
        <Router>
            <nav>
                <Sidebar/>
            </nav>
            <Switch>
                <Route exact path="/dashboard">
                <PrivateChats chats={ModelChat.findChatsOfUser(user.id,)} />
                </Route>
                <Route path="/dashboard/chats-privados">
                <PrivateChats chats={ModelChat.findChatsOfUser(user.id)} />
                </Route>
                <Route path="/dashboard/chats-grupales">
                <GroupChats chats={ModelChat.findAllGroupChats()} />
                </Route>
                <Route path="/dashboard/list-users">
                <ListUsers users={users} />
                </Route>
                <Route path="/dashboard/settings">
                <Settings />
                </Route>
            </Switch>
        </Router>
        </div>
         
    </>
  )
}

// InfoSection.propTypes = {
//     window: PropTypes.func,
//   };

export default InfoSection