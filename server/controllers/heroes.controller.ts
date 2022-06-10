import { Request, Response } from "express";
// import db from "../app";
const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://postgres:postgres@localhost:5432/database");
// let heroes = [
//     {name : "Batman", description : "Bruce Wayne alter ego"},
//     {name : "Superman", description : "Clark Kent alter ego"},
//     {name : "Wonder Woman", description: "another hero form DC"}
//   ]

let heroes: any[] = [];

export const getHeroes = (req: Request, res: Response) => {
    // return all heroes from DB
    console.log('DB: ' + db);

    db.any("SELECT * FROM heroes").then((myHeroes: any) => {
        heroes = myHeroes;
        let response: any[] = []
        for (const iterator of heroes) {
            response.push({ name: iterator.name, description: iterator.description });
        }
        res.json(response);
    }
    ).catch(() => {
        console.log("Table heroes could not be selected");
        // send error
        res.status(500).json({
            status: 500,
            message: "Table heroes could not be selected"
        });

    });

};

export const postHeroes = (req: Request, res: Response) => {

    // add new hero to DB
    let hero = req.body;
    console.log(hero);
    db.none("INSERT INTO heroes(name, description) VALUES(${name}, ${description})", hero).then(() => {
        console.log("Hero added");
        // send success message
        heroes.push(req.body);
        res.status(201).json(heroes);
    }).catch(() => {
        console.log("Hero could not be added");
        // send error
        res.status(500).json({
            status: 500,
            message: "Hero could not be added"
        });
    }
    );
};

export const deleteHeroes = (req: Request, res: Response) => {
    // get path params

    let heroName = req.params.heroName;
    console.log(heroName);
    db.none("DELETE FROM heroes WHERE name = $1", heroName).then(() => {
        console.log("Hero deleted");
        // send success message
        heroes = heroes.filter(hero => hero.name !== heroName);

        res.status(200).json(heroes);
    }
    ).catch(() => {
        console.log("Hero could not be deleted");
        // send error
        res.status(400).json({
            status: 400,
            message: "Hero could not be deleted"
        });
    }
    );

}
