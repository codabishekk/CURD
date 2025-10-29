export const jobIndex = (req, res) =>{
    res.send("Get all jobpost lists") 
};

export const jobpostCreate = (req, res) =>{
    // id, title, desination, decription, 
    console.log(req.body);

    return res.json(req.body);
    // create a jobpost info  
};

export const jobpostupdate = (req, res) =>{
    res.send("Create a jobpost")   
};

export const jobpostdelete = (req, res) => {
    res.send ('delete a jobpost')   
};