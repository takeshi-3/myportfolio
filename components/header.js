// React
import {useState, useEffect} from 'react';

// next components
import Link from 'next/link';
import Head from 'next/head';

// styles
import styles from './styles/header.module.scss';

// Material-UI
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

// custom components

// OGP static info
const description = "Takeshi Funatsu(Chun) | Portfolio";

const Header = ({title}) => {

    useEffect(() => {
        // adobe font
        (function(d) {
            var config = {
              kitId: 'laj4usb',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
    }, []);

    return (
        <>
            <Head>
                <title>Chun(Takeshi Funatsu) – Design Engineer</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="shortcut icon" href="/images/favicon.ico"></link>

                {/* ----- OGP ----- */}
                <meta property="og:title" content={`Takeshi Funatsu(Chun) | Portfolio`} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content={`https://offlabel.tokyo/${title.toLowerCase()}`} /> */}
                {/* <meta property="og:image" content="https://offlabel.tokyo/images/ogp.jpg" /> */}
                <meta property="og:site_name" content="Takeshi Funatsu(Chun) | Portfolio" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@bunbun_buncho3" />
            </Head>
        </>
    )
};

export default Header;