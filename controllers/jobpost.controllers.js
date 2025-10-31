import jobpost from "../models/jobApplication_models.js";

export const jobIndex =async(req, res) =>{
    try{
        const job = await jobpost.find()
        res.json(job)
    }catch(error) {
        res.status(500).json({message:error.message});
    }
};

export const jobpostCreate = async (req, res) =>{
    // id, title, desination, decription, 
    // Validate the data.
    const newJobpost = new jobpost({
        title:req.body.title,
        description:req.body.description,
        location:req.body.location,
        salary:req.body.salary,
        number:req.body.number
    });

    try{
        const jobpost = await newJobpost.save();
        return res.status(201).json(jobpost)
    }
    catch (error){
        return res.status(400).json({message:error.message})
    }

};

export const jobdetails = async(req, res) =>{
    try {
        const job = await jobpost.findById(req.params.id);
        if(jobpost == null){
            return res.status(404).json({message:"Cannot find jobpost"});
        }
        else{
            res.json(job)
        }
    }
    catch (error) {
        return res.status(500).json({message:error.message});
    }

}

export const jobpostupdate = async(req, res) => {
    try{
        const updatedJob = await jobpost.findOneAndUpdate(
            {_id: req.params.id},
            {
                title:req.body.title,
                description:req.body.description,
                location:req.body.location
            },
            {
                new:true,
            }
        );
         res.status(200).json(updatedJob)
    }catch (error){
         res.status(400).json({message:error.message})
    }
}

export const jobpostdelete = async (req, res) => {
    const jobId = req.params.id;
    
    try{
        await jobpost.deleteOne({_id: jobId});
        res.json({message:"jobpostdeleted!..."})
    }catch(error){
        res.status(500).json({message:error.message})
    }

}
    