import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export function HomeHeader() {
	const theme = useTheme();

	return (
		<Container>
			<Title>MARVEL</Title>
			<TouchableOpacity>
				<Feather name="search" size={28} color={theme.colors.text} />
			</TouchableOpacity>
		</Container>
	);
}