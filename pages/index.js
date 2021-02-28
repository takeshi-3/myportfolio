// react
import {useEffect, useState, useRef} from 'react';

// next components
import Link from 'next/link';
import {InViewFade, InViewRotate} from '../components/inView';

// custom components
import {Layout} from '../components/layout';
import WorkItem from '../components/workItem';
import {SectionTitle} from '../components/title';
import {CloseButton} from '../components/button';

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
    const gallery = await client.getEntries({content_type: 'gallery'});
    return {
        props: {
            works,
            gallery
        }
    }
};

const Home = ({works, gallery}) => {

    const worksRef = useRef(null);
    const galleryRef = useRef(null);
    const contactRef = useRef(null);

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

    return (
        <Layout title="Home">
            <div className={styles.home}>
                <section className={styles.home_profile}>
                    <div className={styles.home_profile_name}>
                        <div>
                            <p>Takeshi Funatsu (Chun)</p>
                            <p>Designer | Engineer</p>
                        </div>
                    </div>

                    <div className={styles.home_profile_keyart}>
                        <img src="images/keyArt.png" />
                    </div>
                </section>

                <section className={styles.home_works} id="works" ref={worksRef}>
                    <SectionTitle title="WORKS" />
                    <div className={styles.home_works_cont}>
                        {works.items.map(work => 
                            <WorkItem 
                                fields={work.fields}
                                id={work.sys.id}
                                key={work.sys.id}
                                // onClick={handleShowModal}
                            />
                        )}
                    </div>
                </section>
{/* 
                <section className={styles.home_gallery} id="gallery" ref={galleryRef}>
                    <SectionTitle title="GALLERY" />
                    <div className={styles.home_gallery_cont}>
                        {gallery.items.map(item => 
                            <div className={styles.home_gallery_item}><img src={item.fields.image.fields.file.url} /></div>   
                        )}
                    </div>
                </section> */}
                
                <section className={styles.home_contact} id="contact" ref={contactRef}>
                    <SectionTitle title="CONTACT" />
                    <div className={styles.home_contact_wrapper}>
                        <div className={styles.home_contact_cont}>
                            <p className={styles.home_contact_title}>Email</p>
                            <p>g.jem.beleeem8000(at)gmail.com</p>
                            <p className={styles.home_contact_line}></p>
                            <p className={styles.home_contact_title}>Twitter</p>
                            <a href="https://twitter.com/bunbun_buncho3">@bunbun_buncho3</a>
                        </div>
                        <div className={styles.home_contact_thumb}>
                            <img src="images/me.jpg" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
};

export default Home;