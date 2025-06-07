import { Schema, model} from "mongoose";

const eventSchema = new Schema({
    title:{
        type: String,
        required: true
    }, 
    date:{
        type: Date,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    rate:{
        type: Number,
        default: "free"
    },
    currenncy:{
        type: String,
        default:"GHS"
    },
    dressCode: String,
    type:{
        type: String,
        enum: ["religious", "political", "entertainment"]
    }
},{timestamps: true});

export const Events = model('Event', eventSchema)