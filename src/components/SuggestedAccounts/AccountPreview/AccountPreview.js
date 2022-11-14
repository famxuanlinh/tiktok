import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668531600&x-signature=RDlz9l5%2Bm1M3PURxmJ7fFe59GGA%3D"
                    alt=""
                />
                <div>
                    <Button primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <strong>famxuanlinh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Pham Xuan Linh</span>
            </div>
            <div className={cx('footer')}>
                <span style={{ marginRight: '10px' }}>
                    <strong>7.9M </strong>Follower
                </span>
                <span>
                    <strong>578M </strong>Like
                </span>
            </div>
        </>
    );
}
export default AccountPreview;
