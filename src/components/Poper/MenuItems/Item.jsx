import styles from './MenuItem.module.scss';
import Button from '../../Button/Button';

export default function Item({ data }) {
    return (
        <Button className={`${styles.item}`} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}
