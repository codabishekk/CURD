import jobpost from "../models/jobApplication_models.js";

export const jobIndex = (req, res) =>{
    res.send("Get all jobpost lists") 
};

export const jobpostCreate = async (req, res) =>{
    // id, title, desination, decription, 
    // Validate the data.
    const newJobpost = new jobpost({
        title:req.body.title,
        description:req.body.description,
        location:req.body.location
    });

    try{
        const jobpost = await newJobpost.save();
        return res.status(201).json(jobpost)
    }
    catch (error){
        return res.status(400).json({message:error.message})
    }

};

export const jobpostupdate = (req, res) =>{
    res.send("Create a jobpost")   
};

export const jobpostdelete = (req, res) => {
    res.send ('delete a jobpost')   
};