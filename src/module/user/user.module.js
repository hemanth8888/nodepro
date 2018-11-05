import mongoose, {Schema} from "mongoose";
import validator from "validator";

const userSchem = new Schema({
    email: {
        type : String,
        unique: true,
        required : [true, "Email Is Required"],
        trim  : true,
        validate : {
            validator(email){
                return validator.isEmail(email);
            },
            message: "{value} is Not a valid Email"
        } 
    },
    firstName: {
        type : String,
        required : [true,"First Name Is Required"],
        trim : true
    },
    lastName : {
        type : String,
        required : [true,"Last Name is Required"],
        trim : true
    },
    userName : {
        type : String,
        required : [true,"UserName Is Required"],
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : [true,"Password Is Required"],
        trim : true,
        minlength : [6,"Password Should be more than 6 Letters"]
    }
});

export default mongoose.model("User", userSchem);