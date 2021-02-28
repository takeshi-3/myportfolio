import styles from './styles/workItem.module.scss';

import Link from 'next/link';

import { animated } from 'react-spring';

const WorkItem = ({fields, id, animProps, onClick}) => {
    return (
        <animated.div className={styles.work} style={{...animProps}} onClick={(e) => onClick(e)}>
            <div className={styles.work_thumb}><img src={fields.thumbnail.fields.file.url} /></div>
            <h3 className={styles.work_title}>{fields.title}</h3>
            <p className={styles.work_skills}>
            {fields.skills.map(skill => 
                <span className={styles.work_skill}>{skill}<span>|</span></span>
            )}</p>
        </animated.div>
    );
};

export default WorkItem;