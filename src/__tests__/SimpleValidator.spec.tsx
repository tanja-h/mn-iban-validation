import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SimpleValidator from "../SimpleValidator";

describe("<SimpleValidator />", () => {
    it("displays the result on button press", () => {
        const { getByTestId } = render(<SimpleValidator />);
        const button = getByTestId("validate-button");
        fireEvent.press(button);
        const result = getByTestId("result");

        expect(result).toBeDefined();
    });

    it("hides the result on input change", () => {
        const { queryByTestId, getByPlaceholderText } = render(<SimpleValidator />);
        const inputField = getByPlaceholderText("MN...");
        fireEvent.changeText(inputField, "text");

        const result = queryByTestId("result");

        expect(result).toBeNull();
    });
});
