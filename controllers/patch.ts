import { Request, Response } from "express";
import Category from "../models/category";
import Artist from '../models/artist';

export const editCategory = async (req : Request, res : Response) => {
    try {
        const editCategory = await Category.updateOne({_id : req.params.id}, {
            $set : {
                name : req.body.name,
                description : req.body.description,
                artists : req.body.artists
            }
        });

        res.status(200).json(editCategory);
    } catch (err) {
        res.status(404).json({ err: err });
    }
};

export const editArtist = async (req : Request, res : Response) => {
    try {
        const editArtist = await Artist.updateOne({_id : req.params.id}, {
            $set : {
                name : req.body.name,
                description : req.body.description,
                categories : req.body.categories
            }
        });

        res.status(200).json(editArtist);
    } catch (err) {
        res.status(404).json({ err: err });
    }
};