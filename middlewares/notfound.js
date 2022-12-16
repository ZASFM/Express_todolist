const notFound=(req,res)=>res.status(404).send('This resource is not valid');
module.exports=notFound;