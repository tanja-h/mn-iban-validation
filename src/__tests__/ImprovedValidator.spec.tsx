import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import ImprovedValidator from "../ImprovedValidator";

describe("<SimpleValidator />", () => {
    it("displays validation result on input change", () => {
        const { getByTestId, getByPlaceholderText } = render(<ImprovedValidator />);

        const inputField = getByPlaceholderText("ME...");
        fireEvent.changeText(inputField, "text");

        const result = getByTestId("result");

        expect(result).toBeDefined();
    });

    it("hides validation result on input reset", () => {
        const { queryByTestId, getByPlaceholderText } = render(<ImprovedValidator />);

        const inputField = getByPlaceholderText("ME...");
        fireEvent.changeText(inputField, "");

        const result = queryByTestId("result");

        expect(result).toBeNull();
    });
});
