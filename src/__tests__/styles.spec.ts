import { getValidationColor, greenColor, redColor } from "../utils/styles";

describe("getValidationColor", () => {
    it("ishould return greenColor for valid props", () => {
        const isValid = true;
        expect(getValidationColor(isValid)).toBe(greenColor);
    });

    it("should return redColor for invalid props", () => {
        const isValid = false;
        expect(getValidationColor(isValid)).toBe(redColor);
    });
});


