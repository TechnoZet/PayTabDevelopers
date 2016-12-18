// angular.module('jaimilShahController.module',[]).controller('jaimilShahController', function($scope,$location,$rootScope){
// 	$scope.developerName="Jaimil Shah";
// 	$scope.nex1="0.00";
// 	var initlength=4;
// 	 $scope.nex=function(){
// 	 		if($scope.nex1.length>initlength){
// 	 			if(($scope.nex1*10).toFixed(2)<4999){
// 	 			$scope.nex1=($scope.nex1*10).toFixed(2);
// 	 			initlength=$scope.nex1.length;
// 			 	}
// 			 	else{
// 			 		num = $scope.nex1.toString(); //If it's not already a String
// 					num = num.slice(0, (num.indexOf("."))+3);
// 					$scope.nex1=num;
// 			 	}	
// 	 		}
// 	 		else{
// 	 			$scope.nex1=($scope.nex1/10).toFixed(2);
// 	 			initlength=$scope.nex1.length;
// 	 		}
// 	 };
// });

angular.module('jaimilShahController.module',['maskMoneyService']).controller('jaimilShahController', function($scope,masker,$location,$rootScope){
	$scope.developerName="Jaimil Shah";
	$scope.answer1="0.00";
	$scope.mask1 = function () {
        $scope.answer1 = masker.maskfun($scope.answer1);
    };
    $scope.answer2="0.00";
	$scope.mask2 = function () {
        $scope.answer2 = masker.maskfun($scope.answer2);
    };
});