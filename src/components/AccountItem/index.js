import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van a</span>
                    <FontAwesomeIcon></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;
