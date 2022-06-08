import { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.json({
    title: "Boilerplate for Express + Vue.JS with Typescript"
  });
};

export const indexPost = (req: Request, res: Response) => {
  res.json({
    title: "Boilerplate for Express + Vue.JS with Typescript by POST"
  });
};
