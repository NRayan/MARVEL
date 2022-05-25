// import { render } from "@testing-library/react-native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { RenderWithTheme } from "../../tests";
import { SearchBar } from "./";

describe("SearchBar", () => {

	it("Should Render", () => {

		const { queryByPlaceholderText } = render(
			<RenderWithTheme>
				<SearchBar onChangeText={() => null} />
			</RenderWithTheme>
		);

		const textInput = queryByPlaceholderText("search...");
		expect(textInput).toBeTruthy();
	});

	it("Should display clear button after typing", () => {

		const { getByPlaceholderText, queryByTestId } = render(
			<RenderWithTheme>
				<SearchBar onChangeText={() => null} />
			</RenderWithTheme>
		);

		expect(queryByTestId("clear-button")).toBeFalsy();

		const textInput = getByPlaceholderText("search...");
		fireEvent.changeText(textInput, "Iron Man");

		expect(queryByTestId("clear-button")).toBeTruthy();

	});
	it("Should clear de text after pressing the clear button", () => {

		const { getByPlaceholderText, queryByTestId } = render(
			<RenderWithTheme>
				<SearchBar onChangeText={() => null} />
			</RenderWithTheme>
		);

		const searchtext = "Iron Man";

		const textInput = getByPlaceholderText("search...");
		fireEvent.changeText(textInput, searchtext);

		fireEvent.press(queryByTestId("clear-button"));

		expect(textInput.props.value).toBe("");

	});

});

