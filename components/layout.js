import Header from './header.js';
import SideNav from '../components/sidenav';
import GlobalNav from '../components/globalNav';

import styles from './styles/layout.module.scss';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6FA8A9",
        },
        secondary: {
            main: "#F0A528",
        },
    }
});

export const Layout = ({left, right, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <Header title={title} />
            <motion.div 
                className={styles.normal}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                <section className={styles.leftBlk}>
                    <GlobalNav />
                    {left}
                </section>

                <section className={styles.rightBlk}>
                    {right}
                </section>
            </motion.div>
        </ThemeProvider>
    )
};