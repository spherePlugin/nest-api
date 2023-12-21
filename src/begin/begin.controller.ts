import { Controller, Post, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BeginService } from './begin.service';
import { BeginDto } from './dto/begin.dto';

@ApiTags('Begin')
@Controller('begin')
export class BeginController {
    constructor(private beginService: BeginService) {}

    // data 1
    @ApiOperation({
        description: "ทดสอบการสร้าง API (name: begin/ POST)"
    })

    @ApiResponse({
        status: 200,
        description: "รายละเอียดข้อมูล response"
    })

    @Post('register')
    async _register(@Query() query: BeginDto) {
        return this.beginService.register(query)
    }

    // data 2
    @ApiOperation({
        description: "ทดสอบการสร้าง API (name: begin/ GET)"
    })

    @ApiResponse({
        status: 200,
        description: "รายละเอียดข้อมูล response"
    })

    @Get('begin_test')
    async _test(@Query() query: BeginDto) {
        return this.beginService.test(query)
    }
}
