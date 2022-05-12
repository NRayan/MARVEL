import React from "react";
import { useTheme } from "styled-components/native";
import { ActivityIndicator as ActIndicator } from "react-native";

type Props = {
	visible: boolean
}


export function ActivityIndicator({ visible }: Props) {

	const theme = useTheme();
	return (
		<ActIndicator color={theme.colors.primary} size="large" style={{ opacity: visible ? 1 : 0,marginVertical:40 }} />
	);
}