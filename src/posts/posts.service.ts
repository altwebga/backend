import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // Получение всех постов
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // Получение одного поста по id
  async findOne(id: string): Promise<Post | null> {
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
  async update(id: string, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  // Удаление поста по id
  async remove(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
