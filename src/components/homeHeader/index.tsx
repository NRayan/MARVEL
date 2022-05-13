import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

export function HomeHeader() {
	const theme = useTheme();
	const navigation = useNavigation();

	function handleSearchPress() {
		navigation.navigate("SearchCharacters");
	}

	return (
		<Container>
			<Title>MARVEL</Title>
			<TouchableOpacity onPress={handleSearchPress}>
				<Feather name="search" size={28} color={theme.colors.text} />
			</TouchableOpacity>
		</Container>
	);
}