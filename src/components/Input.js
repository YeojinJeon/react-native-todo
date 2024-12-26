import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
width: 100%;
height: 60px;
margin: 30px 0;
padding: 15px 20px;
border-radius: 10px;
font-size: 25px;
background-color: ${({ theme }) => theme.itemBackground};
color: ${({ theme }) => theme.text};
`;

const Input = () => {
    return <StyledInput />;
};

export default Input;