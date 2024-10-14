import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() data: any): Promise<User> {
    return this.userService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<User> {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }
}
