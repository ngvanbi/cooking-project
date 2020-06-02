import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(process.env.APP_PORT, 10) || 5000;

  const documentOptions = new DocumentBuilder()
    .setTitle('Cooking API')
    .setDescription('The cooking API description')
    .setVersion('1.0')
    .addTag('cooking')
    .build();

  const document = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
