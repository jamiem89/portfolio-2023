import Image from 'next/image';

import styles from './ProjectCard.module.css';

const ProjectCard = ({imgUrl, title, text, url}) => {

    return (
        <article class={styles.card}>
            <a href={url} target="_blank">
                <div className={styles.image}>
                    <Image
                        src={imgUrl}
                        width={420}
                        height={226}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.text}>{text}</p>
                    <span className={styles.link}>View site</span>
                </div>
            </a>
        </article>
    )
}

export default ProjectCard;