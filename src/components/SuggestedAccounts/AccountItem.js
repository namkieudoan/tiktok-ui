import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountsPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        //using tag div
        <div>
            <Tippy interactive placement="bottom" offset={[-15, 0]} delay={[900, 400]} render={renderPreview}>
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
            </Tippy>
        </div>
    );
}
export default AccountItem;
