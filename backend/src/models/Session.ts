import mongoose from "mongoose";
import { ISession } from "../utils/exports/exportedInterfaces";
import User from "./User";

const SessionSchema = new mongoose.Schema({
    // Main Details

    sessionName: { type: String },
    sessionDescription: { type: String },
    timeTaken: { type: String, default: "0.00s" },

    // Author

    author: { type: mongoose.Schema.Types.ObjectId },

    // Workout Details 

    typeOfWorkout: { type: String }, // Athletics, Cardio, Musclar Endurance
    sets: { type: Number, default: 0 },
    reps: { type: Number, default: 0 },

    // Session Public

    isPublic: { type: Boolean },

    // Date Field
    date: {
        type: Date,
        default: Date.now(),
    }
})

const Session = mongoose.model<ISession>("Session", SessionSchema);
export default Session;