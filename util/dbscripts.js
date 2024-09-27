const db = require("./database") ; 
const user_id = require("../controllers/AccountLoginControllers/logindata_verify") ;
const namequery = 'SELECT name FROM members WHERE id = ?' ; 
const surnamequery = 'SELECT surname FROM members WHERE id = ?' ; 
const passquery = 'SELECT pass FROM members WHERE id = ?';
const tcquery = 'SELECT tc FROM members WHERE id = ?';
const mailquery = 'SELECT mail FROM members WHERE id = ?'; 
const rolequery = 'SELECT role FROM members WHERE id = ?'; 
const departmentquery ='SELECT department FROM members WHERE id = ?' ; 
const gradequery ='SELECT grade FROM members WHERE id = ?' ; 

//Get USER INFO
exports.getName = (id,querytype) => {
    let param = querytype ;
  switch(querytype) {
    case ('name') :
      param = namequery ;
      break ; 
      case ('surname') : 
      param = surnamequery ; 
      break ;
      case ('tc') :
      param = tcquery ; 
        break ; 
        case ('pass') : 
      param = passquery ; 
        break ;
        case('mail') : 
      param = mailquery ; 
        break ; 
        case ('role'):
      param = rolequery ; 
          break ;
        case('department') :
      param = departmentquery ; 
        break ;
        case ('grade') :
      param = gradequery ; 

          break ; 
  } 
    db.execute(param,[user_id.user_id]).then(data => {
     
        const str = JSON.stringify(data[0][0]) ; 
        
        const result = str.slice(str.indexOf(":")+1,str.indexOf("}")-1) ;
        console.log(result , "result");
        console.log(data[1]);

    }).catch((err) => {
      console.log("getName error") ; 
    })

} ;

