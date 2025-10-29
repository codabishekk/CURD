import { model, Schema } from "mongoose";


//write the schema
const schema = new Schema({
    title: String,
    description:String,
    location:String  
});

// Create your model
const jobpost = model("jobpost", schema);

export default jobpost;