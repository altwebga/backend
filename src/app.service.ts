import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAppInfo(): { version: string; description: string } {
    return {
      version: '1.0.0',
      description: 'API for managing posts, users, and images',
    };
  }
}
