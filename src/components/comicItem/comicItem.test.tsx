// import { render } from "@testing-library/react-native";
import { render } from "@testing-library/react-native";
import React from "react";
import { RenderWithTheme } from "../../tests";
import { ComicItem } from "./";

describe("ComicItem", () => {

	it("Should Render correctly", () => {

		const tree = render(
			<RenderWithTheme>
				<ComicItem comic={{ title: "Comic", thumbnail: "www.thumb.com" }} />
			</RenderWithTheme>
		).toJSON();

		expect(tree).toMatchSnapshot();

	});
});