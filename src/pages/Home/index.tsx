import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { HomeHeader, TabButton } from "../../components";
import { requests } from "../../service";
import { Buttons, Container } from "./styles";

enum selecionOption {
	heroes = 1,
	comics = 2
}

export function Home() {

	const theme = useTheme();

	const [selected, setSelected] = useState<selecionOption>(1);
	const [characters, setCharacters] = useState<number>();

	useEffect(() => { getData(); }, []);

	async function getData() {
		try {
			const response = await requests.getCharacters();
			console.log(response);

			if (!characters)
				setCharacters(1);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container>
			<StatusBar backgroundColor={theme.colors.background} style="light" translucent={false} />
			<HomeHeader />
			<Buttons>
				<TabButton title="Heroes" onPress={() => { setSelected(1); }} selected={selected === 1} />
				<TabButton title="Comics" onPress={() => { setSelected(2); }} selected={selected === 2} />
			</Buttons>

		</Container>
	);
}