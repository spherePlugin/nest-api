import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {

    @ApiProperty({
        description: "id", 
        required: false,
    })
    id: number;

    @ApiProperty({
        description: "อีเมล",
        required: true,
    })
    email: string;

    @ApiProperty({
        description: "รหัสผ่าน",
        required: true,
    })
    password: string;
}