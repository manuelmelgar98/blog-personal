import { Category } from "./category.model";
import { Tag } from "./tag.model";

export interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
    categories: Category[];
    tags: Tag[];
}