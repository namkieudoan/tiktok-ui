import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1669885200&x-signature=JdpBeRTLr5oAEg9aVHjydzCYhCg%3D"
                alt="img"
            />
            <div className={cx('info')}>
                <p className={cx('nickname')}>
                    <strong>NguyenKhang112</strong>
                    <span className={cx('icon-checked')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </p>
                <p className={cx('name')}> Khuất Văn khang</p>
            </div>
        </div>
    );
}
export default AccountItem;
