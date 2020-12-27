import { IsString, IsNumber, IsDefined, IsEnum, IsOptional, IsBoolean, IsDate } from 'class-validator';

enum ERole {
    Admin = "ADMIN",
    Reader = "READER",
}

export class BookDTO{
    @IsString()
    @IsDefined()
    title: string;

    @IsNumber()
    @IsOptional()
    id: number;

    @IsBoolean()
    @IsOptional()
    isReserved: boolean;

    @IsNumber()
    @IsOptional()
    reservedById: number;
}

export class UserDTO{
    @IsNumber()
    @IsOptional()
    id: number;

    @IsBoolean()
    @IsOptional()
    isConnected: boolean;

    @IsEnum(ERole)
    @IsDefined()
    role: ERole;
}

export class ReservationDTO{
    @IsNumber()
    @IsDefined()
    id: number;

    @IsDate()
    @IsOptional()
    startReserve: Date;

    @IsDate()
    @IsOptional()
    endReserve: Date;

    // @IsNumber()
    // @IsDefined()
    // bookId: number;
}
