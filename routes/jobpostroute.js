import express from 'express' 
import { jobdetails, jobIndex, jobpostCreate, jobpostdelete, jobpostupdate } from '../controllers/jobpost.controllers.js';

const router =  express.Router()

//MVC

// For read jobpost
router.get('/', jobIndex);

//fetching the jobpost
router.get('/:id',jobdetails);

// For creating jobpost
router.post('/', jobpostCreate)

//for updating jobpost
router.put('/:id',jobpostupdate)

// delete the jobpost
router.delete('/:id',jobpostdelete)

export default router;