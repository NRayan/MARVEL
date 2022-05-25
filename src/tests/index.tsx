import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../theme";

export function RenderWithTheme({ children }) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}