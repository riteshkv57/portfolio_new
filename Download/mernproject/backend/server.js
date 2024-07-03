import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`server running On port ${process.env.PORT}`);
})