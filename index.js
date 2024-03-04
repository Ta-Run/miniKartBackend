import express from "express";
import dbConnect from "./dbConnection/dbconnect.js";
import router from "./src/services/usersService/users.routes.js";
import bodyParser from 'body-parser';
import cors from 'cors'
import 'dotenv/config'
import productRouter from "./src/services/productsService/products.route.js";
import purchaseRouter from "./src/services/purchaseService/purchase.routes.js";
const app = express()
const port = process.env.LOCAL_PORT

app.use(cors())
const options = {
    origin: process.env.FRONTEND_URL,
    }
    app.use(cors(options))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('public'));

//users router
app.use(`${process.env.BASE_URL}/users`, router)

//product router
app.use(`${process.env.BASE_URL}/products`, productRouter)

//purchase router
app.use(`${process.env.BASE_URL}/purchase`, purchaseRouter)


app.listen(port, () => {
    dbConnect()
    console.log(`express app lisent in ${port}`)
})

