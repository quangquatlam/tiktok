import Tippy from '@tippyjs/react/headless';
import { default as PopWrapper } from '../SearchResult/SearchResult';
import styles from './MenuItem.module.scss';
import Item from './Item';
import Language from '../Language/Language';
function MenuItems({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <Item data={item} key={index}></Item>);
    };
    return (
        <Tippy
            interactive
            // visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles.menuItem} tabIndex="-1" {...attrs}>
                    <PopWrapper className={styles.menuPoper}>
                        <Language title="Ngôn Ngữ" />
                        {renderItems()}
                    </PopWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default MenuItems;
