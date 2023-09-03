export interface Validation {
    iban: string;
    status: Status;
    date: Date;
}

export enum Status {
    VALID = "VALID",
    INVALID = "NOT VALID"
}
