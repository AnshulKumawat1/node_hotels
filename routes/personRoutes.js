const express=require('express');
const router=express.Router();
const Person=require('./../models/person');
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const savedPerson = await newPerson.save();
      console.log("data saved");
      res.status(200).json(savedPerson);
    } catch (err) {
      console.log("error");
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
    }
  });

  router.get('/',async(req,res)=>{
    try{
         const data=await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
   }
    
 })

 router.get('/:workType',async(req,res)=>{
    try{
     const workType=req.params.workType;
     if(workType=='chef' || workType=='manager' || workType=='waiter'){
         const response =await Person.find({work:workType});
         console.log("response fetched");
         res.status(200).json(response);
     }
     else{
       res.status(404).json({error:'invalid worktype'});
 
     }
    }catch(err){
     console.log(err);
     res.status(500).json({ error: 'internal server error' });
    }
 })


  router.put('/:id',async(req,res)=>{
       try{
             const personId=req.params.id; //extract id from url
             const updatedPersonaData=req.body;
             const response=await Person.findByIdAndUpdate(personId,updatedPersonaData,{
                new:true,//return updated document 
                runValidators:true,//rum moongose validation
             })
        
              if(!response){
                return res.status(404).json({error:"person not found"});
              }
              console.log("data updated");
              res.status(200).json(response);
              


       }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
       }
  })

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //extract id from url
        const response=await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error:"person not found"});
          }
          console.log('deleted');
          res.status(200).json({message:"person deletd successfully"});
          

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})





 module.exports=router;