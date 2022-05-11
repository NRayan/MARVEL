import React from "react";
import { Container, Title } from "./styles";

type Props =
	{
		title: string;
		selected: boolean;
		onPress: () => void;
	}

export function TabButton({ title, selected, onPress }: Props) {
	return (
		<Container onPress={onPress} selected={selected}>
			<Title>{title}</Title>
		</Container>
	);
}