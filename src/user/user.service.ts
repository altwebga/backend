import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Получение всех пользователей
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Получение одного пользователя по id
  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Создание нового пользователя
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // Обновление пользователя по id
  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Удаление пользователя по id
  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
