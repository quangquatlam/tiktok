import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';

export default function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img
                    className={styles.avatarImage}
                    alt="avatar"
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1d26435fb0b8e539fa0a65353fe5d4ca~c5_300x300.webp?x-expires=1652716800&x-signature=oS0Ath%2BmL0%2FLS0z7FX9u%2FmCko8Y%3D"
                ></img>
            </div>
            <div className={styles.info}>
                <p className={styles.name}>
                    <span>NguyenVanA</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.check}></FontAwesomeIcon>
                </p>
                <span className={styles.username}>A Cute</span>
            </div>
        </div>
    );
}
