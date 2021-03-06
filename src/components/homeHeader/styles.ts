import styled from "styled-components/native";


export const Container = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`

export const Title = styled.Text`
    color:${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts[600]};
    font-size: 22px;
`

