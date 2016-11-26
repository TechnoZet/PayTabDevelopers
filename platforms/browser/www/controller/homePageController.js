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
		else if(val=='3')
		{
			$location.url("/krutarth");
		}
		else if(val=='4')
		{
			$location.url("/ritesh");
		}
		else if(val=='6')
		{
			$location.url("/monil");
		}
		else
			{
				$location.url("/jaimil");
			}
	};
}); 