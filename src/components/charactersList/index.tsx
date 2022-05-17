import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { requests } from "../../service";
import { CharacterProps } from "../../types";
import { ActivityIndicator } from "../activityIndicator";
import { CharacterItem } from "../characterItem";
import { NoItemFound } from "../noItemFound";

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

	const [noItemFound, setNoItemFound] = useState(false);

	useEffect(() => {
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
			if (endOfList && !newSearch) return;

			const functionCounterStamp = searchCounter;
			const response = await requests.getCharacters(page, searchText);

			if (functionCounterStamp !== searchCounter) return;

			const newData = newSearch ? response.characters : [...characters, ...response.characters];

			setCharacters(newData);

			if (newData.length === 0)
				setNoItemFound(true);
			else
				setNoItemFound(false);

			page += 1;

			setEndOfList(response.endOfList);

			newSearch = false;

		} catch (error: any) {
			Alert.alert("Error", error.message);
		} finally {
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
					noItemFound ?
						<NoItemFound />
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