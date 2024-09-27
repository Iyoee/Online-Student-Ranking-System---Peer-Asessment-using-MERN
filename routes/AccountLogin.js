const express = require("express") ; 
const router = express.Router() ; 
let check = true ; 
const getAccountVerify = require("../controllers/AccountLoginControllers/logindata_verify") ; 
 router.get('/',(req,res) => {
  res.redirect('/AccountLogin') ; 
  }) ; 

 router.get('/AccountLogin',(req,res) => { 
  res.render('AccountLogin.ejs',{check : check }) ; 
  }) ;
 router.post('/AccountLogin',getAccountVerify.verify) ;  


 


module.exports = router ; 
