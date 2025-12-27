import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    phone: number;
    sessionId: string;
    role: "user" | "responder";
    department?: string;
}

const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
    sessionId: {type: String, required: true},
    role: {type: String, enum: ["user", "responder"], default: "user"},
    department: {type: String},
}, {
    timestamps: true
})

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)