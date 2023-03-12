import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { CategoryRepository } from "src/app/ports/repositories/category.repository";
import { PrismaCategoryRepository } from "./prisma/repositories/prisma-category.repository";

@Module({
    providers: [
        PrismaService,
        {
            provide: CategoryRepository,
            useClass: PrismaCategoryRepository
        }
    ],
    exports: [
        CategoryRepository
    ]
  })
export class DatabaseModule {}
