const error_handler=(err,req,res,next)=>{
   return res.status(500).send({success:false,msg:err})
}

module.exports=error_handler;