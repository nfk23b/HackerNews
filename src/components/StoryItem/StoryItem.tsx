import { memo } from 'react';
import { StoryItemType } from '../../types';
import img from './img.png';

import styles from './StoryItem.module.scss';

const StoryItem = ({
    author,
    authorScore,
    image,
    storyScore,
    time,
    title,
    url
}: StoryItemType) => {
    return (
        <div className={styles.story_item}>
            <a className={styles.story_item__image} href={url} target='_blank'>
                <img src={image || img} />
            </a>

            <div className={styles.story_item__content}>
                <div className={styles.story_item__heading}>
                    <div className={styles.story_item__created}>{time}</div>
                    <div className={styles.story_item__score}>
                        {storyScore} points
                    </div>
                </div>

                <a
                    className={styles.story_item__title}
                    href={url}
                    target='_blank'
                >
                    {title}
                </a>
                <div className={styles.story_item__author}>
                    <p>By: {author}</p>
                    <p className={styles.story_item__author__karma}>
                        Karma: {authorScore}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(StoryItem);
