angular.module('meetShahController.module',[]).controller('meetShahController', function($scope,$location){
	
	$scope.developerName="Meet Shah";
    
    if(window.Connection){
        if(navigator.connection.type==Connection.NONE){
            alert("Network Connection failed.");
        }
        else{
            alert("Connected to Network.");
        }
    }
}); 