import { User } from "../models/user.model.js";
import mongoose from "mongoose";

export const registerUser = async (req, res) => {
    try {
        // console.log("Received Request Body:", req.body); 

        const { name, email, contact, institutionName, requirements } = req.body;

        if (!name || !email || !contact || !institutionName || !requirements) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const newUser = await User.create({
            name,
            email,
            contact,
            institutionName,
            requirements,
        });

        console.log("User registered:", newUser);

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
        });

    } catch (error) {
        // console.error("Error registering user", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
