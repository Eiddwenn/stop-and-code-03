import express, {Router, Request, Response} from "express";
import products from "../data"

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("index", { pageTitle: "Home", products: products})
})

export default router;