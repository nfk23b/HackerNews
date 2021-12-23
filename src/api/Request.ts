import { IStoryType, IUserType } from '../types';

const getStory = async (id: number): Promise<IStoryType> => {
    return await apiCall(`/item/${id}.json`);
};

const getUser = async (id: string): Promise<IUserType> => {
    return await apiCall(`/user/${id}.json`);
};

const getTopStories = async () => {
    return await apiCall('topstories.json');
};

const apiCall = async (endpoint: string) => {
    const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

    try {
        const result = await fetch(`${baseUrl}${endpoint}`);

        if (result.ok) {
            return result.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export { getStory, getUser, getTopStories };
