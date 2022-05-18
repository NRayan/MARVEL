import { lighten } from "polished";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    padding: 0px 0 0 10px; 
    margin: 15px 0;
    background-color: ${({ theme }) => lighten(.05, theme.colors.background)};
    border-radius: 10px;   
`;

export const Input = styled.TextInput`
    flex: 1;
    margin: 15px 0 15px 10px;
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[400]};
    font-size: 16px;
`;

export const ClearButton = styled.TouchableOpacity` 
padding: 0 15px;
justify-content: center;
`;