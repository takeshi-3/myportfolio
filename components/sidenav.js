import styles from './styles/sidenav.module.scss';

// materials
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const SideNav = () => {
    const menuItems = ["Profile", "Works", "Contact"];

    return (
        <main className={styles.nav}>
            <section className={styles.nav_logo}>
                <h2><img src="/images/logo.jpg" alt="funachunのロゴ" /></h2>
            </section>

            <ul className={styles.nav_menu}>
                {menuItems.map(item => 
                    <li><a href={`#${item.toLowerCase()}`}>{item}</a></li>
                )}
            </ul>

            <div className={styles.nav_sns}>
                <a href=""><TwitterIcon fontSize="large" /></a>
                <a href=""><GitHubIcon fontSize="large" /></a>
            </div>
        </main>
    )
};

export default SideNav;