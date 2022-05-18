import { AntDesign, Feather } from "@expo/vector-icons";
import { transparentize } from "polished";
import React from "react";
import { useTheme } from "styled-components";
import { ClearButton, Container, Input } from "./styles";

type Props =
	{
		value: string,
		onChangeText: (string) => void
	}

export function SearchBar({ value, onChangeText }: Props) {

	const theme = useTheme();

	function handleClearButtonPress() {
		onChangeText("");
	}

	return (
		<Container>
			<Feather name="search" size={28} color={transparentize(.6, theme.colors.text)} style={{ alignSelf: "center" }} />
			<Input placeholder="search..." value={value} onChangeText={onChangeText} placeholderTextColor={transparentize(.6, theme.colors.text)} />
			{
				!!value &&
				<ClearButton onPress={handleClearButtonPress}>
					<AntDesign name="close" color={theme.colors.text} size={23} />
				</ClearButton>
			}
		</Container>
	);
}