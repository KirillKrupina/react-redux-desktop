import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    grid: {
        maxWidth: '100%',
        padding: 5
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100
    },
}));

const IconsGrid = ({modules}) => {
    const classes = useStyles();

    if (!modules) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Grid container className={classes.grid} direction="row" justify="flex-start" spacing={3}>
                    {modules.map(module => {
                        if (module.launcher.shortcut) {
                            return (
                                <Grid item xs={6} md={4} lg={2} className={classes.gridItem}>
                                    <Paper className={classes.paper}>
                                        {module.launcher.text}
                                    </Paper>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </div>
        )
    }


}

export default IconsGrid;
