import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color:${({ theme }) => theme.colors.background};
    padding: 0 ${({ theme }) => theme.paddings.horizontal};
    padding-top: ${({ theme }) => theme.paddings.vertical};
`;

export const Title = styled.Text`
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    font-size: 22px;
`

export const Header = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;
`