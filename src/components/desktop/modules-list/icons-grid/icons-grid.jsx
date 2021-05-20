import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


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

const IconsGrid = (props) => {
    const classes = useStyles();

    if (!props.modules) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Grid container className={classes.grid} direction="row" justify="flex-start" spacing={3}>
                    {props.modules.map(module => {
                        if (module.launcher.shortcut) {
                            return (
                                <Grid key={module.id} item xs={6} md={4} lg={2} className={classes.gridItem}>
                                    <Paper className={classes.paper} onClick={() => {
                                        switch (module.url) {
                                            case '':
                                                break;
                                            default:
                                                break;
                                        }
                                    }}>
                                        <Link to={module.url}>{module.launcher.text}</Link>
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

const mapStateToProps = (state) => {
    return {
        modules: state.desktopData.modules,
        loading: state.desktopData.loading,
        error: state.desktopData.error
    }
}

export default connect(mapStateToProps)(IconsGrid);
