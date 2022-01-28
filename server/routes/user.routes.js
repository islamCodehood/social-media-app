import express from 'express';
import {
    signin,
    signup
} from "../controllers/user.controllers.js"

const router = express.Router();

//refer to controllers for these functions
router.post('/signin', signin);
router.post('/signup', signup);

export default router;

