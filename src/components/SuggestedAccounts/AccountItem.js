import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div>
            <Tippy
                interactive // Chọn được phần tử
                // visible
                delay={[800, 0]}
                offset={[0, 0]} // Cho bố cục lệch sáng trái (chiều ngang, chiều cao)
                placement="bottom-start"
                // hideOnClick={hideOnClick}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
                // onHide={() => setHistory((prev) => prev.slice(0, 1))} //Hết hover là reset về đầu
            >
                <Link to="" className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668531600&x-signature=RDlz9l5%2Bm1M3PURxmJ7fFe59GGA%3D"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <strong>famxuanlinh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('username')}>Pham Xuan Linh</span>
                    </div>
                </Link>
            </Tippy>
        </div>

        //     <Link to={`/@${data.nickname}`} className={cx('account-item ')}>
        //     <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        //     <div className={cx('info')}>
        //         <h4 className={cx('name')}>
        //             <span>{data.full_name}</span>
        //             {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        //         </h4>
        //         <span className={cx('username')}>{data.nickname}</span>
        //     </div>
        // </Link>
    );
}

export default AccountItem;
