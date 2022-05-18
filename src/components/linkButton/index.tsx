import React from "react";
import { Container, Title, Highlight } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
type Props = {
	title: string,
	link: string
}


export function LinkButton({ link, title }: Props) {

	const theme = useTheme();

	function handlePress() {
		console.log(link);
	}

	return (
		<Container onPress={handlePress}>
			<Title>{title}</Title>
			<Highlight>
				<AntDesign size={22} color={theme.colors.text} name="right" />
			</Highlight>
		</Container>
	);
}