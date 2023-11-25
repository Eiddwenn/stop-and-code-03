import express, {Request, Response} from "express";
import productsRouter from "./routes/products";
import productRouter from "./routes/single-product";
import productsJson from "./routes/json-products";
import allJson from "./routes/choose-json";
import productJson from "./routes/json-single-product";

const port = 3000;
const app = express();
const reqLog = require("./view-request");

app.use(express.json());
app.set("views", "./src/views");
app.set("view engine", "hbs");
app.use(express.static("public"));

app.use(reqLog);

app.use("/", productsRouter);
app.use("/prodotti", productRouter);
app.use("/api/prodotti", productsJson);
app.use("/prodotti-json", allJson);
app.use("/api/prodotti", productJson);

app.use((req: Request, res: Response) => {
    res.status(404).render("not-found", { pageTitle: "Not Found"})
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));