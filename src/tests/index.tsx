import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
import { CharacterProps } from "../types";

const { Navigator, Screen } = createNativeStackNavigator();

export function RenderWithTheme({ children }) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}

export function RenderWithNavigation({ component, params = {} }) {

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name="MockedScreen" component={component} initialParams={params} />
			</Navigator>
		</NavigationContainer>
	);
}

export function mockCharacters(): CharacterProps[] {

	const characters: CharacterProps[] = [];

	for (let index = 0; index < 10; index++) {
		characters.push({
			name: "asd",
			description: "asd",
			id: 0,
			thumbnail: "asd",
			urls: {
				comics: "",
				detail: "",
				wiki: ""
			},
		});

	}

	return characters;
}
