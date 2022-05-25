import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { CharactersList, SearchBar } from "../../components";
import { Container, Header, Title } from "./styles";

export function SearchCharacters() {

	const [search, setSearch] = useState("");

	const theme = useTheme();
	const navigation = useNavigation();

	function handleBackPress() {
		navigation.goBack();
	}

	return (
		<Container>
			<StatusBar backgroundColor={theme.colors.background} style="light" translucent={false} />
			<Header onPress={handleBackPress}>
				<Entypo name="chevron-left" size={36} color={theme.colors.text} />
				<Title>Back</Title>
			</Header>

			<SearchBar onChangeText={setSearch} />

			<CharactersList searchText={search} />

		</Container>
	);
}