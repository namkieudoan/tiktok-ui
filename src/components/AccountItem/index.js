import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '~/components/images';
import { CheckedIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    <span className={cx('check-icon')}>{data.tick && <CheckedIcon />}</span>
                </h4>
                <p className={cx('username')}>{data.nickname} </p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
