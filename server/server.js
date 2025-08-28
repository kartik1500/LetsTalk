import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";

//Create express app and http server

const app = express();
const server = http.createServer(app);

//Middleware setup
app.use(cors());
app.use(express.json());

//connect to MOngoDB
await connectDB();

app.use("/api/status", (req, res) => res.send("Server is live"));


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT:" + PORT));
