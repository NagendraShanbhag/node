
var notes=require('../model/notes.js'); 

module.exports.create=function (req,res) {
	var note=new notes(req.body);
	note.save(function(err,result){
		res.json(result);
	}); 
  
}



/*module.exports.getNotes=function (res){*/
	 
/*notes.find(function(err, result) {
    if (err) {
     
    } else if (result) {
      res.json(result);

     
    }  
  });
};*/


module.exports.getNotes= function(req, res) {
  notes.find({},{note:1,_id:0},function(err, result) {
    if (err) {
     
    } else if (result) {
    	console.log(result);
      res.send( result );

     
    }  
  });
  /*console.log("Admin");
  res.send('Admin Homepage');*/
};

