import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Header, Title } from "./styles";

export function Home() {

	const theme = useTheme();

	return (
		<Container>
			<StatusBar backgroundColor={theme.colors.background} style="light" translucent={false} />
			<Header>
				<Title>MARVEL</Title>
				<TouchableOpacity>
					<Feather name="search" size={36} color={theme.colors.text} />
				</TouchableOpacity>
			</Header>
		</Container>
	);
}