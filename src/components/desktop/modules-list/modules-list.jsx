import React from 'react';
import IconsGrid from './icons-grid';
import TableMenu from './table-menu';
import TaskMenu from './task-menu';

const containerStyles = {
    display: 'flex',
    height: '100vh'
}

const ModulesList = (props) => {
    return(
        <div style={containerStyles}>
            {/* <TableMenu/> */}
            <TaskMenu/>
            <IconsGrid {... props}/>
        </div>
    )
};

export default ModulesList;