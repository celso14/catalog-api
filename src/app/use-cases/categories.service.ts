import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/infra/http/dtos/create-category.dto';
import { UpdateCategoryDto } from 'src/infra/http/dtos/update-category.dto';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../ports/repositories/category.repository';

@Injectable()
export class CategoriesService {

    constructor(
        private readonly repository: CategoryRepository
    ){}

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.repository.create(createCategoryDto);
    }

    async findAll(): Promise<Category[]> {
        return this.repository.findAll();
    }

    async findOne(id: string): Promise<Category> {
        const category =  await this.repository.findOne(id);

        if(!category){
            throw new NotFoundError('Category Not Found');
        }

        return category;
    }

    async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const category =  await this.repository.findOne(id);

        if(!category){
            throw new NotFoundError('Category Not Found');
        }

        return this.repository.update(id, updateCategoryDto);
    }

    async remove(id: string): Promise<void> {
        const category =  await this.repository.findOne(id);

        if(!category){
            throw new NotFoundError('Category Not Found');
        }

        await this.repository.remove(id);
    }
}
