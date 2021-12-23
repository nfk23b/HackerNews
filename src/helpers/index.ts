import { getStory, getUser } from 'src/api/Request';
import { StoryItemType } from 'src/types';

export const getRandomStories = (stories: number[]): number[] => {
    return [...Array(10)].map(
        () => stories.splice(Math.floor(Math.random() * stories.length), 1)[0]
    );
};

export const fetchAllData = (stories: number[]): Promise<StoryItemType[]> => {
    const storyItems: StoryItemType[] = [];

    return new Promise((resolve, reject) => {
        try {
            Promise.all(
                stories.map(async (story) => {
                    const storyData = await getStory(story);
                    const userData = await getUser(storyData['by']);
                    const localDate = new Date(
                        +storyData['time'] * 1000
                    ).toLocaleDateString();

                    const result = {
                        title: storyData['title'],
                        url: storyData['url'],
                        time: localDate,
                        storyScore: storyData['score'],
                        author: userData['id'],
                        authorScore: userData['karma'],
                        image: ''
                    };

                    storyItems.push(result);
                })
            ).then(() => {
                resolve(
                    storyItems.sort((a, b) => a['storyScore'] - b['storyScore'])
                );
            });
        } catch (error) {
            reject(error);
        }
    });
};
