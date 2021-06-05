import styles from './styles/layout.module.scss';

import GlobalNav from '../components/globalNav';

import { motion } from 'framer-motion';

export const Layout = ({children, hasPadding=true}) => {
    return (
        <motion.div 
            className={hasPadding ? styles.normal : styles.fullScreen}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
            {children}
            <GlobalNav />
        </motion.div>
    )
};