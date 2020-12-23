export class BookDTO{
    title: string;
    id: number;
    isReserved: boolean;
    reservedById: number;
}

export class UserDTO{
    id: number;
    isConnected: boolean;
    role: ERole;
}

export class ReservationDTO{
    id: number;
    bookId: number;
    startReserve: Date;
    endReserve: Date;
}

enum ERole {
    Admin = "ADMIN",
    Reader = "READER",
}