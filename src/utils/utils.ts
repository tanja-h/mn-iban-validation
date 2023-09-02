export const validateIBAN = (iban: string): boolean => {
    const regex = new RegExp(/^ME\d{20}$/m);
    const cleanedIBAN = iban.replace(/\s+/, "").toUpperCase();

    return regex.test(cleanedIBAN);
};
