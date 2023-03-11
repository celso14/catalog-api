import { Module } from '@nestjs/common';
import { ProductsService } from '../../app/use-cases/products.service';
import { ProductsController } from './controllers/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
