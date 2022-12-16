const express=require('express');
const router=express.Router();
const {
   getAllTasks,
   postTask,
   getTask,
   updateTask,
   deleteTask
}=require('../controllers/controller');

router.route('/').get(getAllTasks).post(postTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports=router;