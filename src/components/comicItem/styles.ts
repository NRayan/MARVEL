import { lighten, transparentize } from "polished";
import styled from "styled-components/native";

export const Container = styled.View`
height: 130px;
width: 100%;
flex-direction: row;
margin: 10px 0;
border-radius:10px;
overflow: hidden;
border: 1px solid ${({ theme }) => lighten(.05, theme.colors.background)};
`;

export const Thumbnail = styled.Image`
height: 100%;
aspect-ratio: 0.8;
`;

export const Content = styled.View`
flex: 1;
padding: 10px 15px;
justify-content: center;
`;

export const Title = styled.Text`
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[600]};
color: ${({ theme }) => theme.colors.text};
`;
