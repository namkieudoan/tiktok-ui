import classNames from "classnames/bind";
import styles from "./Modal.module.scss"

const cx= classNames.bind(styles);
function Wrapper({children}) {
    return (
        <div className={cx('wrapper')} >
            <div className={cx('overlay')}></div>
            {children}
        </div>
    );
}

export default Wrapper;