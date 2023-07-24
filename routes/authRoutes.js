const express=require('express');
const { registerContoller, loginController, logoutController } = require('../controllers/authControllers');

const router=express.Router();
//ye register ke liye hai
router.post('/register',registerContoller);

//ye login ke liye hai
router.post('/login',loginController)


//ye logout ke liye hai
router.post('/logout',logoutController);

module.exports=router