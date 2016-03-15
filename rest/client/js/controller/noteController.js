 

var app = angular.module('noteApp', ['ngResource']);

app.controller('noteController', ['$scope','$resource',

    function($scope,$resource) {

    var notesApi=$resource('/api/notes/')   

    $scope.noteCounts = 1;

    $scope.notes=[
                  { note : "nagendra" },
                  { note : "ravi" }
                 ];

    

    $scope.getNotes=function(){
  
            var User = $resource('/api/notes/');
            var user = User.query(function() {
            console.log(user);
           
            });
            $scope.notes=user;
    }


    $scope.saveNote=function()
    {
             
            var notes=new notesApi();
            notes.note=$scope.note;
            notes.$save(function(result){
            $scope.notes.push({note:result.note});
            });
    }

    
 

 
    
}]);

