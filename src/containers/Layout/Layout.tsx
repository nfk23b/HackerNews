import { ILayoutProps } from 'src/types';

import styles from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default Layout;
