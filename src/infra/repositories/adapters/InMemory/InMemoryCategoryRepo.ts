import { Category } from "@/src/domain/category/Category";
import { ICategoryRepo } from "@/src/domain/category/ICategoryRepo";
import { categories } from "./data/categories";

export class InMemoryCategoryRepo implements ICategoryRepo {
  async findAll(): Promise<Category[]> {
    return categories;
  }
}
