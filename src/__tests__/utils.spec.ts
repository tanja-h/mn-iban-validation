import { suggestCorrectIBAN, validateIBAN } from "../utils/utils";

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

describe("suggestCorrectIBAN", () => {
    it("iban starting with digit", () => {
        const iban = "25505000012345678951";
        expect(suggestCorrectIBAN(iban)).toBe("Did you forget to add \"ME\" ?");
    });

    it("iban not starting with M", () => {
        const iban = "E3445";
        expect(suggestCorrectIBAN(iban)).toBe("Did you mean: ME.. ?");
    });

    it("iban not starting with ME", () => {
        const iban = "M344579879";
        expect(suggestCorrectIBAN(iban)).toBe("Did you mean: ME.. ?");
    });

    it("iban with letters after ME", () => {
        const iban = "MEA344579879";
        expect(suggestCorrectIBAN(iban)).toBe("Did you mean to write digits after \"ME\" ?");
    });

    it("iban with less than 20 digits", () => {
        const iban = "ME12121";
        expect(suggestCorrectIBAN(iban)).toBe("Did you mean to write exactly 20 digits ?");
    });

    it("iban with more than 20 digits", () => {
        const iban = "ME121210900909090909090909009";
        expect(suggestCorrectIBAN(iban)).toBe("Did you mean to write exactly 20 digits ?");
    });

    it("iban with only M", () => {
        const iban = "M";
        expect(suggestCorrectIBAN(iban)).toBe("");
    });

});
