/**
 * ME - ISO country code
 * 2 digits - IBAN check digits
 * 3 digits - bank code
 * 13 digits - account number
 * 2 digits - check digits
 */

export const validateIBAN = (iban: string): boolean => {
    const regex = new RegExp(/^ME\d{2}\d{3}\d{13}\d{2}$/);
    const cleanedIBAN = iban.replace(/\s+/g, "").toUpperCase();
    return regex.test(cleanedIBAN);
};

export const suggestCorrectIBAN = (input: string): string => {
    const digitsRegex = new RegExp(/^\d/);
    if (digitsRegex.test(input)) {
        return "Did you forget to add \"ME\" ?";
    }

    const mRegex = new RegExp(/^((?!M)|M(?!E)).+/);
    if (mRegex.test(input)) {
        return "Did you mean: ME.. ?";
    }

    const wordsRegex = new RegExp(/^ME(?!\d)/);
    if (wordsRegex.test(input)) {
        return "Did you mean to write digits after \"ME\" ?";
    }

    const digitsCountRegex = new RegExp(/^ME(\d{1,19}|\d{20,})/);
    if (digitsCountRegex.test(input)) {
        return "Did you mean to write exactly 20 digits ?";
    }

    return "";
};
