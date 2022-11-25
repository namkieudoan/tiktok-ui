import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

import Image from '~/components/images';
import { CheckedIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>

            <Image
                className={cx('avatar')} 
                src="https://image-us.eva.vn/upload/1-2022/images/2022-03-24/me-2-con-tre-trung-qua-doi-duoc-hoc-sinh-trung-hoc-my-xin-so-dien-thoai-toi-tap-276326272_656781018875138_8549050144164498232_n-1648095067-724-width640height800.jpg" 
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Tieu Vy
                    <span className={cx('check-icon')}>
                        <CheckedIcon/>
                    </span>
                </h4>
                <p className={cx('username')}>nguyentieuvy</p>
            </div>
        </div>
    );
}

export default AccountItem;