import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { Application, Request, Response } from 'express';
import SessionRoutes from "./routes/SessionRoutes";

// Configurations

dotenv.config();

mongoose.connect(
    `${process.env.DB_CONNECTION}`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
    () => console.log("Connected to Database.")
  );

// Initializations

const port: number = 5000;
const app: Application = express();

// Routes and Middlewares

app.use(express.json());
app.use("/api/sessions",  SessionRoutes);

// Server Listening

app.listen(port, (): void => console.log(`Server Running on http://localhost:${port}/`));