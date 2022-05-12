import React from "react";
import { Image } from "react-native";
import { CharacterProps } from "../../types";
import { Container } from "./styles";

type Props = {
	character: CharacterProps
}

export function CharacterItem({character}: Props) {

	return (
		<Container>
			<Image source={{ uri: character.thumbnail }} style={{ height: 100, width: 100 }} />

		</Container>
	);
}