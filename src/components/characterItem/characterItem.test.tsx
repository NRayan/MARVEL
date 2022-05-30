// import { render } from "@testing-library/react-native";
import { render } from "@testing-library/react-native";
import React from "react";
import { mockCharacters, RenderWithNavigation, RenderWithTheme } from "../../tests";
import { CharacterItem } from "./";

const characters = mockCharacters();
const Component = () => (<CharacterItem character={characters[0]} />);

describe("characterItem", () => {

	it("Should Render correctly", () => {

		const tree = render(
			<RenderWithTheme>
				<RenderWithNavigation component={Component} />
			</RenderWithTheme>
		).toJSON();

		expect(tree).toMatchSnapshot();

	});
});