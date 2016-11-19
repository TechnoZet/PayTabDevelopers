angular.module('krutarthJoshiController.module',[]).controller('krutarthJoshiController', function($scope,$location){

	$scope.developerName="Krutarth Joshi";
	
	//jQuery Masked Money function
	$scope.test=function(){
		$("#demo1").maskMoney();
	}
});
