import { memo } from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
    return <div className={styles.loader}></div>;
};

export default memo(Loader);