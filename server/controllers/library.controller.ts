import { Request, Response } from "express";
import { User } from "../models/user";

let users: User[] = [ 
    new User(1, "John", 123456789, "01/01/2020"),
    new User(2, "Jane", 123456789, "01/01/2020"),
 ]

export const getUsers = (req: Request, res: Response) => {
    let response: any[] = [];
    for (const user of users) {
        response.push(user.getJson());
    }
  res.json(response);
};

export const postUsers = (req: Request, res: Response) => {

    // check if duplicate card number
    let duplicateCardNumber = users.find((user: any) => user.cardNumber === req.body.cardNumber);
    if (duplicateCardNumber) {
        res.status(400).json({
            status: 400,
            message: "Duplicate card number"
        });
    }
    console.log(req.body);
    let myUser = new User(-1, req.body.name, req.body.cardNumber, req.body.dateOfBirth);
    users.push(myUser);
    res.json(req.body);
};

export const putUsers = (req: Request, res: Response) => {  
    let user: User | undefined = users.find((user: any) => user.cardNumber == req.body.cardNumber);
    if (user) {
        user.name = req.body.name;
        user.cardNumber = req.body.cardNumber;
        user.cardExpiryDate = req.body.cardExpiryDate;
        res.json(user);
    }else {
        res.status(404).json({
            status: 404,
            message: "User not found"
        });
    }
    
}

export const deleteUsers = (req: Request, res: Response) => {
    let user = users.find((user: any) => user.cardNumber == req.body.cardNumber);
    if (user) {
        users.splice(users.indexOf(user), 1);
        res.json({message: "User deleted successfully"});
    }else {
        res.status(404).json({
            status: 404,
            message: "User not found"
        });
    }
    
}