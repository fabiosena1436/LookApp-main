import React from 'react';
import { ScrollView } from '../../components';
import { Text, Box } from '../../components';
import Story from '.';

const StoryList = () => {
    return (
        <Box fluid height="260px">
            <Box row fluid justify='space-between' hasPadding height="60px" >
                <Text bold color="darck">Stories</Text>
                <Text bold color="danger" underline>Show All</Text>
            </Box>
            <ScrollView horizontal style={{
                paddingLeft: 20,
            }}>
                {Array.from(Array(200))?.map(item => (
                    <Story />
                ))}

            </ScrollView>
        </Box>
    );
};
export default StoryList;