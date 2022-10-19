import { Request, Response } from "express";
import Artist from "../models/artist";
import Category from "../models/category";

export const postNewCategory = async (req : Request, res : Response) => {
    const newCategory = await new Category({
        name : req.body.name,
        description : req.body.description,
        artists : req.body.artists,
    });
    try {
        const savedCategory = newCategory.save();
        res.status(200).json(req.body);
    } catch(err) {
        res.status(400).json({ err: err });
    }
};

export const postNewArtist = async (req : Request, res : Response) => {
    const newArtist = await new Artist({
        name : req.body.name,
        description : req.body.description,
        categories : req.body.categories
    });
    try {
        const savedArtist = newArtist.save();
        res.status(200).json(req.body);
    } catch(err) {
        res.status(400).json({ err: err });
    }
};