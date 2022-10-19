import { Request, Response } from "express";
import Category from '../models/category';
import Artist from '../models/artist';

export const getAllCategories = async (_req : Request, res : Response) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).json({err: err});
    };
};

export const getSingleCategory = async (req: Request, res: Response) => {
    try {
        const category = await Category.find({_id : req.params.id});
        res.status(200).json(category);
    } catch(err) {
        res.status(400).json(err);
    };
};

export const getAllArtists = async (_req : Request, res : Response) => {
    try {
        const artists = await Artist.find();
        res.status(200).json(artists);
    } catch (err) {
        res.status(400).json({err: err});
    };
};

export const getSingleArtist = async (req: Request, res: Response) => {
    try {
        const artist = await Artist.find({_id : req.params.id});
        res.status(200).json(artist);
    } catch(err) {
        res.status(400).json(err);
    };
};