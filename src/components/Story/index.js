import React from 'react';

import { Text, Box, Title, Touchable, Cover } from '../../components';
import { colors } from '../../styles/theme.json';
const Story = () => {
    return (
        <Touchable onPress={() => alert('test')}
            background="black"
            radius="10px"
            height="190px"
            spacing="0px 5px 0px"
            width="150px"
        >

            <Cover
                width="100%"
                height="100%"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxvrLgNEnu-FvP46sLA8f-ioEOzs-qH09rg&s"  >

                <Box fluid
                    hasPadding
                    background={`${colors.dark}80`}
                    justify="space-between"
                >
                    <Cover
                        circle
                        width="40px"
                        height="40px"
                        border={`1px solid ${colors.light}`}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxvrLgNEnu-FvP46sLA8f-ioEOzs-qH09rg&s" />


                    <Box height="50px" justify="flex-end">
                        <Text bold color='light'  >Fabio Sena</Text>
                        <Text color='light' variant="small">2 mins ago</Text>
                    </Box>
                </Box>
            </Cover>


        </Touchable >
    );
};
export default Story;