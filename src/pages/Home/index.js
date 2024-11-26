import React from 'react';
import { StatusBar } from 'react-native';
import { Title, Text, Button, Box, Spacer } from '../../components';
const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Box hasPadding align="center" background="dark" >

                <Box justify="center" align="center" fluid>
                    <Title color="light" variant="big" bold align="center">
                        LOOKAPP
                    </Title>
                    <Spacer />
                    <Text align="center" spacing="0px 40px">
                        Stay on top of the fashion world and buy your favorite looks.
                    </Text>
                </Box>

                <Box justify="flex-end" align="center" fluid>
                    <Button block onPress={() => navigation.navigate('SingIn')} >
                        <Text color="light">SigIn my account</Text>
                    </Button>
                    <Spacer size="20px" />
                    <Text underline color="light" onPress={() => navigation.navigate('SingUp')}>Create new account</Text>
                    <Spacer size="70px" />
                </Box>
            </Box>
        </>
    );
};
export default Home;