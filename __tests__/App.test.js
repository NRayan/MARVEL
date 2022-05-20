import App from "../App";
import { render } from "@testing-library/react-native";
import React from "react";

it("Should Render", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    
    const marvelLabel = getByText("Marvel");
    expect(marvelLabel).not.toBe(null);
})