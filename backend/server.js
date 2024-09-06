import express from "express";
import authRoute from "./routes/auth.routes.js"

import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hello beautiful Zee!");
});
app.use("/api/auth", authRoute);
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));