import express from 'express'
import {getPosts, createPost} from '../controllers/posts.js' // we can omit .js in React but not in node

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)

export default router;