import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home, SearchCharacters } from "../pages";
const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {

	return (
		<NavigationContainer>
			<Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
				<Screen name="home" component={Home} />
				<Screen name='searchCharacters' component={SearchCharacters} />
			</Navigator>
		</NavigationContainer>
	);
}