import { Router } from "express"
// dont forget to add your extention(.js) any time it is imported
import { deleteEvents, getEvents, getOneEvents, patchEvents, postEvents } from "../contollers/event_controller.js"


export const eventRouter = Router()

// to get
eventRouter.get('/events', getEvents)

// to post
eventRouter.post('/events', postEvents)

// to patch
eventRouter.patch('/events/:id', patchEvents)

// to delete
eventRouter.get('/events/:id', getOneEvents)

// to delete
eventRouter.delete('/events/:id', deleteEvents)