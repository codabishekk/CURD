import { model, Schema } from "mongoose";


//write the schema
const schema = new Schema({
    title: {
        type:String,
        required:true,
        unique: true
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required: true
    },
    salary:{
        type:Number,
        required:false
    },
    number:{
        type:String,
        required:false
    },
    experiences:{
        type:Number,
        required:true,
        default:0
    }
});

// Create your model
const jobpost = model("jobpost", schema);

export default jobpost;