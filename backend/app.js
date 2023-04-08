import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/Database.js";
import userRoutes from "./routers/userRouters.js";

// Assess the Environment Variables
dotenv.config({path: "./config/config.env"});

const app = express();

// Connect to the Database
connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/auth", userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
    console.log(`Server listening on http://localhost:${port}`);
})