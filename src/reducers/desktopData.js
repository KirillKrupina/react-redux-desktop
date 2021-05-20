const updateDesktopData = (state, action) => {

    if (state === undefined) {
        return {
            user: [],
            modules: [],
            taskMenu: [],
            menuMap: {
                isVisible: false,
                items: [],
                currentNodePath: []
            },
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_DESKTOP_DATA_REQUEST':
            return {
                user: [],
                modules: [],
                taskMenu: [],
                menuMap: {
                    isVisible: false,
                    items: [],
                    currentNodePath: [],
                },
                loading: true,
                error: null
            };
        case 'FETCH_DESKTOP_DATA_SUCCESS':
            return {
                user: action.payload.user,
                modules: action.payload.modules,
                taskMenu: action.payload.taskMenu,
                menuMap: {
                    isVisible: false,
                    items: rebuildJson(createMenuMap(action.payload.modules), '', []),
                    currentNodePath: []
                },
                loading: false,
                error: null
            };
        case 'FETCH_DESKTOP_DATA_FAILURE':
            return {
                user: [],
                modules: [],
                taskMenu: [],
                menuMap: {
                    isVisible: false,
                    items: [],
                    currentNodePath: []
                },
                loading: false,
                error: action.payload   
            };

        case 'UPDATE_TABLE_MENU_ITEMS':
        return {
            ...state.desktopData,
            menuMap: {
                ...state.desktopData.menuMap,
                currentNodePath: action.payload
            }
        };
        case 'CLICK_HEADER_MENU_BUTTON': 
        return {
            ...state.desktopData,
            menuMap: {
                ...state.desktopData.menuMap,
                isVisible: !state.desktopData.menuMap.isVisible
            }
        };

        default:
            return state.desktopData
    }
}



const createNodeByPath = (nodes, path, separator = '/') => {
    // Довідники/Адмінпрактика
    // {
    //     'Довідники' : {
    //         'Адмінпрактика' : undefined
    //     }
    // }

    let arrayPath = path.split(separator);
    let nodeRef = nodes;
    arrayPath.forEach(nodeName => {
        if (!(nodeName in nodeRef)) {
            nodeRef[nodeName] = {};
        }
        nodeRef = nodeRef[nodeName];
    });

    return nodeRef;

}

const createMenuMap = (data) => {

    let nodes = {};

    if (typeof (data) === 'object' && data.length > 0) {
        data.forEach(menuItem => {
            let currentNodePath = menuItem.launcherPaths.startmenu;
            if (currentNodePath === undefined) {
                return;
            } else {
                let nodeRef = createNodeByPath(nodes, currentNodePath);
                if (!('items' in nodeRef)) {
                    nodeRef.items = []
                }
                nodeRef.items.push({
                    originData: menuItem,
                    nodePath: currentNodePath,
                    id: menuItem.id,
                    name: menuItem.launcher.text,
                    url: menuItem.url
                })
            }
        })
    }

    return nodes;
}

const rebuildJson = (nodes, parentKey, items, data = []) => {

    let node;

    for (var key in nodes) {
        node = nodes[key]
        if (key === '') {
            continue;
        } else if (node.items) {
            if (parentKey[0] === undefined) {
                let items = {
                    name: key,
                    items: node.items
                };
                data.push(items)
            } else {
                for (var index in items) {
                    if (items[index] === parentKey) {
                        items.items.push({
                            'name': key,
                            'items': node.items
                        })
                    }
                };
            }
        } else if (!node.items) {
            let items = {};
            items = {
                'name': key,
                'items': []
            };
            rebuildJson(node, key, items, data)
        }

    }
    if (Object.entries(items).length !== 0) {
        data.push(items)
    }

    return data;
}

export default updateDesktopData;