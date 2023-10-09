import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './Splash.module.css';

const Splash = ({setSplashEnd}) => {

    const bgRef = useRef();
    const circlesRef = useRef();
    const titleOneRef = useRef();
    const titleTwoRef = useRef();

    useEffect(() => {
        
        // Intro circle animations
        const circleContainer = circlesRef.current;
        const circles = circleContainer.childNodes;
        const containerTl = gsap.timeline();
        const circleTl = gsap.timeline({repeat: -1, yoyo: true, ease: 'power4.inOut', paused: true});

        gsap.set(circleContainer, {scale: 0});

        containerTl.to(circleContainer, {scale: 1, duration: 1.5, ease: 'power4.inOut'});
        containerTl.add(() => {
            circleTl.play();
            titleOneTl.play();
        }, '-=.5')

        circleTl.to(circles, {scale: .75, stagger: .1, duration: .7})

        // Title one anim

        const titleOne = titleOneRef.current;
        const titleOneEls = titleOne.childNodes;
        const titleOneWords = [];

        titleOneEls.forEach(el => {
            titleOneWords.push(el.firstElementChild);
        })

        const titleOneTl = gsap.timeline({paused: true, defaults: {duration: .4, ease: 'power.inOut'}});
        gsap.set(titleOneWords, { yPercent: 110 });

        titleOneTl.to(titleOneWords, { yPercent: 0, stagger: .1})
        titleOneTl.add(() => {
            titleTwoTl.play();
        }, '+=1.3')
        titleOneTl.to(titleOneWords, { yPercent: -110, stagger: .1},)

        // Title two anim

        const titleTwo = titleTwoRef.current;
        const titleTwoEls = titleTwo.childNodes;
        const titleTwoWords = [];

        titleTwoEls.forEach(el => {
            titleTwoWords.push(el.firstElementChild);
        })

        const titleTwoTl = gsap.timeline({paused: true, defaults: {duration: .4, ease: 'power.inOut'}});
        gsap.set(titleTwoWords, { yPercent: 110 });

        titleTwoTl.to(titleTwoWords, { yPercent: 0, stagger: .1})
        titleTwoTl.to(titleTwoWords, { yPercent: -110, stagger: .1}, '+=1.3'),
        titleTwoTl.add(() => {
            containerTl.reverse();
        }, '-=.5')
        titleTwoTl.add(() => {
            fadeOutTl.play();
        }, '+=.5')

        // Fade out 

        const section = bgRef.current;
        const fadeOutTl = gsap.timeline({paused: true});

        fadeOutTl.to(section, {opacity: 0, duration: .5})
        fadeOutTl.add(() => {
            setSplashEnd(true);
        })

    }, [])

    return(
        <section className={styles.bg} ref={bgRef}>
            <h1 className={styles.title} ref={titleOneRef}>
                <span className={styles.wordContainer}><span className={styles.word}>The </span></span>
                <span className={styles.wordContainer}><span className={styles.word}>web </span></span>
                <span className={styles.wordContainer}><span className={styles.word}>is </span></span>
                <span className={styles.wordContainer}><span className={`${styles.word} ${styles.alt}`}>complicated</span></span>
                <span className={styles.wordContainer}><span className={styles.word}>.</span></span>
            </h1>

            <h1 className={styles.title} ref={titleTwoRef}>
                <span className={styles.wordContainer}><span className={styles.word}>Let's </span></span>
                <span className={styles.wordContainer}><span className={styles.word}>keep </span></span>
                <span className={styles.wordContainer}><span className={styles.word}>it </span></span>
                <span className={styles.wordContainer}><span className={`${styles.word} ${styles.alt}`}>simple</span></span>
                <span className={styles.wordContainer}><span className={styles.word}>.</span></span>
            </h1>
            
            <div className={styles.circles} >
                <div className={styles.circlesContainer} ref={circlesRef}>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                </div>
            </div>
        </section>
    )
} 

export default Splash;