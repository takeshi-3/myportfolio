// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';

// custom components
import Header from '../../components/header.js';
import {Layout} from '../../components/layout';
import {CloseButton, LinkButton} from '../../components/button';
import {ProcessTitle} from '../../components/title';

// styles
import styles from '../../styles/works.module.scss';

// contentful text format
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { Close } from '@material-ui/icons';
// import { RoundButton } from '../../components/buttons';


/* ---------------------------------------------------------------------------------------------------------------------------
    Doc : https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
--------------------------------------------------------------------------------------------------------------------------- */
const documentOption = {
    renderNode: {
        // [BLOCKS.PARAGRAPH]: (node, children) => <section className={styles.body_sec}>{children}</section>,
        [BLOCKS.HEADING_1]: (node, children) => <ProcessTitle>{children}</ProcessTitle>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => <div className={styles.body_imgWrapper}><img src={node.data.target.fields.file.url} alt="デザイン工程のイメージ画像" /></div>,
    },
    renderMark: {
        [MARKS.BOLD]: text => <span className={styles.body_bold}>{text}</span>
    }
};

// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

// Dynamic Routes
export const getStaticPaths = async () => {
    const allWorks = await client.getEntries({content_type: 'works'});
    const allPath = allWorks.items.map(work => {
        return {
            params: {
                id: work.sys.id
            }
        }
    });

    return {
        paths: allPath,
        fallback: false
    }
};

export const getStaticProps = async ({params}) => {
    const work = await client.getEntries({content_type: 'works', 'sys.id': params.id});
    return {
        props: {
            work
        }
    }
};

const SingleWork = ({work}) => {
    const theWork = work.items[0];

    const metaInfo = {
        title: `Work – ${theWork.fields.title} | funachun.me`,
        description: "デザイナーfunachunのポートフォリオサイトです。WEBデザイン、ブランディング、UIUXデザインから開発までお任せください。",
        image: theWork.fields.thumbnail.fields.file.url,
        type: "article",
        url: `https://funachun.me/works/${theWork.sys.id}`
    };

    useEffect(() => {
        console.log(work);
    }, []);
    return (
        <Layout hasPadding={false}>
            <Header title={metaInfo.title} description={metaInfo.description} image={metaInfo.image} type={metaInfo.type} url={metaInfo.url} />
            <div className={styles.thumbnail}><img src={theWork.fields.thumbnail.fields.file.url} alt="案件紹介のサムネイル" /></div>

            <section className={styles.info}>
                <h1 className={styles.info_title}>{theWork.fields.title}</h1>

                {theWork.fields.category !== undefined ?
                    <p className={styles.info_tags}>
                        Role<br />
                        {theWork.fields.category.map(cat => 
                            <span>{cat}<span className={styles.info_line}>/</span></span>
                        )}
                    </p>
                :null}

                {theWork.fields.skills !== undefined ?
                    <p className={`${styles.info_tags} ${styles.info_skills}`}>
                        Skill<br />
                        {theWork.fields.skills.map(skill => 
                            <span>{skill}<span className={styles.info_line}>/</span></span>
                        )}
                    </p>
                :null}

                <p className={styles.info_description}>
                    {theWork.fields.description}
                </p>

                {theWork.fields.url !== undefined ? 
                    <div>
                        <LinkButton url={theWork.fields.url} />
                    </div> 
                : null}
            </section>

            <section className={styles.body}>
                {documentToReactComponents(theWork.fields.body, documentOption)}
                {/* <h1 className={styles.body_title}>Concept</h1>
                <div className={styles.body_imgWrapper}>
                    <img src="images/keyArt.png" />
                </div>
                <p>
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                </p>

                <h1 className={styles.body_title}>Concept</h1>
                <div className={styles.body_imgWrapper}>
                    <img src="images/keyArt.png" />
                </div>
                <p>
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                    ここに説明のテキストが入ります。ここに説明のテキストが入ります。ここに説明のテキストが入ります。
                </p> */}
            </section>
        </Layout>
    )
};

export default SingleWork;