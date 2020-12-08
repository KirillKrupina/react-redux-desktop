const updateDesktopData = (state, action) => {

    if (state === undefined) {
        return {
            user: [],
            modules: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_DESKTOP_DATA_REQUEST':
            return {
                user: [],
                modules: [],
                loading: true,
                error: null
            };
        case 'FETCH_DESKTOP_DATA_SUCCESS':
            return {
                user: action.payload.user,
                modules: action.payload.modules, 
                loading: false,
                error: null
            };
        case 'FETCH_DESKTOP_DATA_FAILURE':
            return {
                user: [],
                modules: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.desktopData
    }
}

export default updateDesktopData;