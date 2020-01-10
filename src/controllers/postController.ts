
import { Request, Response } from "express";
import { IPost, Post } from "../models/post";

export class PostController {

    public async getposts(req: Request, res: Response): Promise<void> {
        const posts = await Post.find();
        res.json({ posts });
    }

    public async getpost(req: Request, res: Response): Promise<void> {
        const post = await Post.findOne({ postId: req.params.id });
        if (post === null) {
            res.sendStatus(404);
        } else {
            res.json(post);
        }
    }

    public async createpost(req: Request, res: Response): Promise<void> {
        const newpost: IPost = new Post(req.body);
        const post = await Post.findOne({ postId: req.body.postId });
        if (post === null) {
            const result = await newpost.save();
            if (result === null) {
                res.sendStatus(500);
            } else {
                res.status(201).json({ status: 201, data: result });
            }

        } else {
            res.sendStatus(422);
        }
    }

    public async updatepost(req: Request, res: Response): Promise<void> {
        const post = await Post.findOneAndUpdate({ postId: req.params.id }, req.body);
        if (post === null) {
            res.sendStatus(404);
        } else {
            const updatedpost = { postId: req.params.id, ...req.body };
            res.json({ status: res.status, data: updatedpost });
        }
    }

    public async deletepost(req: Request, res: Response): Promise<void> {
        const post = await Post.findOneAndDelete({ postId: req.params.id });
        if (post === null) {
            res.sendStatus(404);
        } else {
            res.json({ response: "post deleted Successfully" });
        }
    }
}