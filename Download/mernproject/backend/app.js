import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
const app = express();
dotenv.config();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods:["POST"],
        credentials: true,
    } ));

    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));
    app.use("/reservation", reservationRouter);
    app.get("/", (req, res, next)=>{return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN"
      })});

    app.post("/send", (req, res, next)=>{
    console.log(req.body);  
    res.json({message:req.body});
    });
    dbConnection();

    app.use(errorMiddleware);


    export default app;