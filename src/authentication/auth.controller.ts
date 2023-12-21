import { Controller, Post, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    // Register
    @ApiOperation({
        description: "ลงทะเบียนสำหรับผู้ใช้งานใหม่"
    })
    @ApiResponse({
        status: 200,
        description: `ลงทะเบียนสำเร็จ! 
        \n\tid - ลำดับการลงทะเบียน 
        \n\temail - อีเมล 
        \n\tpassword - รหัสผ่าน
        `})
    @Post('register')
    async _register(@Query() query: RegisterDto) {
        return this.authService.register(query)  
    }

    // Login
    @ApiOperation({
        description: "ลงชื่อเข้าใช้งานระบบ"
    })
    @ApiResponse({
        status: 200,
        description: `เข้าสู่ระบบสำเร็จ! 
        \n\tid - ลำดับการลงทะเบียน 
        \n\temail - อีเมล 
        \n\tpassword - รหัสผ่าน
        `})
    @Post('login')
    async _login(@Query() query: RegisterDto) {
        return this.authService.login(query)
    }

    // All users data
    @ApiOperation({
        description: "ตรวจสอบบัญชีผู้ใช้งานทั้งหมด"
    })
    @ApiResponse({
        status: 200,
        description: `รายการบัญชีผู้ใช้งานทั้งหมด 
        \n\tid - ลำดับการลงทะเบียน 
        \n\temail - อีเมล 
        \n\tpassword - รหัสผ่าน
        `})
    @Get('all-users')
    async _record() {
        return this.authService.userRecord()
    }
}
 