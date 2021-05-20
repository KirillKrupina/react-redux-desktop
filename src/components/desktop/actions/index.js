const desktopDataRequested = () => {
    return {
        type: 'FETCH_DESKTOP_DATA_REQUEST'
    }
};


const desktopDataLoaded = (data) => {
    return {
        type: 'FETCH_DESKTOP_DATA_SUCCESS',
        payload: data
    }
};

const desktopDataError = (error) => {
    return {
        type: 'FETCH_DESKTOP_DATA_FAILURE',
        payload: error
    }
}

const updateTableMenuItems = (data) => {
    return {
        type: 'UPDATE_TABLE_MENU_ITEMS',
        payload: data
    }
}

const clickHeaderMenuButton = () => {
    return {
        type: 'CLICK_HEADER_MENU_BUTTON'
    }
}

const fetchDesktopData = (desktopService) => () => {
    return (dispatch) => {
        dispatch(desktopDataRequested());
        desktopService.getData()
            .then((data) => {
                console.log(data);
                dispatch(desktopDataLoaded(data))
            })
            .catch(err => dispatch(desktopDataError(err)));
    }
}

export {
    fetchDesktopData,
    updateTableMenuItems,
    clickHeaderMenuButton
}