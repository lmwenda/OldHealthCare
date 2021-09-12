import mongoose from "mongoose";
import { IUser } from "../utils/exports/exportedInterfaces";

const UserSchema = new mongoose.Schema({
    
    // Main Details

    username: { type: String },
    email: { type: String },
    password: { type: String, min: 6 },

    // Sessions

    sessions: { type: [] },

    // Date Field
    date: {
        type: Date,
        default: Date.now(),
    }
})

const User = mongoose.model<IUser>("User", UserSchema);
export default User;