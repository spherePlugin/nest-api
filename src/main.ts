import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // set global prefix of URL for API data
  app.setGlobalPrefix('service/what-on-the-land');

  // swagger setting
  const config = new DocumentBuilder()
    .setTitle('what-on-the-land-api')
    .setDescription("This API was used in What's on the land web applicaion.")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('service/what-on-the-land/info', app, document); // URL for swagger

  await app.listen(3000);
}
bootstrap();
