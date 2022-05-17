import React from "react";
import { Container, Title } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { transparentize } from "polished";

export function NoItemFound() {
	const theme = useTheme();

	return (
		<Container>
			<AntDesign name="frown" color={transparentize(.7, theme.colors.text)} size={36} />
			<Title>No item found</Title>
		</Container>
	);
}