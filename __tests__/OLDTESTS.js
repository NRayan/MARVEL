// import React from "react";
// import { fireEvent, render } from "@testing-library/react-native";
// import App from "../App";

// it("Should create an item", () => {
// 	const { getByText, getByPlaceholderText } = render(<App />);

// 	const marvelLabel = getByText("Marvel");

// 	expect(marvelLabel).not.toBe(null);
// 	// const addButton = getByText("+");
// 	// const textInput = getByPlaceholderText("write something");

// 	// const creatingItemText = "first todo";

// 	// fireEvent.changeText(textInput, creatingItemText);
// 	// fireEvent.press(addButton);

// 	// const cretedItem = getByText(creatingItemText);

// 	// expect(cretedItem).not.toBe(null);
// });

// it("Should create multiple itens", () => {
// 	const { getByText, getByPlaceholderText } = render(<App />);

// 	const addButton = getByText("+");
// 	const textInput = getByPlaceholderText("write something");

// 	const creatingItemText_1 = "first todo";
// 	const creatingItemText_2 = "second todo";

// 	fireEvent.changeText(textInput, creatingItemText_1);
// 	fireEvent.press(addButton);

// 	fireEvent.changeText(textInput, creatingItemText_2);
// 	fireEvent.press(addButton);

// 	const cretedItem_1 = getByText(creatingItemText_1);
// 	const cretedItem_2 = getByText(creatingItemText_2);

// 	expect(cretedItem_1).not.toBe(null);
// 	expect(cretedItem_2).not.toBe(null);
// });

// it("Should delete an item", () => {
// 	const { getByText, getByPlaceholderText, queryByText } = render(<App />);

// 	const addButton = getByText("+");
// 	const textInput = getByPlaceholderText("write something");

// 	const creatingItemText_1 = "first todo";

// 	fireEvent.changeText(textInput, creatingItemText_1);
// 	fireEvent.press(addButton);

// 	const deleteButton = getByText("-");

// 	fireEvent.press(deleteButton);


// 	const deletedItem = queryByText(creatingItemText_1);

// 	expect(deletedItem).toBe(null);

// });

// it("Shoud not create an enpty Item", () => {

// 	const { getByText } = render(<App />);

// 	const addButton = getByText("+");

// 	fireEvent.press(addButton);

// 	const errorText = getByText("Please insert a valid Text");

// 	expect(errorText).not.toBe(null);


// });

// it("Should remove the error message after creating an valid item", () => {
// 	const { getByText,queryByText, getByPlaceholderText } = render(<App />);

// 	const addButton = getByText("+");
// 	fireEvent.press(addButton);


// 	const textInput = getByPlaceholderText("write something");
// 	const creatingItemText = "first todo";

// 	fireEvent.changeText(textInput, creatingItemText);
// 	fireEvent.press(addButton);

// 	const errorText = queryByText("Please insert a valid Text");

// 	expect(errorText).toBe(null);
// });