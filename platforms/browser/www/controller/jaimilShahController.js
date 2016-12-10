angular.module('jaimilShahController.module',[]).controller('jaimilShahController', function($scope,$location){
	
	$scope.developerName="Jaimil Shah";

$('input').maskMoney();

$('input').val(0.00);
	
    $scope.$watch("myModel", function(newValue, oldValue, event){
   
    		if(newValue.length >= 7){
    			 event.preventDefault();

    			 //$scope.money1=oldValue;
    			//$('.money').mask("000.00", {reverse: true});
    		}
    		else{
    			$('.money').mask("0000.00", {reverse: true});
    		}

	});
}); 