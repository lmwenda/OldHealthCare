import { Router, Request, Response } from "express";
import { UserController } from "../Controller/UserController";
import { user_endpoints } from '../utils/endpoints';

const router = Router();

router.get(user_endpoints.GET_ALL_USERS, (req: Request, res: Response) => {
    const user = new UserController();

    user.getAllUsers(res);
})

router.get(user_endpoints.GET_USER, (req: Request, res: Response) => {
    const user = new UserController();

    user.getUser(req.params.user_id, res);
})

router.get(user_endpoints.GET_ALL_USER_SESSIONS, (req: Request, res: Response) => {
    const user = new UserController();
    user.getAllUserSessions(res, req.body.author);
})

router.post(user_endpoints.POST_USER, (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const user = new UserController(
        username,
        email,
        password
    );

    user.createUser(res);
})

router.put(user_endpoints.UPDATE_USER, (req: Request, res: Response) => {
    const { 
        username,
        email,
        password 
    } = req.body;

    const user = new UserController(
       username,
       email,
       password
    );


    user.updateUser(req.params.user_id, res);
})

router.delete(user_endpoints.DELETE_USER, (req: Request, res: Response) => {
    const user = new UserController();
    user.deleteUser(req.params.user_id, res);
})

export default router;