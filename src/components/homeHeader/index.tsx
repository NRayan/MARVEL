import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

type Props =
	{
		searchEnabled: boolean
	}

export function HomeHeader({ searchEnabled }: Props) {

	const theme = useTheme();
	const navigation = useNavigation();

	function handleSearchPress() {
		navigation.navigate("searchCharacters");
	}

	return (
		<Container>
			<Title>MARVEL</Title>
			{
				searchEnabled &&
				<TouchableOpacity onPress={handleSearchPress}>
					<Feather name="search" size={28} color={theme.colors.text} />
				</TouchableOpacity>
			}
		</Container>
	);
}