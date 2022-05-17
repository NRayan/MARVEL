import styled from "styled-components/native";
import { transparentize } from "polished";

export const Container = styled.View`
 justify-content: center;
 align-items: center;
 margin: 40px 0;
`;

export const Title = styled.Text`
    margin: 10px 0;
    font-size: 18px;
    color: ${({ theme }) => transparentize(.7, theme.colors.text)};
    font-family: ${({ theme }) => theme.fonts[500]};
`;