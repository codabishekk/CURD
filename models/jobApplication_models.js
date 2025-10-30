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
    location:String  
});

// Create your model
const jobpost = model("jobpost", schema);

export default jobpost;