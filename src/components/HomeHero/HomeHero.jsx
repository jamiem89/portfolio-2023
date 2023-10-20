import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Star from '../../shapes/Star';

import styles from './HomeHero.module.css';

const HomeHero = () => {

    gsap.registerPlugin(ScrollTrigger) 

    const container = useRef();
    const animContent = useRef();
    const topShape = useRef();
    const bottomShape = useRef();
    const iconContainer = useRef();
    const title = useRef();
    const text = useRef();

    const face = useRef();
    const egg = useRef();
    

    useEffect(() => {

        // Background shapes

        const bgShapesTl = gsap.timeline({ defaults: {
            scrollTrigger: {
                scrollTrigger: container,
                // markers: true,
                scrub: 1.8
            }
        }})

        bgShapesTl.to(topShape.current, {
            rotation:180,
          })
        bgShapesTl.to(bottomShape.current, {
            rotation: 80,
          }, '<')

        //   Timeline to move emoji > switch text > change emoji
        const introTl = gsap.timeline({
            scrollTrigger: {
                scrollTrigger: container,
                markers: true,
                start: '33% center',
                // scrub: 1
                // toggleActions: 'play play reverse reverse'
            }
        })

        introTl.to(iconContainer.current, {
            right: '50%',
            top: '-220%',
            duration: .7,
            ease: 'power4.inOut',
        })
        introTl.to(animContent.current, {
            top: '50px',
            duration: .3
        }, '-=.4')

        introTl.add(() => {
            title.current.innerText = 'I look like this'
        })

        introTl.add(() => {
            text.current.innerText = '(but without the hair...)'
        }, '+=.8')

        introTl.to(face.current, {yPercent: -100, duration: .45, ease: 'Power4.inOut'}, '+=.8')
        introTl.to(egg.current, {yPercent: -100, duration: .45, ease: 'Power4.inOut'}, '<')

        

    }, [])

    return(
        <section className={styles.section} ref={container}>
            <div className={styles.panel} ref={animContent}>
                <h1 className={styles.title}>
                    <span ref={title}>Hi there, I'm Jamie</span>
                    <div className={styles.iconContainer} ref={iconContainer}>
                        <div className={styles.face} ref={face}>
                        </div>
                        <div className={styles.egg} ref={egg}>
                        </div>
                    </div>
                </h1>
                <p className={styles.text} ref={text}>A frontend developer that loves making things move.</p>
            </div>
            {/* <div className={styles.panel}></div>
            <div className={styles.panel}></div> */}
            <div className={styles.background}>
                <div className={styles.topShape} ref={topShape}>
                    <Star fill="#2F29C3"/>
                </div>
                <div className={styles.bottomShape} ref={bottomShape}>
                    <Star fill="#E9AE15"/>
                </div>
            </div>
        </section>
    )
}

export default HomeHero;