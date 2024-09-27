const http = require("http") ; 
const path = require("path") ;
const express = require("express") ; 
const bodyParser = require("body-parser") ; 

const AccountLogin = require("./routes/AccountLogin") ; 
const AccountEdit = require("./routes/AccountEdit") ;
const AccountEditAdmin = require("./routes/AccountEditAdmin") ;
const server = express() ;
server.set( 'view engine' , 'ejs' ) ; 
server.set( 'views' , 'pages' ) ;  
const db = require("./util/database") ; 
server.use(express.static(path.join(__dirname,'Public'))) ; 

        server.use(bodyParser.urlencoded({extended:false}));
        server.use('/',AccountLogin) ; 
        server.get('/AccountEditAdmin',AccountEditAdmin) ; 
        
        
server.listen(3000) ; 