import { render } from "@testing-library/react-native";
import React from "react";
import { RenderWithNavigation, RenderWithTheme } from "../../tests";
import { HomeHeader } from "./";

const Component = () => (<HomeHeader searchEnabled />);

describe("HomeHeader", () => {

	it("Should Render correctly", () => {

		const tree = render(
			<RenderWithTheme>
				<RenderWithNavigation component={Component} />
			</RenderWithTheme>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});