import styles from './styles/workItem.module.scss';

import Link from 'next/link';

import { animated } from 'react-spring';

const WorkItem = ({fields, id, animProps, onClick}) => {
    return (
        <animated.div className={styles.work} style={{...animProps}}>
            <Link href={`/works/${id}`}><a>
                <div className={styles.work_thumb} style={{backgroundImage: `url(${fields.thumbnail.fields.file.url})`}}></div>
            </a></Link>
            <h3 className={styles.work_title}>{fields.title}</h3>
            <p className={styles.work_skills}>
            {fields.skills.map(skill => 
                <span className={styles.work_skill}>{skill}<span>|</span></span>
            )}</p>
        </animated.div>
    );
};

export default WorkItem;