export type AddressType = {
    address: string;
    city: string;
    postalCode: string;
    state: string;
};

export type CoordinatesType = {
    lat: number;
    lng: number;
};

export type hair = {
    color: string;
    type: 'Wavy' | 'Curly' | 'Straight';
};

export type CryptoType = {
    coin: string;
    network: string;
    wallet: string;
};

export type BankType = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
};

export type CompanyType = {
    address: AddressType & CoordinatesType;
};

export enum GenderType {
    Female = 'female',
    Male = 'male',
}

export type UserType = {
    address: AddressType & CoordinatesType;
    age: number;
    bank: BankType;
    birthDate: string;
    bloodGroup: string;
    company: CompanyType;
    crypto: CryptoType;
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: GenderType;
    heir: hair;
    height: number;
    id: number;
    image: string;
    lastName: string;
    password: string;
    username: string;
    weight: number;
    ip: string;
};
