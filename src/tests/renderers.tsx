import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

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