import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';
import * as express from 'express';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { AnyExceptionFilter } from './filters/any-exception.filter';
import { SystemLogsService } from './modules/system-logs/system-logs.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  // 开启全局数据验证管道
  app.useGlobalPipes(new ValidationPipe());
  // swagger
  const options = new DocumentBuilder()
    .setTitle('Pets-Mall')
    .addBearerAuth()
    .setDescription('Pets-Mall Server API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 注册错误请求过滤器
  app.useGlobalFilters(
    new AnyExceptionFilter(app.get<SystemLogsService>(SystemLogsService)),
  );
  // 全局注册请求结果拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 监听所有路由请求,打印日志
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(logger);
  await app.listen(4000);
}
bootstrap();
