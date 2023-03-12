import { CreateCategoryDto } from "src/infra/http/dtos/create-category.dto";
import { UpdateCategoryDto } from "src/infra/http/dtos/update-category.dto";
import { Category } from "../../entities/category.entity";

export abstract class CategoryRepository{
    abstract create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    abstract findAll(): Promise<Category[]>;
    abstract findOne(id: string): Promise<Category | null>;
    abstract update(id:string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    abstract remove(id: string): Promise<void>;
}
