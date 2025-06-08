import { Events } from "../models/event_model.js"
// here we write down the function to the get method 
// the export makes the file available to the others, any time you call it you will see that it is imported

export const getEvents = async (request, response) => {
    const id = await Events.find({});
    response.send(id)
}

// to post
export const postEvents = async (request, response) => {
    const event = request.body
    const addEvent = await Events.create(request.body)

    response.send(addEvent)
}

// to patch
export const patchEvents = async (request, response) => {
    const id = (request.params.id)
    const event = await Events.findByIdAndUpdate(id, req.body, { new: true})
    response.send(event)
}


export const getOneEvents = async (request, response) => {
    const event = await Events.findById(request.params.id)

    response.send(event)
}


export const deleteEvents = async (request, response) => {
    const id = request.params.id
    const deletevents = await Events.findByIdAndDelete(id)

    response.send(deletevents)
}