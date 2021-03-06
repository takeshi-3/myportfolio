import styles from './styles/globalNav.module.scss';

import Link from 'next/link';

const GlobalNav = () => {
    const navMenus = [
        {name: 'Works', link: 'works'},
        {name: 'Contact', link: 'contact'},
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_wrapper}>
                <div className={styles.nav_title}>
                    <Link href="/"><a><h1 className={styles.nav_title_str}>chun.me</h1></a></Link>
                </div>

                <ul className={styles.nav_menu}>
                    {navMenus.map(item =>
                        <li key={item.name}><Link href={`/#${item.link}`}><a>
                            {item.name}
                        </a></Link></li>
                    )}
                </ul>
            </div>
        </nav>
    )
};

export default GlobalNav;