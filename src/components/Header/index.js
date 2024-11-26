import React from 'react';

import { Text, Box, Touchable } from '../../components';
import { SafeAreaView, StatusBar } from 'react-native';

import { colors } from '../../styles/theme.json'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
    const navigation = useNavigation()
    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <Box fluid height="100px" justify="center" border={`1px solid ${colors.muted}50`}>
                <SafeAreaView style={{
                    flexDirection: "row"
                }}>
                    <Touchable width="80px" justify="center" align="center" onPress={() => navigation.openDrawer()}>
                        <Icon name='menu' size={20} color="#000" />
                    </Touchable>
                    <Box align="center" justify="center">
                        <Text >{title}</Text>
                    </Box>
                    <Touchable width="80px"></Touchable>

                </SafeAreaView>
            </Box>
        </>

    );
};
export default Header;