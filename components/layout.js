import Header from './header.js';
import GlobalNav from '../components/globalNav';

import styles from './styles/layout.module.scss';

import { motion } from 'framer-motion';

export const Layout = ({children, title}) => {
    return (
        <motion.div 
            className={styles.normal}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            <Header title={title} />
            <GlobalNav />
            {children}
        </motion.div>
    )
};