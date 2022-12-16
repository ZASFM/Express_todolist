const Task=require('../modal/modal');
const asyncWrapper=require('../middlewares/asyncWrapper');

const getAllTasks=asyncWrapper(async(req,res)=>{
   const task=await Task.find({});
   res.status(200).json({success:true,data:{tasks:task,nbmHits:task.length}})
})

const postTask=asyncWrapper(async(req,res)=>{
   const task=await Task.create(req.body);
   res.status(201).json({success:true,task:task});
})

const getTask=asyncWrapper(async(req,res)=>{
   const {id:taskID}=req.params;
   const task=Task.findOne({_id:taskID});
   if(!task){
      return res.status(400).json({success:true,msg:`No task with id: ${taskID}`});
   }
   return res.status(200).json({success:true,task:task});
})

const updateTask=asyncWrapper(async(req,res)=>{
   const {id:taskID}=req.params;
   const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
      new:true,
      runValidators:true,
   })
   if(!task){
      return res.status(400).json({success:false,msg:`No task with id: ${taskID}`});
   }
   return res.status(200).json({success:true,task:task});
})

const deleteTask=asyncWrapper(async(req,res)=>{
   const {id:taskID}=req.params;
   const task=await Task.findOneAndDelete({_id:taskID});
   if(!task){
      return res.status(400).json({success:false,msg:`No task matches id: ${taskID}`});
   }
   return res.status(200).json({success:true,task:task});
})

module.exports={
   getAllTasks,
   postTask,
   getTask,
   updateTask,
   deleteTask
}