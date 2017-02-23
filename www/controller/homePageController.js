angular.module('homePageController.module',[]).controller('homePageController', function($scope,$location,$http,$timeout){
	
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
		else
			{
				$location.url("/jaimil");
			}
		};

		$scope.clickMe = function() {
			$scope.loading = true;
			$timeout(function () {
				if($scope.loading){
		      		$scope.myHeader = "some error occured";
		      		$scope.loading = false;
		      		$location.url("/monil");

		  			}
	  		}, 100000);
			$scope.groupedUsers=[]
			$http.get('http://techtechnics.com/paytab/userNames.php')
			.then(function (response) {
				$scope.loading = true;
				console.log(response);
				$location.url("/monil");
							});

		}
	
})
.directive('loading', function () {
	      		return {

	        	restrict: 'E',
	        	replace:true,
	        	template: '<div align="center" class="loading" style="vertical-align:middle; "><img src="lib/Images/ajax_loader.gif" width="25%" height="25%"> <br> Please wait...</div>',
	        	link: function (scope, element, attr) {
	              		scope.$watch('loading', function (val) {
	                  		if (val)
	                      		$(element).show();
	                  		else
	                    		$(element).hide();
	              		});
	        		}
	      		}
});