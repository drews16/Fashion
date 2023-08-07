import styles from './Card.module.css';
import arrowImg from './../../img/icons/arrow.svg';

function Card(props) {
    return (
        <div className={styles.card}>
        <a href="#!" className={styles.card__link}></a>
            <div className={styles.card__img}><img src={props.mainImg} /></div>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{props.title}</div>
                    <div className={styles.card__text__muted}>Explore now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} />
                </div>
            </div>
        </div>
    );
};

export default Card;