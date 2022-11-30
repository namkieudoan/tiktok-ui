import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Discover</p>
                <Button rounded small leftIcon={<FontAwesomeIcon icon={faHashtag} />}> Tet2023 </Button>
                <Button rounded small leftIcon={<FontAwesomeIcon icon={faHashtag} />}> Sansangthaydoi </Button>
                <Button rounded small leftIcon={<FontAwesomeIcon icon={faHashtag} />}> Cuochencuoituan </Button>
                <Button rounded small leftIcon={<FontAwesomeIcon icon={faHashtag} />}> Genzlife </Button>
                <Button rounded small leftIcon={<FontAwesomeIcon icon={faHashtag} />}> Tet2023 </Button>
        </div>
    );
}

export default Discover;
