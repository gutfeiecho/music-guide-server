import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

export const setupSwagger = async (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const swaggerConfig = configService.get('swagger');

  const config = new DocumentBuilder()
    .setTitle(swaggerConfig.docTitle)
    .setDescription(swaggerConfig.docDescription)
    .setVersion(swaggerConfig.docVersion)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
};
