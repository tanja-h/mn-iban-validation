export const validateIBAN = (iban: string): boolean => {
    const regex = new RegExp(/^ME\d{20}$/);
    const cleanedIBAN = iban.replace(/\s+/g, "").toUpperCase();
    return regex.test(cleanedIBAN);
};
