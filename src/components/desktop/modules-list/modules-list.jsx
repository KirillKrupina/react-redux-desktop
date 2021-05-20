import React from 'react';
import IconsGrid from './icons-grid';
import TableMenu from './table-menu';

const containerStyles = {
    display: 'flex',
    height: '100vh'
}

const ModulesList = (props) => {
    return(
        <div style={containerStyles}>
            <TableMenu/>
            <IconsGrid/>
        </div>
    )
};

export default ModulesList;