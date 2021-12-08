import {Request, Response} from 'express'

export class UserController{
    async signin(req:Request, res:Response) {
        res.send('Entrando com o usuário');
    }

    async signup(req:Request, res:Response) {
        res.send('Criando um usuário');
    }
}