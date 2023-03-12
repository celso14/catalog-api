import { Category } from "src/app/entities/category.entity";
import { CategoryRepository } from "src/app/ports/repositories/category.repository";
import { CreateCategoryDto } from "src/infra/http/dtos/create-category.dto";
import { UpdateCategoryDto } from "src/infra/http/dtos/update-category.dto";
import { PrismaService } from "../prisma.service";

export class PrismaCategoryRepository implements CategoryRepository{

    constructor(
        private readonly repository: PrismaService,
    ){}

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = await this.repository.category.create({
            data: createCategoryDto
        });

        return category;
    }

    async findAll(): Promise<Category[]> {
        return await this.repository.category.findMany();
    }

    async findOne(id: string): Promise<Category> {
        return await this.repository.category.findUnique({
            where: { id }
        });
    }

    async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return await this.repository.category.update({
            where: { id },
            data: updateCategoryDto
        });
    }

    async remove(id: string): Promise<void> {
        await this.repository.category.delete({
            where: { id }
        });
    }
}
