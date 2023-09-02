import { validateIBAN } from "../utils/utils";

describe("IBAN Validation", () => {
    it("should return true for a valid Montenegro IBAN", () => {
        const validIBAN = "ME25505000012345678951";
        expect(validateIBAN(validIBAN)).toBe(true);
    });

    it("should return false for an invalid Montenegro IBAN", () => {
        const invalidIBAN = "ME123";
        expect(validateIBAN(invalidIBAN)).toBe(false);
    });
});

