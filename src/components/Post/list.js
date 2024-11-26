import React from 'react';

import { Text, Box, Title } from '../../components';
import Post from '.';


const PostList = () => {
    return (


        <Box>
            {Array.from(Array(200))?.map(item => (
                <Post />
            ))}

        </Box>

    );
};
export default PostList;