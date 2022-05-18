import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color:${({ theme }) => theme.colors.background};
    padding: 0 ${({ theme }) => theme.paddings.horizontal};
    padding-top: ${({ theme }) => theme.paddings.vertical};
`;

export const Header = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
`;

export const Title = styled.Text`
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    font-size: 22px;
`