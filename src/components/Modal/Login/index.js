import { faMultiply, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function LoginModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <FontAwesomeIcon icon={faMultiply} />
            </div>
            <div className={cx('body')}>
                <div className={cx('container')}>
                    <p className={cx('title')}>Log in to TikTok</p>
                    <Button text leftIcon={<FontAwesomeIcon icon={faQrcode}/>}>
                        Use Qrcode
                    </Button>
                    <Button text leftIcon={<FontAwesomeIcon icon={faQrcode}/>}>
                        Use Qrcode
                    </Button>
                    <Button text leftIcon={<FontAwesomeIcon icon={faQrcode}/>}>
                        Use Qrcode
                    </Button>
                </div>
            </div>
            <div className={cx('footer')}>
                <span>Dont have account</span>
                <span className={cx('btn-reg')}>Sign up</span>
            </div>
        </div>
    );
}

export default LoginModal;
