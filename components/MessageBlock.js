import classes from './MessageBlock.module.scss';

export default function MessageBlock(props) {
    return (
        <section className={classes.message}>
            <h1>{props.heading}</h1>
            <p>
                {props.message}
            </p>
        </section>
    )
}