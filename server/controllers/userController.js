import bcrypt from 'bcrypt'
import { User } from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const signup = async (req, res) => {
    try {
        const userExists = await User.findOne({
            email: req.body.email
        })

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const username = req.body.username
        const password = req.body.password

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        req.body.password = hashedPassword

        const user = new User(req.body)
        await user.save()

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: user
        })
    } catch (error) {
        console.log(error);
    }
}

const signin = async (req, res) => {
    try {
        const userExists = await User.findOne({
            email: req.body.email
        })

        if (!userExists) {
            res.status(400).json({
                success: false,
                message: "User doesn't exist"
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, userExists.password)

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Password doesn't match"
            })
        }
        else {
            const token = jwt.sign({
                id: userExists._id,
            }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })

            return res.status(200).json({
                success: true,
                message: "User logged in successfully",
                data: userExists,
                token
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(200).json({
                success: false,
                message: "User not found"
            })
        }

        console.log(user);
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        })
    }
    catch (error) {
        console.log(error);
    }
}

export {
    signup,
    signin,
    getUser
}