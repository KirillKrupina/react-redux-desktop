import React, { useEffect, useState } from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    button: {
        marginLeft: 5
    }
}));

const Header = ({ user, onHeaderMenuButtonClicked }) => {
    const classes = useStyles();

    if (!user) {
        return (
            <div>
                Loading...
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <AppBar position='sticky'>
                    <Toolbar>
                        <IconButton edge='start' aria-label="menu" className={classes.menuButton} color="inherit" onClick={onHeaderMenuButtonClicked}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            {user.name}
                        </Typography>
                        <Button className={classes.button} color="inherit">Налаштування</Button>
                        <Button className={classes.button} color="inherit">Exit</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;