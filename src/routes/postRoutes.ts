import { Router } from "express";
import { PostController } from "../controllers/postController";
import { AuthController } from "../controllers/authController";


export class PostRoutes {

    public router: Router;
    public postController: PostController = new PostController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/", this.postController.getposts);
        this.router.get("/:id", this.postController.getpost);
        this.router.post("/", this.authController.authenticateJWT, this.postController.createpost);
        this.router.put("/:id", this.authController.authenticateJWT, this.postController.updatepost);
        this.router.delete("/:id", this.authController.authenticateJWT, this.postController.deletepost);
    }
}