import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import React from 'react';
import config from '~/config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../Icons';
import SuggestedAccounts from '../SuggestedAccounts';
import * as userService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const PER_PAGE = 5;
// difien constant nên viết hoa hết lên

const Sidebar = () => {
    // const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((prevUsers) => [...prevUsers, ...data]);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Folowing"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
                <SuggestedAccounts label="Folowing" />
            </Menu>
        </aside>
    );
};

export default Sidebar;
