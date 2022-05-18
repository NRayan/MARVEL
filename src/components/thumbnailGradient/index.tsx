import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";

export function ThumbnailGradient() {
	const theme = useTheme();
	const colors = ["transparent", theme.colors.background];

	return (
		<LinearGradient colors={colors} style={{ position: "absolute", bottom: 0, height: 100, width: "100%" }} />
	);
}