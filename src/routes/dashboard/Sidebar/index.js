import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

import SettingsIcon from '@material-ui/icons/Settings';
import ModelUser from '../../../models/user';
import { SidebarContainer,NameUser,LinkItem,ItemsWrapper } from './SidebarElements'

const Sidebar = () => {

    const user = ModelUser.getUser();

  return (
    <>
      <SidebarContainer>
        <NameUser>{user.nickname}</NameUser>
        <ItemsWrapper>
        <LinkItem to="/dashboard/chats-privados">
          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chats privados" />
          </ListItem>
        </LinkItem>
        <LinkItem to="/dashboard/chats-grupales">
          <ListItem button>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Chats grupales" />
          </ListItem>
        </LinkItem>
        <LinkItem to="/dashboard/list-users">
          <ListItem button>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Lista de usuarios" />
          </ListItem>
        </LinkItem>
        <LinkItem to="/dashboard/settings">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Ajustes"/>
          </ListItem>
        </LinkItem>
        </ItemsWrapper>
      </SidebarContainer>     
    </>
  )
}

export default Sidebar

