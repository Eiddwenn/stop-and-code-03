import {Router, Request, Response} from "express";
import products from "../data"

const router = Router();

const getProductId = (id: number) => {
    return products.find(product => product.id === id);
}

router.get("/:id", (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const product = getProductId(productId);

    if (product) {
        res.json(product)
    } else {
        res.status(404).render("not-found", {pageTitle: "Not Found"})
    }
})

export default router;