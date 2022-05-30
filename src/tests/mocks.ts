import { CharacterProps } from "../types";

export function mockCharacters(): CharacterProps[] {

	const characters: CharacterProps[] = [];

	for (let index = 0; index < 10; index++) {
		characters.push({
			name: "asd",
			description: "asd",
			id: 0,
			thumbnail: "asd",
			urls: {
				comics: "",
				detail: "",
				wiki: ""
			},
		});

	}

	return characters;
}