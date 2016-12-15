angular.module('jaimilShahController.module',[]).controller('jaimilShahController', function($scope,$location){
	
	$scope.developerName="Jaimil Shah";
    VMasker(document.getElementById("separator")).maskMoney(); //{separator: '.'}

}); 