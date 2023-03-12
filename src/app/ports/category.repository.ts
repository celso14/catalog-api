import { CreateCategoryDto } from "src/infra/http/dtos/create-category.dto";
import { UpdateCategoryDto } from "src/infra/http/dtos/update-category.dto";
import { Category } from "../entities/category.entity";

export interface CategoryRepository{
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id:string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: string): Promise<Category>;
}
