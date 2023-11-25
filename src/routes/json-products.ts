import {Router, Request, Response} from "express";
import products from "../data"

const router = Router();

router.get("/", (req: Request, res: Response) => { 
    res.json(products)
})

export default router;