// react
import { useEffect, useState, useRef } from 'react';

// next components
import Link from 'next/link';
import { InViewFade, InViewRotate } from '../components/inView';

// custom components
import Header from '../components/header.js';
import { Layout } from '../components/layout';
import WorkItem from '../components/workItem';
import { SectionTitle } from '../components/title';
import { CloseButton } from '../components/button';

// style
import styles from '../styles/home.module.scss';

// animation
import { useSpring, animated, config, useChain, useTransition } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const works = await client.getEntries({ content_type: 'works', order: '-fields.date' });
    const gallery = await client.getEntries({ content_type: 'gallery' });
    return {
        props: {
            works,
            gallery
        }
    }
};

const Home = ({ works, gallery }) => {
    const metaInfo = {
        title: "デザイナーのfunachunです。 | funachun.me",
        description: "デザイナーfunachunのポートフォリオサイトです。WEBデザイン、ブランディング、UIUXデザインから開発までお任せください。",
        image: "/images/ogp.jpg",
        type: "website",
        url: "https://funachun.me"
    };


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
    }, []);

    return (
        <Layout title="Home">
            <Header title={metaInfo.title} description={metaInfo.description} image={metaInfo.image} type={metaInfo.type} url={metaInfo.url} />
            <div className={styles.home}>
                <section className={styles.home_profile}>
                    <h1 className={styles.home_profile_me}>funachun <span>– designer</span></h1>
                    <p className={styles.home_profile_desc}>
                        はじめまして。デザイナーのfunachunと申します。<br />
                        UIUXデザインやグラフィックデザインを通して<br />
                        世の中をちょっぴりカッコよくしています。<br /><br />
                        「伝えるべき本質をありのまま引き出す」<br />
                        精巧で透明な「窓」を作ることを、デザインにおいて大事にしています。
                    </p>
                    <div className={styles.home_profile_skill}>
                        <h2>Skills</h2>
                        <p>UIUX / WEB / Graphic / Branding</p>
                        <p>Frontend Development (React.js, Three.js)</p>
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
                            <p className={styles.home_contact_item}>g.jem.beleeem8000(at)gmail.com</p>
                            <p className={styles.home_contact_line}></p>
                            <p className={styles.home_contact_title}>Twitter</p>
                            <a className={styles.home_contact_item} href="https://twitter.com/bunbun_buncho3">@bunbun_buncho3</a>
                        </div>
                        <div className={styles.home_contact_thumb}>
                            <img src="images/me.jpg" alt="funachunの写真" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
};

export default Home;