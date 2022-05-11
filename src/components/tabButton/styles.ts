import styled from 'styled-components/native';

type Props =
    {
        selected: boolean
    }

export const Container = styled.TouchableOpacity<Props>`
background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.background};
margin-right: 10px;
border-radius: 15px;
padding: 10px 20px;
`

export const Title = styled.Text`
font-size: 16px;
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts[600]};
`