import { lighten } from "polished";
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
    justify-content: flex-start;
`;

export const Title = styled.Text`
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    font-size: 22px;
`

export const Search = styled.View`
    width: 100%;
    padding: 15px 10px; 
    margin: 15px 0;
    background-color: ${({ theme }) => lighten(.05, theme.colors.background)};
    flex-direction: row;
    border-radius: 10px;
    align-items:center;
`;


export const Input = styled.TextInput`
    flex: 1;
    margin-left: 10px;
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[400]};
    font-size: 16px;
`;