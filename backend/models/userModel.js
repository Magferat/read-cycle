import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        trust: {
            type: Number,
            required: true,
            default: 10

        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;