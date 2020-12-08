import updateDesktopData from './desktopData.js';

const reducer = (state, action) => {
    console.log(action.type);

    return {
        desktopData: updateDesktopData(state, action)
    }
}

export default reducer;