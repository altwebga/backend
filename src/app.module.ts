import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Подключение ConfigModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { PrismaService } from './prisma.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делает ConfigService глобально доступным
    }),
    PostsModule,
    UserModule,
    ImageModule,
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
