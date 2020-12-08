import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        modules: state.desktopData.modules,
        loading: state.loading,
        error: state.error
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     const desktopService = ownProps.context;
//     return bindActionCreators({
//         fetchIcons: fetchIcons(desktopService)
//     }, dispatch)
// }

export default connect(mapStateToProps)(IconsGrid);
