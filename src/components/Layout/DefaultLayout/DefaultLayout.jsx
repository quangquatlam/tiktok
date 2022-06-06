import Header from './Header/Header';
import Sidebar from './Siderbar/Sidebar';
import styles from './DefaultLayout.module.scss';
export default function DefaultLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
