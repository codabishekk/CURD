import express from 'express' 
import { jobIndex, jobpostCreate, jobpostdelete, jobpostupdate } from '../controllers/jobpost.controllers';

const router =  express.Router()

//MVC

// For read jobpost
router.get('/', jobIndex);

// For creating jobpost
router.post('/', jobpostCreate)

//for updating jobpost
router.put('/:id',jobpostupdate)

// delete the jobpost
router.delete('/:id',jobpostdelete)

export default router;