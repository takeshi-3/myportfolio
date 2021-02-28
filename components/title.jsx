import styles from './styles/title.module.scss';

export const SectionTitle = ({title}) => {
    return (
        <div className={styles.secTitle}>
            <h2 className={styles.secTitle_title}>{title}</h2>
            <div className={styles.secTitle_line}></div>
        </div>
    )
};