import { Router, Request, Response } from "express";
import { SessionController } from "../Controller/SessionController";
import { session_endpoints } from '../utils/endpoints';

const router = Router();

router.get(session_endpoints.GET_ALL_SESSIONS, (req: Request, res: Response) => {
    const session = new SessionController();

    session.getAllSessions(res);
})

router.get(session_endpoints.GET_SESSION, (req: Request, res: Response) => {
    const { session_id } = req.body;
    const session = new SessionController();

    session.getSession(session_id, res);
})

router.post(session_endpoints.POST_SESSION, (req: Request, res: Response) => {
    const { sessionName, sessionDescription, timeTaken,  typeOfWorkout, sets, reps, isPublic } = req.body;
    const session = new SessionController(
        sessionName, 
        sessionDescription, 
        timeTaken, 
        typeOfWorkout,
        sets, 
        reps, 
        isPublic
    );

    session.createSession(res);
})

router.put(session_endpoints.UPDATE_SESSION, (req: Request, res: Response) => {
    const { 
        sessionId, 
        sessionName, 
        sessionDescription, 
        timeTaken,  
        typeOfWorkout, 
        sets, 
        reps, 
        isPublic 
    } = req.body;

    const session = new SessionController(
        sessionName, 
        sessionDescription, 
        timeTaken, 
        typeOfWorkout,
        sets, 
        reps, 
        isPublic
    );


    session.updateSession(sessionId, res);
})

router.delete(session_endpoints.DELETE_SESSION, (req: Request, res: Response) => {
    const session = new SessionController();
    session.deleteSession(req.params.sessionId, res);
})

export default router;