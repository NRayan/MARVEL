// import { render } from "@testing-library/react-native";
import { render } from "@testing-library/react-native";
import React from "react";
import { mockCharacters, RenderWithNavigation, RenderWithTheme } from "../../tests";
import { CharacterItem } from "./";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

const characters = mockCharacters();
const CharacterRender = () => (<CharacterItem character={characters[0]} />);

describe("characterItem", () => {

	it("Should Render correctly", () => {

		const tree = render(
			<RenderWithTheme>
				<RenderWithNavigation component={CharacterRender} />
			</RenderWithTheme>
		).toJSON();

		expect(tree).toMatchSnapshot();

	});
});