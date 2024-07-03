import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app =express() || 5000;
const PORT = process.env.PORT;

dotenv.config();

app.use(express.json());

// middlewares
app.use("/api/auth",authRoutes);

// app.get("/",(req,res)=> {
//     res.send("HEllo World");
// });



app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
}
);

