import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Nest supports express (Node HTTP framework) by default

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //to create a NEST app use NestFactory
  //.create() returns an app object
  await app.listen(3000);
  //this starts HTTP listener for HTTP requests
}
bootstrap();
