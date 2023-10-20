import styles from './JobCard.module.css';

const JobCard = ({title, text}) => {
    return(
        <article className={styles.card}>
            <h4 className={`${styles.title} ${'small-caps'}`}>{title}</h4>
            <p>{text}</p>
        </article>
    )
}

export default JobCard;