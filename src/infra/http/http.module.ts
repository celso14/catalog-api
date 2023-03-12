import { Module } from '@nestjs/common';
import { CategoriesService } from 'src/app/use-cases/categories.service';
import { DatabaseModule } from '../db/database.module';
import { CategoriesController } from './controllers/categories.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [
        CategoriesController,
    ],
    providers: [
        CategoriesService,
    ]
})
export class ProductsModule {}
