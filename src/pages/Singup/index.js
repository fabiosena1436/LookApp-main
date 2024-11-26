import React from "react";
import { Box, Button, Input, Spacer, Text, Title } from "../../components";
import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";




const SingUp = () => {

    const { navigate, goBack } = useNavigation()
    return (
        <>
            <StatusBar barStyle={"dark-content"} />
            <Box background="light" justify="center" align="center " hasPadding>
                <Title bold>Create new account.</Title>
                <Spacer />
                <Text>Enter your details below</Text>
                <Spacer size="50px" />

                <Input placeholder="Name" />
                <Spacer />

                <Input placeholder="Email" />
                <Spacer />

                <Input placeholder="Password" secureTextEntry />
                <Spacer />
                <Spacer size="50px" />
                <Button block onPress={() => navigate('Feed')}>
                    <Text color="light">Create new account</Text>
                </Button>
                <Spacer size="20px" />
                <Text underline onPress={() => goBack('')}>Back to Home</Text>
            </Box>
        </>
    )
}

export default SingUp