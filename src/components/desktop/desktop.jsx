import React, {useEffect} from 'react';

import Header from './header';
import DesktopIconsServiceContext from '../../contexts/desktop-icons-service-context/desktop-icons-service-context'
import ModulesList from './modules-list/modules-list';
import { fetchDesktopData, clickHeaderMenuButton } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



const Desktop = (props) => {
    const {user, onHeaderMenuButtonClicked} = props;

    useEffect(() => {
        console.log(props);
        props.fetchDesktopData()
    }, []);


    return (
        <>
            <Header user={user} onHeaderMenuButtonClicked={onHeaderMenuButtonClicked}/>
            <ModulesList />
        </>
    )
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.desktopData.user,
        modules: state.desktopData.modules,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const desktopService = ownProps.desktopService;
    return bindActionCreators({
        fetchDesktopData: fetchDesktopData(desktopService),
        onHeaderMenuButtonClicked: clickHeaderMenuButton
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);