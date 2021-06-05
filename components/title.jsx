import styles from './styles/title.module.scss';

export const SectionTitle = ({title}) => {
    return (
        <div className={styles.secTitle}>
            <h2 className={styles.secTitle_title}>{title}</h2>
            <div className={styles.secTitle_line}></div>
        </div>
    )
};

export const ProcessTitle = ({children}) => {
    return (
        <h2 className={styles.processTitle}>
            <img src="../images/processIcon.svg" alt="セクションタイトルのアイコン" />
            <p className={styles.processTitle_p}>{children}</p>
        </h2>
    )
}