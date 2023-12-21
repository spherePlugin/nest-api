import { ApiProperty } from "@nestjs/swagger";

export class BeginDto {


    @ApiProperty({
        description: "key 1 : id", 
        required: false,
    })
    id: number;

    @ApiProperty({
        description: "key 2 : email",
        required: false,
    })
    email: string;

    @ApiProperty({
        description: "key 3 : password",
        required: false,
    })
    password: string;
}