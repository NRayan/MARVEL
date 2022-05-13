import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { requests } from "../../service";
import { CharacterProps } from "../../types";
import { ActivityIndicator } from "../activityIndicator";
import { CharacterItem } from "../characterItem";

type Props =
	{
		searchText?: string
	}

let page = 0;
let newSearch = false;
let searchCounter = 1;

export function CharactersList({ searchText = "" }: Props) {

	const [newSearchLoading, setNewSearchLoading] = useState(false);
	const [characters, setCharacters] = useState<CharacterProps[]>([]);
	const [endOfList, setEndOfList] = useState(false);

	useEffect(() => {
		console.log("newSearch");

		setNewSearchLoading(true);
		if (endOfList)
			setEndOfList(false);

		searchCounter += 1;
		page = 0;
		newSearch = true;
		getData();

	}, [searchText]);

	async function getData() {
		try {
			if (endOfList) return;
			const functionCounterStamp = searchCounter;
			const response = await requests.getCharacters(page, searchText);
			if (functionCounterStamp !== searchCounter) {
				console.log("old Search: " + functionCounterStamp + "!=" + searchCounter);
				return;
			}

			if (newSearch)
				setCharacters(response.characters);
			else
				setCharacters([...characters, ...response.characters]);

			page += 1;
			console.log(response.endOfList);
			setEndOfList(response.endOfList);
			newSearch = false;

		} catch (error: any) {
			Alert.alert("Error", error.message);
		} finally {
			console.log("finaly");
			setNewSearchLoading(false);
		}
	}

	const renderItem = (({ item }) => <CharacterItem character={item} />);
	const renderFooter = (() => <ActivityIndicator visible={!endOfList} />);

	return (
		<>
			{
				newSearchLoading ?
					<ActivityIndicator visible={true} />
					:
					<FlatList
						showsVerticalScrollIndicator={false}
						data={characters}
						keyExtractor={(item, index) => index.toString()}
						renderItem={renderItem}
						ListFooterComponent={renderFooter}
						onEndReached={getData}
						onEndReachedThreshold={.1}>
					</FlatList>
			}
		</>
	);
}