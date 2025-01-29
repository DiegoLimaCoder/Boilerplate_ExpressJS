import express, { Request, Response } from "express";

export const app = express();

app.use(express());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, Express.JS",
  });
});

