import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SimpleValidator from "../SimpleValidator";

describe("<SimpleValidator />", () => {
    it("displays the result on button press", () => {
        const { getByTestId, getByPlaceholderText } = render(<SimpleValidator />);

        const inputField = getByPlaceholderText("MN...");
        fireEvent.changeText(inputField, "text");

        const button = getByTestId("validate-button");
        fireEvent.press(button);
        const result = getByTestId("result");

        expect(result).toBeDefined();
    });
});
