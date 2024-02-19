import express from 'express'
import { applyDoctor, getUser, signin, signup } from '../controllers/userController.js'
import { isLoggedIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/getUser', isLoggedIn, getUser)
router.post('/applyDoctor', isLoggedIn, applyDoctor)

export default router