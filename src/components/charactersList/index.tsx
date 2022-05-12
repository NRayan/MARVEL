import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { requests } from "../../service";
import { CharacterProps } from "../../types";
import { ActivityIndicator } from "../activityIndicator";
import { CharacterItem } from "../characterItem";

export function CharactersList() {

	const [endOfList, setEndOfList] = useState(false);
	const [page, setPage] = useState(0);
	const [characters, setCharacters] = useState<CharacterProps[]>([]);

	useEffect(() => { getData(); }, []);

	async function getData() {
		try {
			if (endOfList) return;
			const response = await requests.getCharacters(page);
			setCharacters([...characters, ...response.characters]);
			setPage(page + 1);
			setEndOfList(response.endOfList);
		} catch (error: any) {
			Alert.alert("Error", error.message);
		}
	}

	const renderItem = (({ item }) => <CharacterItem character={item} />);
	const renderFooter = (() => <ActivityIndicator visible={!endOfList} />);

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={characters}
			keyExtractor={(item, index) => index.toString()}
			renderItem={renderItem}
			ListFooterComponent={renderFooter}
			onEndReached={getData}
			onEndReachedThreshold={.1}>
		</FlatList>
	);
}