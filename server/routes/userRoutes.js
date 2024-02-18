import express from 'express'
import { getUser, signin, signup } from '../controllers/userController.js'
import { isLoggedIn } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/getUser', isLoggedIn, getUser)

export default router