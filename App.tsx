import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "./src/pages";
import { Routes } from "./src/routes";
import { theme } from "./src/theme";

export default function App() {

	const [loading, setLoading] = useState(true);

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold
	});

	useEffect(() => {
		if (!fontsLoaded) return;
		setTimeout(() => setLoading(false), 2 * 1000);
	}, [fontsLoaded]);

	return (
		<>
			<StatusBar backgroundColor="transparent" style="light" translucent />
			<ThemeProvider theme={theme}>
				{
					loading ?
						<Loading />
						:
						<Routes />
				}
			</ThemeProvider>
		</>

	);

}

