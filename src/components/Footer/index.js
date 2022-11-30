import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
            <Button to={'/about'} className={cx('text-underline')}> About </Button>
            <Button to={'/about'} className={cx('text-underline')}> News </Button>
            <Button to={'/about'} className={cx('text-underline')}> Contact </Button>
            <Button to={'/about'} className={cx('text-underline')}> Career </Button>
            <Button to={'/about'} className={cx('text-underline')}> ByDance </Button>
            </div>
        
            <div className={cx('service')}>
                <Button to={'/about'} className={cx('text-underline')}> Tiktok For Good </Button>
                <Button to={'/about'} className={cx('text-underline')}> Advertise </Button>
                <Button to={'/about'} className={cx('text-underline')}> Developer </Button>
                <Button to={'/about'} className={cx('text-underline')}> Transparency </Button>
                <Button to={'/about'} className={cx('text-underline')}> Tiktok Rewards </Button>
                <Button to={'/about'} className={cx('text-underline')}> Tiktok Browser </Button>
            </div>
        </div>
    );
}

export default Footer;
