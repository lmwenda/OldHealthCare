import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import express, { Application } from 'express';
import SessionRoutes from "./routes/SessionRoutes";
import UserRoutes from "./routes/UserRoutes";

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

app.use(
  cors({
    exposedHeaders: "verification-token",
  })
);
app.use(express.json());
app.use("/api/sessions",  SessionRoutes);
app.use("/api/users", UserRoutes);

// Server Listening

app.listen(port, (): void => console.log(`Server Running on http://localhost:${port}/`));