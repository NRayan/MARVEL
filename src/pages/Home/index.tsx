import React, { useState } from "react";
import { CharactersList, ComicsList, HomeHeader, TabButton } from "../../components";
import { Buttons, Container } from "./styles";

enum selecionOption {
	characters = 1,
	comics = 2
}

export function Home() {

	const [selected, setSelected] = useState<selecionOption>(1);

	return (
		<Container>
			<HomeHeader searchEnabled={selected===selecionOption.characters}/>
			<Buttons>
				<TabButton title="Characters" onPress={() => { setSelected(1); }} selected={selected === 1} />
				<TabButton title="Comics" onPress={() => { setSelected(2); }} selected={selected === 2} />
			</Buttons>

			{
				selected === selecionOption.characters ?
					<CharactersList />
					:
					<ComicsList />
			}

		</Container>
	);
}