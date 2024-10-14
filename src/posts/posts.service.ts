import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // Получение всех постов
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // Получение одного поста по id
  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  // Создание нового поста
  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  // Обновление поста по id
  async update(id: number, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  // Удаление поста по id
  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
