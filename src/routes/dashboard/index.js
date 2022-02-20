import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ChatIcon from '@material-ui/icons/Chat';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles} from '@material-ui/core/styles';
import ModelUser from '../../models/user';
import ModelChat from '../../models/chat';
import ListUsers from '../../components/ListUsers';
import GroupChats from '../../components/GroupChats';
import PrivateChats from '../../components/PrivateChats';
import Settings from '../../components/Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SidebarContainer,NameUser,LinkItem } from './DashboardElements';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: 'blue'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
}));

function Page(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = ModelUser.getUser();
  const users = ModelUser.getUsers();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <SidebarContainer>
        <NameUser>{user.nickname}</NameUser>
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
      </SidebarContainer>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Router>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              // variant="temporary"
              // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
          <Switch>
            <Route exact path="/dashboard">
              {/* <GroupChats chats={ModelChat.findChatsOfUser(user.id, 'grupal')} /> */}
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
  );
}

Page.propTypes = {
  window: PropTypes.func,
};

export default Page;
