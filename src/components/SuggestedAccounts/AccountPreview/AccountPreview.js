import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{`${data.first_name} ${data.last_name}`}</span>
            </div>
            <div className={cx('footer')}>
                <span style={{ marginRight: '10px' }}>
                    <strong>{data.followers_count}M </strong>Follower
                </span>
                <span>
                    <strong>{data.likes_count + 1}M </strong>Like
                </span>
            </div>
        </>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
