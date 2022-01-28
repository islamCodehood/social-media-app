import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from "../models/user.model"
import dotenv from "dotenv";

dotenv.config();

export const signin = async (req, res) => {
    //1. find if user existsSync
    //2. find if password is correct
    //3. if user exists and password is correct, create token
    //4. send status, token, and user
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        if (!existingUser) return res.status(404).json({message: 'User does not exist'})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({message: 'Invalid credentials'})
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET , {expiresIn: "1h"})
        return res.status(200).json({existingUser, token})

    } catch (err) {
        res.status(500).json({message: 'something went wrong.'})
    }
}
export const signup = async (req, res) => {
    
}