const router = require('express').Router();
import {Request,Response} from 'express'
const admission=require("../model/Admission")
router.post('/',(req:Request, res:Response)=>{
    console.log('inside admission')
    console.log("data"+req.body.grade)
        var newadmission = new admission({
        category:req.body.category,
        grade:req.body.grade,
        fees:req.body.fees,
        seats:req.body.seats
        });   
    newadmission.save()
    .then(() => res.json("data saved"))
    .catch(() =>
      res.json("err")
    );
    console.log('created')
})

router.get('/:category',(req:Request, res:Response)=>{
  console.log('inside admission')
  admission.find({category:req.params.category})
  .then((data:Object) => res.json(data))
  .catch(() =>
    res.json("err")
  );
  console.log('created')
})

router.get('/',(req:Request, res:Response)=>{
  console.log('inside admission')
  admission.find()
  .then((data:Object) => res.json(data))
  .catch(() =>
    res.json("err")
  );
  console.log('created')
})

module.exports=router;
