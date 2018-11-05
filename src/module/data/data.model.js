import mongoose, {Schema} from "mongoose";
import validator from "validator";

const dataSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        required: [true,"Id Is Required"],
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength : [4, "username must be more than 4 characters" ]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate:{
            validator(email){
                return validator.isEmail(email)
            },
            message: "{value} is Not a valid Email" 
        }
    },
    address: {
        type: Object,
        trim: true,
        properties: {
            street: { type: String },
            suit: { type: String },
            city: { type: String },
            zipcode: { type: Number }
        }
    },
    phone: {
        type: String,
        trim: true
    },
    website : {
        type: String,
        required: true,
        trim: true
    }

})

export default mongoose.model("Data", dataSchema);
