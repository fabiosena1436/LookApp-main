import React from "react";
import { Box, Button, Input, Spacer, Text, Title } from "../../components";
import { StatusBar } from "react-native";

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ({ navigation: { navigate, replace } }) {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />
            <Box background="light" justify="center" align="center " hasPadding>

                {/* <Icon name='star' size={50} color="#000" /> */}
                <Title bold>LOOKAPP</Title>
                <Spacer />
                <Spacer size="50px" />

                <Input placeholder="Email" />
                <Spacer />

                <Input placeholder="Password" secureTextEntry />
                <Spacer />
                <Spacer size="50px" />
                <Button block onPress={() => replace('Feed')} >
                    <Text color="light">SignIn  my account</Text>
                </Button>
                <Spacer size="20px" />
                <Text underline onPress={() => navigate('SingUp')}>Create new account</Text>
            </Box>
        </>
    )
}
