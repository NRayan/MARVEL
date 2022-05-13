import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Loading() {
	const theme = useTheme();

	return (
		<Container>
			<ActivityIndicator size="large" color={theme.colors.primary} />
		</Container >
	);
}