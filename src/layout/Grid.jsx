import styles from './Grid.module.css';

const Grid = (props) => {

    return (
        <div className={`${styles.container} ${props.fullHeight ? styles.fullheight : null}`}>
            {props.children}
        </div>
    )
}

export default Grid;