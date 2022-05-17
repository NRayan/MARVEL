import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { transparentize } from "polished";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { CharactersList } from "../../components";
import { Container, Header, Input, Search, Title } from "./styles";

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

			<Search>
				<Feather name="search" size={28} color={transparentize(.6, theme.colors.text)} />
				<Input placeholder="search..." value={search} onChangeText={setSearch} placeholderTextColor={transparentize(.6, theme.colors.text)} />
			</Search>

			<CharactersList searchText={search} />

		</Container>
	);
}