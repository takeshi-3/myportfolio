import styles from './styles/button.module.scss';

export const CloseButton = ({}) => {
    return (
        <div className={styles.closeButton}>
            <div className={styles.closeButton_cross}><img src="images/cross.svg" /></div>
            <p className={styles.closeButton_name}>CLOSE</p>
        </div>
    )
};