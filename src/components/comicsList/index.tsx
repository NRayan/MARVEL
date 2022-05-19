import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { requests } from "../../service";
import { ComicsProps } from "../../types";
import { ActivityIndicator } from "../activityIndicator";
import { ComicItem } from "../comicItem";

let page = 0;

export function ComicsList() {

	const [comics, setComics] = useState<ComicsProps[]>([]);
	const [endOfList, setEndOfList] = useState(false);

	useEffect(() => { getData(); }, []);

	async function getData() {
		try {
			if (endOfList) return;
			const response = await requests.getComics(page);
			const newData = [...comics, ...response.comics];
			setComics(newData);
			page += 1;
			setEndOfList(response.endOfList);
		} catch (error: any) {
			Alert.alert("Error", error.message);
		}
	}

	const renderItem = (({ item }) => <ComicItem comic={item} />);
	const renderFooter = (() => <ActivityIndicator visible={!endOfList} />);

	return (
		<>
			{
				<FlatList
					showsVerticalScrollIndicator={false}
					data={comics}
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