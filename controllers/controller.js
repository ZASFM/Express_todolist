const Task=require('../modal/modal');

const getAllTasks=async(req,res)=>{
   try{
      const task=await Task.find({});
      res.status(200).json({success:true,data:{tasks:task,nbmHits:task.length}})
   }
   catch(err){
      res.status(500).json({success:false,msg:err});
   }
}

const postTask=async(req,res)=>{
   try{
      const task=await Task.create(req.body);
      res.status(201).json({success:true,task:task});
   }
   catch(err){
      res.status(500).json({success:false,msg:err});
   }
}

const getTask=async(req,res)=>{
   try{
      const {id:taskID}=req.params;
      const task=Task.findOne({_id:taskID});
      res.status(200).json({success:true,task:task});
   }
   catch(err){
      res.status(500).json({success:false,msg:err})
   }
}

const updateTask=async(req,res)=>{
   try{
      const {id:taskID}=req.params;
      const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
         new:true,
         runValidators:true,
      })
      if(!task){
         res.status(400).json({success:false,msg:`No task with id: ${taskID}`});
      }
      return res.status(200).json({success:true,task:task});
   }
   catch(err){
      res.status(500).json({success:false,msg:err});
   } 
}

const deleteTask=async(req,res)=>{
   try{
      const {id:taskID}=req.params;
      const task=await Task.findOneAndDelete({_id:taskID});
      if(!task){
         return res.status(400).json({success:false,msg:`No task matches id: ${taskID}`});
      }
      return res.status(200).json({success:true,task:task});
   }
   catch(err){
      res.status(500).json({success:false,msg:err});
   }
}

module.exports={
   getAllTasks,
   postTask,
   getTask,
   updateTask,
   deleteTask
}