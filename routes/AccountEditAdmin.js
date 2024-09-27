const express = require('express') ; 
const getUser = require("../util/dbscripts") ;
const router = express.Router() ; 


router.get('/AccountEditAdmin',(req,res) => {
    
      res.render("AccountEdit/AccountEditAdmin.ejs");



}) ;





module.exports = router ; 