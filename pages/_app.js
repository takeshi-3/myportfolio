import '../styles/styles.scss'

// framer-motion
import {AnimatePresence} from 'framer-motion';

// adobe font
import adobeLoader from "../lib/adobeLoader";
import { useEffect } from 'react';
import {useRouter} from "next/router";
import * as gtag from '../lib/analytics';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps}) => {
    const router = useRouter();

    useEffect(() => {
        // adobe font
        if (process.browser) adobeLoader(document);
    }, []);

    useEffect(() => {
        // GA
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        }
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events])
    
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
    );
};

export default MyApp;