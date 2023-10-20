import Email from "@/svgs/Email";
import Linkedin from "@/svgs/Linkedin";
import Twitter from "@/svgs/Twitter";
import Codepen from "@/svgs/Codepen";

import styles from './Socials.module.css';

const Socials = () => {
    return (
        <div className={styles.links}>
            <a href="mailto:jamiemoore2689@gmail.com" className={styles.link}>
                <Email />
            </a>
            <a href="https://www.linkedin.com/in/jamiemooredev/" target="_blank" className={styles.link}>
                <Linkedin />
            </a>
            <a href="https://codepen.io/jamiem89" target="_blank" className={styles.link}>
                <Codepen />
            </a>
            <a href="https://twitter.com/JamieMooreDev" target="_blank" className={styles.link}>
                <Twitter />
            </a>
        </div>
    )
}

export default Socials;