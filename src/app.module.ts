import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './infra/http/http.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
})
export class AppModule {}
