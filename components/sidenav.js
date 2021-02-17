import styles from './styles/sidenav.module.scss';

// materials
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const SideNav = () => {
    const menuItems = ["Profile", "Works", "Contact"];

    return (
        <main className={styles.nav}>
            <section className={styles.nav_logo}>
                <img src="/images/logo.jpg" />
            </section>

            <section className={styles.nav_menu}>
                {menuItems.map(item => 
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                )}
            </section>

            <section className={styles.nav_sns}>
                <a href=""><TwitterIcon fontSize="large" /></a>
                <a href=""><GitHubIcon fontSize="large" /></a>
            </section>
        </main>
    )
};

export default SideNav;