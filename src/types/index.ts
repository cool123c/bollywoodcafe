export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface Reservation {
    name: string;
    email: string;
    date: string;
    time: string;
    guests: number;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
}