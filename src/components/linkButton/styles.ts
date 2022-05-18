import { transparentize } from "polished";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const borderRadius = 8;

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity:.6
})`
    background-color: ${({ theme }) => transparentize(.7, theme.colors.primary)};
    border-radius: ${borderRadius}px;
    padding: 0 0 0 10px;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[500]};
`;

export const Highlight = styled.View`
    height: 40px;
    aspect-ratio: 1.0;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${borderRadius}px;
    margin-left: 25px;
    justify-content: center;
    align-items: center;
`;