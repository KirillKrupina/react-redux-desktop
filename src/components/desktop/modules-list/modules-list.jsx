import React from 'react';
import IconsGrid from './icons-grid';
import TaskMenu from './task-menu';

const containerStyles = {
    display: 'flex',
    height: '100vh'
}

const ModulesList = (props) => {
    console.log(props);
    return(
        <div style={containerStyles}>
            <TaskMenu/>
            <IconsGrid {... props}/>
        </div>
    )
};

export default ModulesList;