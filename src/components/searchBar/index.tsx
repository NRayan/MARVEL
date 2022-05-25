import { AntDesign, Feather } from "@expo/vector-icons";
import { transparentize } from "polished";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { ClearButton, Container, Input } from "./styles";

type Props =
	{
		onChangeText: (string) => void
	}

export function SearchBar({ onChangeText }: Props) {

	const theme = useTheme();

	const [value, setValue] = useState("");

	useEffect(() => { onChangeText(value); }, [value]);

	function handleClearButtonPress() {
		setValue("");
	}

	return (
		<Container>
			<Feather name="search" size={28} color={transparentize(.6, theme.colors.text)} style={{ alignSelf: "center" }} />
			<Input placeholder="search..." value={value} onChangeText={setValue} placeholderTextColor={transparentize(.6, theme.colors.text)} />
			{
				!!value &&
				<ClearButton onPress={handleClearButtonPress} testID="clear-button">
					<AntDesign name="close" color={theme.colors.text} size={23} />
				</ClearButton>
			}
		</Container>
	);
}