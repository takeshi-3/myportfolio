// react
import {useEffect, useState, useRef} from 'react';

// next components
import Link from 'next/link';
import {InViewFade, InViewRotate} from '../components/inView';

// custom components
import {Layout} from '../components/layout';
import WorkItem from '../components/workItem';

// Material UI Components
import CancelIcon from '@material-ui/icons/Cancel';

// style
import styles from '../styles/home.module.scss';

// animation
import {useSpring, animated, config, useChain, useTransition} from 'react-spring';
import {useInView} from 'react-intersection-observer';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const works = await client.getEntries({content_type: 'works'});
    return {
        props: {
            works
        }
    }
};

const Modal = ({info, onClose}) => {

    const backSpring = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    });

    const imageSpring = useSpring({
        from: {opacity: 0, transform: 'scale(0.5)'},
        to: {opacity: 1, transform: 'scale(1)'},
        config: config.stiff
    });

    return (
        <animated.div style={backSpring} className={styles.modal}>
            {/* <animated.img style={imageSpring} src={info.thumbnail} /> */}
            <div className={styles.modal_close}>
                <div onClick={onClose}><CancelIcon fontSize="large" /></div>
            </div>
        </animated.div>
    );
};

const Profile = () => {
    return (
        <main>

        </main>
    );
};

const KeyArt = () => {
    return (
        <section className={styles.keyart}>
        </section>
    )
};

const Home = ({works}) => {
    const [modal, setModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const sampleField = {
        tag: "#tag",
        thumbnail: {
            fields: {
                file: {
                    url: "/images/logo.jpg"
                }
            }
        },
        title: "Meltal.",
        date: "2020.10"
    };

    useEffect(() => {
        console.log(works);
    },[]);

    const handleShowModal = (e) => {
        setModal(true);
        // setModalInfo(e.target.children);
        console.log(e.target);
    };

    return (
        <Layout left={<Profile />} right={<KeyArt />} title="Home">
            <section className={styles.home_works} id="works">
                <h2 className={styles.home_title}>Works</h2>
                <div className={styles.home_works_cont}>
                    {works.items.map(work => 
                        <WorkItem 
                            fields={work.fields}
                            id={work.sys.id}
                            key={work.sys.id}
                            onClick={handleShowModal}
                        />
                    )}
                </div>
            </section>

            <section className={styles.home_contact} id="contact">
                <h2 className={`${styles.home_title} ${styles.home_title_contact}`}>Contact</h2>
                <div className={styles.home_contact_cont}>
                    <p className={styles.home_contact_title}>Email</p>
                    <p>g.jem.beleeem8000(at)gmail.com</p>
                    <p className={styles.home_contact_line}></p>
                    <p className={styles.home_contact_title}>Twitter</p>
                    <a href="https://twitter.com/bunbun_buncho3">@bunbun_buncho3</a>
                </div>
            </section>
            
            {modal ? <Modal info={modalInfo} onClick={(e) => setModal(false)} /> : null}
        </Layout>
    )
};

export default Home;