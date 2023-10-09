import Grid from '@/layout/Grid';
import About from '../components/About';

import styles from './StickyNav.module.css';
import Experience from './Experience';
import Projects from './Projects';
import Socials from './Socials';

const StickyNav = () => {

    return(
        <section className={styles.section}>
            <Grid>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarTop}>
                        <h2 className={styles.sidebarTitle}>Jamie Moore<span>.</span></h2>
                        <p className={styles.sidebarText}>Frontend developer with 10+ years of agency experience.</p>
                        <ul className={styles.links}>
                            <li><a href="#about" className={`${'small-caps'} ${styles.trigger}`}>About</a></li>
                            <li><a href="#experience" className={`${'small-caps'} ${styles.trigger}`}>Experience</a></li>
                            <li><a href="#projects" className={`${'small-caps'} ${styles.trigger}`}>Projects</a></li>
                        </ul>
                    </div>
                    <div className={styles.sidebarBottom}>
                        <Socials />
                    </div>
                </aside>
                <div className={styles.main}>
                    <About/>
                    <Experience/>
                    <Projects/>
                </div>
            </Grid>
        </section>
    )
}

export default StickyNav;