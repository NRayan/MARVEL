import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components/native";
import { CharacterProps } from "../../types";
import { Container, Content, Description, InfoButton, InfoButtonTitle, Thumbnail, Title } from "./styles";

type Props = {
	character: CharacterProps
}

export function CharacterItem({ character }: Props) {

	const theme = useTheme();
	const navigation = useNavigation();

	function handleInfoButtonPress() {
		navigation.navigate("characterDetail", character);
	}

	return (
		<Container>
			<Thumbnail source={{ uri: character.thumbnail }} />
			<Content>
				<Title>{character.name}</Title>
				<Description numberOfLines={3} ellipsizeMode="tail">{character.description}</Description>
				<InfoButton onPress={handleInfoButtonPress}>
					<InfoButtonTitle>More info</InfoButtonTitle>
					<AntDesign name="right" size={18} color={theme.colors.text} />
				</InfoButton>
			</Content>
		</Container>
	);
}