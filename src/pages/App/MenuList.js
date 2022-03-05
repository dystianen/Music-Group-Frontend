import React from 'react';
import {TabletOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, faTachometerAlt} from '@fortawesome/free-solid-svg-icons';

const MenuList = {

    title: "SC Music Group",
    route: {
        path: '/',
        icon: <TabletOutlined/>,
        routes: [
            {
                name: 'Submit Music',
                path: 'https://forms.gle/Lo7tW7MWtat74kjU9',
                icon: <FontAwesomeIcon style={{marginRight: '1.2em'}} icon={faMusic} />,
            },
            {
                name: 'Admin',
                path: '/app/admin',
                icon: <FontAwesomeIcon style={{marginRight: '1.2em'}} icon={faTachometerAlt}/>,
            },
        ],
    },
};

export default MenuList;
