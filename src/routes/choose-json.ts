import {Router, Request, Response} from "express";
import products from "../data"

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("products-json", { pageTitle: "Lista JSON", products: products})
})


export default router;