import {useInView} from 'react-intersection-observer';
import {useSpring, animated, config, useChain} from 'react-spring';

export const InViewFade = ({children}) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const props = useSpring({
        to: {opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(30px)'},
        config: config.slow
    });

    return (
        <animated.div style={props} ref={ref}>
            {children}
        </animated.div>
    )
};

export const InViewRotate = ({children}) => {
    const [ref, inView] = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const props = useSpring({
        to: {opacity: inView ? 1 : 0, transform: inView ? 'rotateX(0px)' : 'rotateX(180deg)'},
        config: config.default
    });

    return (
        <animated.div style={props} ref={ref}>
            {children}
        </animated.div>
    );
};