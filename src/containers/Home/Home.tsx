import { memo } from 'react';
import { IHomeProps, StoryItemType } from 'src/types';
import StoryItem from 'src/components/StoryItem';

import styles from './Home.module.scss';

const Home = ({ result }: IHomeProps) => {
    return (
        <div className={styles.homepage}>
            {result?.map(
                ({
                    author,
                    authorScore,
                    image,
                    storyScore,
                    time,
                    title,
                    url
                }: StoryItemType) => (
                    <StoryItem
                        key={author + authorScore}
                        author={author}
                        authorScore={authorScore}
                        image={image}
                        storyScore={storyScore}
                        time={time}
                        title={title}
                        url={url}
                    />
                )
            )}
        </div>
    );
};

export default memo(Home);
