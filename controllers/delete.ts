import { Request, Response } from "express";
import Artist from "../models/artist";
import Category from "../models/category";

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const deleteCategory = await Category.remove({_id : req.params.id});
        res.status(204).json(deleteCategory);
    } catch (err) {
        res.status(404).json({err: err});
    }
};

export const deleteArtist = async (req: Request, res: Response) => {
    try {
        const deleteArtist = await Artist.remove({_id : req.params.id});
        res.status(204).json(deleteArtist);
    } catch (err) {
        res.status(404).json({err: err});
    }
};