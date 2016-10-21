angular.module('homePageController.module',[]).controller('homePageController', function($scope,$location){
	
	$scope.changeloc=function(val){
		if(val=='1')
		{
		$location.url("/maulik");
		}
		else if(val=='2')
		{
			$location.url("/meet");
		}
		else 
		{
			$location.url("/krutarth");
		}
	};
}); 