angular.module('riteshPatelController.module',[]).controller('riteshPatelController', function($scope,$location,$rootScope, $cordovaCamera){//, $cordovaProgress){//$cordovaOauth)
	
	$scope.developerName="Ritesh Patel";







	//--------------------------------- Image upload--------------------------

	$scope.ready = false;
	$scope.images = [];
	
	// $rootScope.$watch('appReady.status', function() {
	// 	//console.log('watch fired '+$rootScope.appReady.status);
	// 	if($rootScope.appReady.status) $scope.ready = true;
	// });
	
	$scope.selImages = function() {

		//$cordovaProgress.showText(false, 100000, "Loading")
		
		var options = {
			quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			targetWidth: 200,
			targetHeight: 200
		};

		$cordovaCamera.getPicture(options).then(function(imageUri) {
			console.log('img', imageUri);
			$scope.images.push(imageUri);
			console.log(images);
					
		}, function(err) {
		// error
		});
	};  
    //----------------------------------------------------------------------------



	 //  $scope.googleLogin = function(){
		//    $cordovaOauth.google("521172999302-0drpsf4jquks440e8oojs50krvl9oo96.apps.googleusercontent.com", 
		//       ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email", 
		//       "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/plus.me"]).
		//     then(function(result){
		//     console.log("google login success");
		//     var accessToken;
		//     //$location.url('/scan');
		//     console.log(JSON.stringify(result));
		//     accessToken = JSON.stringify(result);
		//     alert(accessToken);
		//     console.log(result.access_token);
		//     console.log(typeof(result.access_token));
	 //      //getting profile info of the user
	 //        $http({method:"GET", url:"https://www.googleapis.com/plus/v1/people/me?access_token="+result.access_token}).
		//     success(function(response){
		//         console.log(response);
		//         var param = {
		//             provider: 'google',
		//     	        google: {
		//                     uid: response["id"],
		//                     provider: 'google',
		//                     first_name: response["name"]["givenName"],
		//                     last_name: response["name"]["familyName"],
		//                     email: response.emails[0]["value"],
		//                     image: response.image.url
		//                 }
		//         };
		//         console.log(param);
		//     }, function(error) {
		//       console.log(error);
		//     });

		//   }, function(error){
		//     console.log(error);
		//   });
		// }
  
}); 