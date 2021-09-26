import Joi from "@hapi/joi";

export function AuthenticateSession(body: any){
    const schema = Joi.object({
        sessionName: Joi.string().required(), 
        sessionDescription: Joi.string().required(), 
        timeTaken: Joi.string().required(), 
        author: Joi.string(),
        typeOfWorkout: Joi.string().required(),
        sets: Joi.number(), 
        reps: Joi.number(), 
        isPublic: Joi.boolean().required(), 
  });
  return schema.validate(body);
}

export default AuthenticateSession;