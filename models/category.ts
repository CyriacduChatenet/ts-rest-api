import { model, Schema } from "mongoose";
import { ICategory } from "../types/app";

const categorySchema = new Schema<ICategory>({
    name : {
        type : String
    },
    description : {
        type : String
    },
    artists: [
        {
            type: Schema.Types.ObjectId,
            ref: 'artists'
        }
    ]
});

const Category = model<ICategory>('categories', categorySchema);

export default Category;