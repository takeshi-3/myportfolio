// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';

// custom components
import {Layout} from '../../components/layout';
import {CloseButton} from '../../components/button';

// styles
import styles from '../../styles/works.module.scss';

// contentful text format
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { Close } from '@material-ui/icons';
// import { RoundButton } from '../../components/buttons';

// const documentOption = {
//     renderNode: {
//         // [BLOCKS.HEADING_1]: (node, children) => <BlogSecTitle>{children}</BlogSecTitle>,
//         // [BLOCKS.QUOTE]: (node, children) => <BlogKeySentence>{children}</BlogKeySentence>,
//         // [BLOCKS.EMBEDDED_ASSET]: (node) => <img src={node.data.target.fields.file.url} />
//     }
// };

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
    useEffect(() => {
        console.log(work);
    }, []);
    return (
        <Layout title="Work" hasPadding={false}>
            <div className={styles.thumbnail}><img src={theWork.fields.thumbnail.fields.file.url} /></div>

            <section className={styles.info}>
                <h1 className={styles.info_title}>{theWork.fields.title}</h1>
                <p className={styles.info_skill}>
                {theWork.fields.skills.map(skill => 
                    <span>{skill}<span className={styles.info_skill_line}>|</span></span>
                )}
                </p>

                <p className={styles.info_description}>
                    {theWork.fields.description}
                </p>
            </section>

            <section className={styles.body}>

            </section>

            <section className={styles.close}>
                <CloseButton />
            </section>
        </Layout>
    )
};

export default SingleWork;