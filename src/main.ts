import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = +app.get(ConfigService).get('port') || 30000;

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
