import React, { useContext, useEffect, useState } from 'react';

import Header from './header';
import DesktopIconsServiceContext from '../../contexts/desktop-icons-service-context/desktop-icons-service-context'
import ModulesList from './modules-list/modules-list';

const Desktop = () => {
    const [data, setData] = useState({
        data: []
    });

    /**
     * @type DesktopService
     */
    const value = useContext(DesktopIconsServiceContext);


    useEffect(() => {
        value.getData()
            .then(data => {
                setData(data)
            })
            .catch(e => console.log(e))
    }, []);


    return (
        <>
            <Header user={data.user} />
            <ModulesList modules={data.modules}/>
        </>
    )
};

export default Desktop;