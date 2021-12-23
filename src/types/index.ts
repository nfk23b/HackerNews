export type StoryItemType = {
    author: string;
    authorScore: number;
    image: string;
    storyScore: number;
    time: string;
    title: string;
    url: string;
};

export interface IStoryType {
    by: string;
    url: string;
    time: string | number;
    score: number;
    title: string;
}

export interface IUserType {
    id: string;
    karma: number;
}

export interface ILayoutProps {
    children?: React.ReactNode;
}

export interface IHomeProps {
    result?: StoryItemType[];
}
