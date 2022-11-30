import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './AccountsPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt="img" 
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1669885200&x-signature=JdpBeRTLr5oAEg9aVHjydzCYhCg%3D" 
                />
                <Button primary small>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}> 
                    <strong>NguyenKhang112</strong>
                    <span className={cx('icon-checked')}>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                    </span> 
                </p>
                <p className={cx('name')}>Khuất Văn Khang</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>543.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
