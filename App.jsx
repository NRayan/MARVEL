import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { Home, Loading } from "./src/pages";
import { theme } from "./src/theme";

export default function App() {

	const [loading, setLoading] = useState(true);

	const [fontsLoaded] = useFonts({
		Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold
	});

	useEffect(() => {
		if (!fontsLoaded) return;
		setTimeout(() => setLoading(false), 2 * 1000);
	}, [fontsLoaded]);

	return (
		<ThemeProvider theme={theme}>
			{
				loading ?
					<Loading />
					:
					<Home />
			}
		</ThemeProvider>
	);

}

