import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

dotenv.config()
const app = express();

// every route insides of the postRoutes is going to start with prefix 'posts' from /
app.use('/posts', postRoutes)


// didnt need to use bodyParser on this one
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// we will be using mongodb's cloud atlas version which means they will host our DB on their cloud
const PORT = process.env.PORT || 5000

// useNewUrlParser and useUnifiedTopology is just so we dont get errors
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))
    }).catch((error) => {
        console.log(error.message)
    })

// below is just so we dont get errors
// mongoose.set('useFindAndModify', false)