import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { requests } from "../../service";
import { CharacterProps } from "../../types";
import { CharacterItem } from "../characterItem";

export function CharactersList() {

	const [characters, setCharacters] = useState<CharacterProps[]>([]);

	useEffect(() => { getData(); }, []);

	async function getData() {
		try {
			const response = await requests.getCharacters();
			setCharacters(response);
		} catch (error: any) {
			Alert.alert("Error", error.message);
		}
	}

	const renderItem = (({ item }) => (<CharacterItem character={item} />));

	return (
		<FlatList
			data={characters}
			keyExtractor={(item, index) => index.toString()}
			renderItem={renderItem}>

		</FlatList>
	);
}