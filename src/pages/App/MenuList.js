import React from 'react';
import {TabletOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTachometerAlt} from '@fortawesome/free-solid-svg-icons';

const MenuList = {

    title: "SC Groups Music",
    route: {
        path: '/',
        icon: <TabletOutlined/>,
        routes: [
            {
                name: 'Revenue',
                path: '/app/revenue',
                icon: <FontAwesomeIcon style={{marginRight: '1.2em'}} icon={faTachometerAlt}/>,
                // roles: ['superuser', 'pertamina', 'superadmin']
            },
            {
                name: 'Admin',
                path: '/app/admin',
                icon: <FontAwesomeIcon style={{marginRight: '1.2em'}} icon={faTachometerAlt}/>,
                // roles: ['superuser', 'pertamina', 'superadmin']
            },
        ],
    },
};

export default MenuList;
