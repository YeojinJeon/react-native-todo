import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { StatusBar } from 'react-native';
import Input from './components/Input';

const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
justify-content: flex-start;
background-color: ${(theme) => { theme.background }};
color: hotpink;
`;

const Title = styled.Text`
font-size: 40px;
font-weight: 600;
color: ${({ theme }) => theme.text};
align-self: flex-start;
margin: 0px 20px;
`;


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="light-content" //dark-content
                    backgroundColor={theme.background}
                />
                <Title>TODO LIST</Title>
                <Input />
            </Container>
        </ThemeProvider>
    );
}
