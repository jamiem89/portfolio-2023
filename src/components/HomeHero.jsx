import { useRef, useEffect } from "react";

import Grid from '../layout/Grid';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from './HomeHero.module.css';

const HomeHero = () => { 

    // Animation bits

    gsap.registerPlugin(ScrollTrigger);
    const circleRef = useRef();
    const sectionRef = useRef();

    useEffect(() => {
        const circleContainer = circleRef.current;
        const circleEls = circleContainer.querySelectorAll('span');
        const circleTl = gsap.timeline({
            scrollTrigger : {
                trigger: sectionRef.current,
                scrub: 1,
                start: 'top top',
                end: 'bottom top',
                // markers: true
            }
        });

        circleTl.to(circleEls[1], {rotate: -10, duration: .6})
        circleTl.to(circleEls[2], {rotate: -18, duration: .6}, '<')
        circleTl.to(circleEls[3], {rotate: -30, duration: .6}, '<')

      }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <Grid fullHeight={true}>
                <div className={styles.inner}>
                    <div className={styles.shapes} ref={circleRef}>
                        <span className={styles.shape}></span>
                        <span className={styles.shape}></span>
                        <span className={styles.shape}></span>
                        <span className={styles.shape}></span>
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Jamie Moore<span>.</span></h1>
                        <p className={styles.text}>Frontend Developer with 10+ years of experience</p>
                    </div>
                </div>
                
            </Grid>
        </section>
    )
}

export default HomeHero;