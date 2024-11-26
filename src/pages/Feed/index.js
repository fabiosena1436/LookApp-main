import React from 'react';

import { Box, ScrollView } from '../../components';
import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';

const Feed = () => {
    return (
        <Box background="light" >
            <Header title={"Explore"} />
            <ScrollView>
                <StoryList />
                <PostList />
            </ScrollView>
        </Box>
    );
};
export default Feed;