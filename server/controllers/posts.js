import PostMessage from "../models/postMessage"

// this will contain all the logics/functions of the routes
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMessages);

        // learn more about status codes here: https://www.restapitutorial.com/httpstatuscodes.html
        // the ones with star are the most important
        res.status(200).json(postMessages)
    } catch (error) {
        req.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        // res.send('Post Creation')
        await newPost.save()
        
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})       
    }
}