import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/e/9/d/1e9d27c6e9a058c655eabfbd85e83936.jpg" 
                alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Tieu Vy
                    <span className={cx('check-icon')}> &#10003; </span>
                </h4>
                <p className={cx('username')}>nguyentieuvy</p>
            </div>
        </div>
    );
}

export default AccountItem;