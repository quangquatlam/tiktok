import clsx from 'clsx';
import styles from './Search.module.scss';

export default function SearchResult({ children, className }) {
    const classes = clsx(styles.wrapper, { [className]: className });
    return <div className={classes}>{children}</div>;
}
