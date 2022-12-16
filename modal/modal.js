const mongoose=require('mongoose');

const TaskSchema=mongoose.Schema({
   name:{
      type:String,
      required:[true,'Name filed is required'],
      trim:true,
      maxlength:[20,'Nam filed can´t have more than 20 characters'],
   },
   completed:{
      type:Boolean,
      default:false,
   }
})

module.exports=mongoose.model('Task',TaskSchema);