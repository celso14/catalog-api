import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './infra/http/http.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule, CategoriesModule],
  controllers: [AppController],
})
export class AppModule {}
