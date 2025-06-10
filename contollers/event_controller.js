import { Events } from "../models/event_model.js"
import { eventSchema } from "../schemas/event_schema.js";
// here we write down the function to the get method 
// the export makes the file available to the others, any time you call it you will see that it is imported



export const getEvents = async (request, response) => {
    const id = await Events.find({});
    response.send(id)
}

// to post
export const postEvents = async (request, response) => {
    try {

        const { error, value } = eventSchema.validate(request.body)
        if (error) {
            return response.status(400).json(error.details[0].message)
        }
        const addEvent = await Events.create(value)

        return response.status(201).json({ "event": addEvent })
    } catch (error) {
        return response.status(500).json({ error: error.message })

    }
}

// to patch
export const patchEvents = async (request, response) => {
   try {
     const id = (request.params.id)
     const event = await Events.findByIdAndUpdate(id, req.body, { new: true })
     response.send(event)
   } catch (error) {
    return response.status(500).json({error:error.message})
   }
}


export const getOneEvents = async (request, response) => {
    const event = await Events.findById(request.params.id)

    response.send(event)
}


export const deleteEvents = async (request, response) => {
    const id = request.params.id
    const deletevents = await Events.findOneAndDelete(id);
    response.send(deletevents)
}