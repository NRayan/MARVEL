import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components/native";
import { CharacterDetail, Home, SearchCharacters } from "../pages";
const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {

	const theme = useTheme();

	return (
		<>
			<StatusBar backgroundColor={theme.colors.background} style="light" translucent={false} />

			<NavigationContainer>
				<Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
					<Screen name="home" component={Home} />
					<Screen name='searchCharacters' component={SearchCharacters} />
					<Screen name='characterDetail' component={CharacterDetail} />
				</Navigator>
			</NavigationContainer>
		</>
	);
}