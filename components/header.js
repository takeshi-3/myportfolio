// React
import { useState, useEffect } from 'react';

// next components
import Link from 'next/link';
import Head from 'next/head';

// styles
import styles from './styles/header.module.scss';

const Header = ({ title, description, image, type, url }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="shortcut icon" href="/images/favicon.ico"></link>

            {/* ----- OGP ----- */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@bunbun_buncho3" />
        </Head>
    )
};

export default Header;