import { validateIBAN } from "../utils/utils";

describe("IBAN Validation", () => {
    describe("should return true for valid inputs", () => {

        it("input without spaces", () => {
            const validIBAN = "ME25505000012345678951";
            expect(validateIBAN(validIBAN)).toBe(true);
        });

        it("input with spaces", () => {
            const validIBAN = "ME25 5050 0001 2345 6789 51";
            expect(validateIBAN(validIBAN)).toBe(true);
        });
    });

    describe("should return false for invalid inputs", () => {
        it("short input", () => {
            const invalidIBAN = "ME123";
            expect(validateIBAN(invalidIBAN)).toBe(false);
        });

        it("input without ME", () => {
            const invalidIBAN = "25505000012345678951";
            expect(validateIBAN(invalidIBAN)).toBe(false);
        });

        it("input with extra letters", () => {
            const invalidIBAN = "ME255050000123456789ABC";
            expect(validateIBAN(invalidIBAN)).toBe(false);
        });
    });
});

