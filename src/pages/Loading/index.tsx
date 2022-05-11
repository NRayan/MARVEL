import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loading() {
	return (
		<Container>
			<StatusBar backgroundColor="transparent" style="light" />
			<ActivityIndicator size="large" color="#FFF" />
		</Container>
	);
}