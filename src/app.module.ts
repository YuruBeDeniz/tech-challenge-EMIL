import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsdevicesModule } from './gpsdevices/gpsdevices.module';
import { LoggerMiddleware } from './gpsdevices/middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GpsdevicesModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('gpsdevices');
    //we have set up the LoggerMiddleware for the /gpsdevices route handlers that were previously defined inside the gpsdevices.controller
  }
}
