import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMoon,
    faPlus,
    faQuestion,
    faRecordVinyl,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Image from '~/components/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Search from '../Search';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessagesIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feeback and help',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark theme',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profiles',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faRecordVinyl} />,
        title: 'LIVE Studio',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_LIST,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
//handle logic
const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            //handle change language
            break;
        default:
    }
};
function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    {currentUser ? (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://kenh14cdn.com/thumb_w/660/2019/8/4/truong-hoang-mai-anh-5-15289944329201592989899-15649379784292010287411.jpg"
                                alt="Nguyen Van A"
                            />
                        </Menu>
                    ) : (
                        <Menu items={MENU_LIST} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
