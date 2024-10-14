import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common'; // Убедитесь, что @Body() импортирован из @nestjs/common
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Image } from '@prisma/client';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Image | null> {
    return this.imageService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: any, // Использование декоратора @Body
  ): Promise<Image> {
    return this.imageService.createImage(file, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Image> {
    return this.imageService.remove(id);
  }
}
