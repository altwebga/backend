import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Image } from '@prisma/client';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import { Express } from 'express'; // Для работы с Multer файлами
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ImageService {
  private s3: S3Client;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService, // Инжектируем ConfigService
  ) {
    // Используем ConfigService для получения переменных окружения
    this.s3 = new S3Client({
      endpoint: this.configService.get<string>('YANDEX_S3_ENDPOINT'),
      region: this.configService.get<string>('YANDEX_S3_REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('YANDEX_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>(
          'YANDEX_SECRET_ACCESS_KEY',
        ),
      },
    });
  }

  // Получение всех изображений
  async findAll(): Promise<Image[]> {
    return this.prisma.image.findMany();
  }

  // Получение одного изображения по id
  async findOne(id: string): Promise<Image | null> {
    return this.prisma.image.findUnique({
      where: { id },
    });
  }

  // Создание нового изображения
  async createImage(file: Express.Multer.File, data: any): Promise<Image> {
    const fileExtension = path.extname(file.originalname);
    const key = `${uuid()}${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: this.configService.get<string>('YANDEX_S3_BUCKET_NAME'),
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3.send(command);

    return this.prisma.image.create({
      data: {
        ...data,
        url: `https://${this.configService.get<string>('YANDEX_S3_BUCKET_NAME')}.storage.yandexcloud.net/${key}`,
        s3Key: key,
      },
    });
  }

  // Удаление изображения
  async remove(id: string): Promise<Image> {
    const image = await this.prisma.image.findUnique({
      where: { id },
    });

    if (!image) {
      throw new Error('Image not found');
    }

    // Добавьте логику для удаления изображения из S3

    return this.prisma.image.delete({
      where: { id },
    });
  }
}
