import { Request, Response } from "express";

let heroes = [
    {name : "Batman", description : "Bruce Wayne alter ego"},
    {name : "Superman", description : "Clark Kent alter ego"},
    {name : "Wonder Woman", description: "another hero form DC"}
  ]

export const getHeroes = (req: Request, res: Response) => {
  res.json(heroes);
};

export const postHeroes = (req: Request, res: Response) => {

    console.log(req.body);
    
    heroes.push(req.body);
    res.json(heroes);
};
