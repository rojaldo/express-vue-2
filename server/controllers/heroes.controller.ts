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

export const deleteHeroes = (req: Request, res: Response) => {
    console.log('path parameter:' + req.path.split("/")[1]);
    
    let hero = heroes.find((hero: any) => hero.name == req.path.split("/")[1]);
    if (hero) {
        heroes.splice(heroes.indexOf(hero), 1);
        res.json({message: "Hero deleted successfully"});
    }else {
        res.status(404).json({
            status: 404,
            message: "Hero not found"
        });
    }

}
