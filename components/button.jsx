import styles from './styles/button.module.scss';

import Link from 'next/link';

export const CloseButton = ({}) => {
    return (
        <Link href='/'><a>
            <div className={styles.closeButton}>
                <div className={styles.closeButton_cross}><img src="/images/cross.svg" alt="閉じるボタン" /></div>
                <p className={styles.closeButton_name}>CLOSE</p>
            </div>
        </a></Link>
    )
};

export const LinkButton = ({url}) => {
    return (
        <a href={url} className={styles.linkButton} target="_blank">
            Visit Website
        </a>
    );
}