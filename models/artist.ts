import { model, Schema } from "mongoose";
import { IArtist } from "../types/app";

const artistSchema = new Schema<IArtist>({
    name : {
        type : String
    },
    description : {
        type : String
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'categories'
        }
    ]
});

const Artist = model<IArtist>('artists', artistSchema);

export default Artist;