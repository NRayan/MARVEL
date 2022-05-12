import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color:${({ theme }) => theme.colors.background};
    padding: 0 ${({ theme }) => theme.paddings.horizontal};
    padding-top: ${({ theme }) => theme.paddings.vertical};
`;

export const Buttons = styled.View`
margin: 20px 0;
flex-direction:row;
align-items: center;
`