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

export class CreateUserDTO{
    private idUserCpt = 0;

    constructor(private readonly role: ERole) {
        this.id = this.idUserCpt;
        this.isConnected = true;
        this.idUserCpt++;
    }
    readonly isConnected: boolean;
    readonly id: number;
}

export class CreateBookDTO{
    readonly title: string;
    readonly id: number;
    readonly isReserved: boolean;
    readonly reservedById: number;
}

enum ERole {
    Admin = "ADMIN",
    Reader = "READER",
}