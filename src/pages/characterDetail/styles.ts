import { transparentize } from "polished";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenSize = Dimensions.get("window").height;

export const Container = styled.ScrollView`
background-color: ${({ theme }) => theme.colors.background};
`;

export const CloseButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: rgba(0,0,0,.3);
    border-radius: 100px;
    position: absolute;
    right: 15px;
    top: 35px;
`;

export const SubContainer = styled.View`

`;

export const Thumbnail = styled.Image`
height: ${screenSize / 2}px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    margin: 20px ${({ theme }) => theme.paddings.horizontal} 0;
`;

export const Description = styled.Text`
    font-size: 18px;
    color:${({ theme }) => transparentize(.1, theme.colors.text)};
    font-family: ${({ theme }) => theme.fonts[400]};
    margin: 10px ${({ theme }) => theme.paddings.horizontal} 0;
`;

export const Links = styled.Text`
    font-size: 20px;
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    margin: 25px ${({ theme }) => theme.paddings.horizontal} 10px;
`;

export const LinksContainer = styled.ScrollView.attrs(({ theme }) => ({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    contentContainerStyle: {
        paddingHorizontal: theme.paddings.horizontal
    }
})
)``;


