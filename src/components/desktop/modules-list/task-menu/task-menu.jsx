import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

const drawerWidth = 75;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        backgroundColor: '#3F51B5',
        maxHeight: '100%',
        color: 'white',
        paddingLeft: 8
    },
    drawerIcon: {
        color: 'white'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

const TaskMenu = () => {
    const classes = useStyles();

    return (
        <div
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon className={classes.drawerIcon}/> : <MailIcon className={classes.drawerIcon}/>}</ListItemIcon>
                            {/* <ListItemText primary={text} /> */}
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default TaskMenu;