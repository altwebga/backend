import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel, Prisma } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Получение всех постов
  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  // Получение поста по id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel | null> {
    return this.postsService.findOne(Number(id));
  }

  // Создание нового поста
  @Post()
  async create(@Body() postData: Prisma.PostCreateInput): Promise<PostModel> {
    return this.postsService.create(postData);
  }

  // Обновление поста по id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() postData: Prisma.PostUpdateInput,
  ): Promise<PostModel> {
    return this.postsService.update(Number(id), postData);
  }

  // Удаление поста по id
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<PostModel> {
    return this.postsService.remove(Number(id));
  }
}
