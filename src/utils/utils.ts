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
