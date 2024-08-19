import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';
import appConfig from './config/app.config';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { JazzModule } from './service/playlist/jazz/jazz.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserHttpModule } from './service/user/user-http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      load: [appConfig, databaseConfig]
    }),
    DatabaseModule,
    JazzModule,
    UserHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('playlist/jazz');
  }
}
