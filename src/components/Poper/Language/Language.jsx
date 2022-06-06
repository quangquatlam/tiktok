import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Language.module.scss';

export default function Language({ title, onBack }) {
    return (
        <div className={styles.popLanguage}>
            <button className={styles.btnBack} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
}
