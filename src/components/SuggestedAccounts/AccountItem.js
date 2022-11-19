import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div>
            <Tippy
                interactive // Chọn được phần tử
                // visible
                delay={[800, 0]}
                offset={[0, 0]} // Cho bố cục lệch sáng trái (chiều ngang, chiều cao)
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <AccountPreview data={data} />
                        </PopperWrapper>
                    </div>
                )}
                // onHide={() => setHistory((prev) => prev.slice(0, 1))} //Hết hover là reset về đầu
            >
                <Link to="" className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('username')}>
                            {data.fist_name} {data.last_name}
                        </span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
