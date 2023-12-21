import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {

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