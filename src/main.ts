import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { NotFoundInterceptor } from './app/common/errors/interceptors/notfound.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());

    app.enableCors({
      origin: '*'
    });

    app.useGlobalPipes(
        new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        }),
    );

    app.useGlobalInterceptors(new NotFoundInterceptor());

    await app.listen(3000);
}
bootstrap();
