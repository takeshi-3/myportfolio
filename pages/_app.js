import '../styles/styles.scss'

// framer-motion
import {AnimatePresence} from 'framer-motion';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router}) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
    );
}