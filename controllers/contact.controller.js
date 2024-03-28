// Contact controllers here
import contactModel from "../models/contact.model.js"
const contactControllers={
 getContacts:async(req,res)=>{
    try{
        const allContact=await contactModel.find()
    res.status(200).json({message:allContact})
}catch(error){
    res.status(500).json({message:error})
}
}
,
 createContact: async(req,res)=>{
    try{
    const createNewContact=await contactModel.create(req.body)
    res.status(201).json({message:createNewContact})
}
catch(error){
    res.status(501).json({message:error})
}
}
,
UpdateContact:async(req,res)=>{
    try{
    const UpdatedContact=await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!UpdatedContact){
        res.status(404).json({message:`no user with id ${req.params.id}`})
    }
    res.status(200).json({message:UpdatedContact})
}
catch(error){
    res.status(500).json({message:error})
}
}
,
 deleteContact:async(req,res)=>{
    try{
        const removeContact=await contactModel.findByIdAndDelete(req.params.id) 
        if(!removeContact){
            res.status(404).json({message:"not found"})
}
res.status(200).json({message:`DELETE contact with id ${req.params.id}`})
    }
catch(error){
    res.status(500).json({message:error})
}
},
 getContactById:async(req,res)=>{
    try{
        const getById=await contactModel.findById(req.params.id)
        if(!getById){
            res.status(404).json({message:"not found"})
}
res.status(200).json({message:getById})
}
catch(error){
    res.status(500).json({message:error})
}}
,
    getContactByEmAIL:async(req,res)=>{
        try{
            const email=req.params.email
          const getByEmail=await contactModel.findOne(email)
          if(!getByEmail){
            res.status(404).json({msg:` no user with email ${email}`})
          }
          res.status(200).json({msg:getByEmail})
        }
        catch(error){
            res.status(500).json({msg:error})
        }
    }
}
export default contactControllers;