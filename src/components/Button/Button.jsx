import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
export default function Button({
    to,
    href,
    primary = false,
    outline = false,
    text,
    small = false,
    large = false,
    disable,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProp
}) {
    let Conp = 'button';
    const prop = {
        onClick,
        ...passProp,
    };
    if (disable) {
        delete prop.onClick;
    }
    if (to) {
        prop.to = to;
        Conp = Link;
    } else if (href) {
        prop.href = href;
        Conp = 'a';
    }

    const classes = clsx(
        styles.wrapper,
        primary && styles.primary,
        outline && styles.outline,
        small && styles.small,
        large && styles.large,
        text && styles.text,
        disable && styles.disable,
        { [className]: className },
    );
    return (
        <Conp className={classes} {...prop}>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span className={styles.title}>{children}</span>
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </Conp>
    );
}
