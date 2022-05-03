import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type item =
	{
		name: string
	}

export default function App() {

	const [itensList, setItensList] = useState<item[]>([]);
	const [inputValue, setInputValue] = useState<string>();
	const [error, setError] = useState<boolean>();

	function handleAddPress() {
		setError(false);
		if (inputValue) {
			setItensList([...itensList, { name: inputValue }]);
			setInputValue("");
		} else {
			setError(true);
		}
	}

	function handleRemovePress(index) {
		itensList.splice(index, 1);
		setItensList([...itensList]);
	}

	return (
		<View style={styles.container}>
			<StatusBar translucent={false} backgroundColor="white" />

			<View style={{ flexDirection: "row" }}>
				<TextInput placeholder='write something' value={inputValue} onChangeText={setInputValue} style={{ flex: 1, borderWidth: 1 }} />
				<TouchableOpacity style={{ padding: 10, backgroundColor: "black" }} onPress={handleAddPress}>
					<Text style={{ fontSize: 22, color: "white" }}>+</Text>
				</TouchableOpacity>
			</View>

			{
				error &&
				<Text style={{ alignSelf: "center", color: "red" }}>Please insert a valid Text</Text>
			}

			<FlatList
				contentContainerStyle={{ flex: 1 }}
				data={itensList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) =>
					<View style={{ flexDirection: "row", width: "100%", marginVertical: 10 }}>
						<Text style={{ color: "black", fontSize: 16, flex: 1 }} >{item.name}</Text>
						<TouchableOpacity style={{ padding: 10, backgroundColor: "black" }} onPress={() => handleRemovePress(index)}>
							<Text style={{ fontSize: 22, color: "white" }}>-</Text>
						</TouchableOpacity>
					</View>
				} />

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 30
	},
});
