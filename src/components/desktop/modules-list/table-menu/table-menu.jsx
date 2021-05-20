import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { updateTableMenuItems } from '../../actions'
import { bindActionCreators } from 'redux';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#3F51B5',
    },
    text: {
        color: 'white'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const TableMenu = (props) => {
    let history = useHistory();
    const classes = useStyles();


    let container = [];

    const redirect = (url) => {
        history.push(url)
    }

    const createMenuItems = () => {
        let items = [];
        let currentNodePath = props.menuMap.currentNodePath;

        if (currentNodePath.length < 1) {
            items = props.menuMap.items;
        } else {
            items = currentNodePath[currentNodePath.length - 1].items;
        }
        if (currentNodePath.slice().length < 1) {
            container.push('')
        } else {
            container.push(
                <ListItem key='backArrow' button onClick={() => {
                    let newPath = currentNodePath.slice();
                    newPath.pop();
                    props.onUpdateTableMenuItems(newPath);
                }}>
                    <ListItemIcon>
                        <ArrowBackIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                </ListItem>
            );
        }

        if (items === undefined) {
            let url;
            let currentNode = currentNodePath.pop()
            url = currentNode.url;
            redirect(url);
        } else {
            items.map(element => {
                container.push(
                    <>
                        <ListItem key={element.name} button onClick={() => {
                            let newPath = currentNodePath.slice();
                            newPath.push(element);
                            props.onUpdateTableMenuItems(newPath);
                        }}>
                            <ListItemText primary={element.name} className={classes.text} />
                        </ListItem>
                    </>
                );
            })
        }
        return container;
    };

    if (!props.menuMap) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (props.menuMap.isVisible) {
        console.log(props.menuMap)
        return (
            <>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    {createMenuItems()}
                </List>
            </>
        )
    } else {
        return <></>
    }
};

const mapStateToProps = (state) => {
    return {
        menuMap: state.desktopData.menuMap,
        loading: state.desktopData.loading,
        error: state.desktopData.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        onUpdateTableMenuItems: updateTableMenuItems
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableMenu);

