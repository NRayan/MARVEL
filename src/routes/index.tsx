import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home, SearchCharacters } from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {

	return (
		<NavigationContainer>
			<Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Screen name='Home' component={Home} />
				<Screen name='SearchCharacters' component={SearchCharacters} />
			</Navigator>
		</NavigationContainer>
	);
}