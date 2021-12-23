import { useState, useEffect } from 'react';
import { getTopStories } from 'src/api/Request';
import { StoryItemType } from 'src/types';
import { getRandomStories, fetchAllData } from 'src/helpers';
import Home from 'src/containers/Home';
import Layout from 'src/containers/Layout';
import Loader from 'src/components/Loader';

const Index = () => {
    const [stories, setStories] = useState<number[]>([]);
    const [result, setResult] = useState<StoryItemType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const items: number[] = await getTopStories();
            items && setStories(getRandomStories(items));
        })();
    }, []);

    useEffect(() => {
        stories &&
            fetchAllData(stories).then((data) => {
                setResult(data);
                setLoading(false);
            });
    }, [stories]);

    return (
        <Layout>
            <h2>Hacker News</h2>
            {!loading && result?.length > 0 ? (
                <Home result={result} />
            ) : (
                <Loader />
            )}
        </Layout>
    );
};

export default Index;
