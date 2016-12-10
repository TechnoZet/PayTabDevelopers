angular.module('riteshPatelController.module',[]).controller('riteshPatelController', function($scope,$http, $location,$rootScope, $cordovaCamera, $cordovaToast){//, $cordovaProgress){//$cordovaOauth)
	
	$scope.developerName="Ritesh Patel";


	// AWS.config.update({accessKeyId: 'AKIAIDPHM46NH6YZFE7A', secretAccessKey: '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'});
	//   AWS.config.region = 'us-west-2';
	//   var bucket = new AWS.S3({params: {Bucket: 'paytab'}});

	//   var fileChooser = document.getElementById('file-chooser');
	//   var results = document.getElementById('results');
	//   var imageURL = "";
	//   $scope.fileChooser = fileChooser;

	//   $scope.picTitle = "Choose Image";

	//   var picTitle = $scope.picTitle;

	//   $('input:file').change(
	//       function(e){
	//           var name = e.target.files[0].name;
	//           $scope.picTitle = name;
	//           $scope.$apply();
	//       });

	//   $scope.uploadImage = function() {
	//       var file = fileChooser.files[0];
	//       if (file) {
	//           results.innerHTML = '';
	//           var params = {Key: file.name, ContentType: file.type, Body: file};                
	//           bucket.upload(params, function (err, data) {
	//               err ? ShowError("There was a problem uploading your image. Please try again.") : ShowSuccess("Image was uploaded.");
	//               $scope.imageURL = data.Location;
	//           });
	//       } else {
	//           results.innerHTML = 'Nothing to upload.';
	//       }
	//   }




	//--------------------------------- Image upload--------------------------
	
	// $scope.selImages = function() {
		
		// var options = {
		// 	quality: 50,
		// 	destinationType: Camera.DestinationType.FILE_URI,
		// 	sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
		// 	targetWidth: 200,
		// 	targetHeight: 200
		// };

		
		//   $cordovaCamera.getPicture(options).then(function(imageData) {
		//     // make sure the imageData is base64 encoded
		//    	uploadToS3('data:image/jpeg;base64,' + imageData);

		//   }, function(err) {
		//     console.log(err);      
		//   })
		
		
	
        
     //    var options = {
     //        quality: 50,
     //        destinationType: Camera.DestinationType.FILE_URI,
     //        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
     //        targetWidth: 200,
     //        targetHeight: 200
     //    };

     //    $cordovaCamera.getPicture(options).then(function(imageUri) {
     //        console.log('img', imageUri);
     //        // $scope.images.push(imageUri);
     //        console.log("=========");
     //        // var hash = CryptoJS.MD5(imageUri);
     //        // console.log("md5");
     //        // console.log(hash);
     //        var obj={};
     //        obj['uri'] = imageUri;
     //        $http.post("http://techtechnics.com/paytab/profilePicture.php",obj)
    	// 		.success(function(data,status,headers,config){
    	// 			console.log(status);
     //                console.log("=====");
    	// 			console.log(data);
     //                console.log("=====");
    	// 			console.log(config);
    	// 			console.log("insert success");
     //                // $http.post("https://web.njit.edu/~rbp54/test/getDeviceKey.php",$scope.groupedUsers)
     //                // .success(function(data,status,headers,config){
     //                //     console.log(status);
     //                //     console.log(data);
     //                //     console.log(config);
     //                //     console.log("device keys sent");
     //                // });
    	// 			var url="http://techtechnics.com/paytab/getProfilepicture.php";
					// $http.get(url)
				 //    .then(function (response) {
					// 	$scope.newimg = response.data.records;
					// 	console.log("======New uri======")
					// 	console.log($scope.newimg);
					
					// });
    				
    	// 		});
                    
        
        

    













	// };  
    //----------------------------------------------------------------------------

   //-------------------------------------Google---------------------------
   /*

	  $scope.googleLogin = function(){
		   $cordovaOauth.google("521172999302-0drpsf4jquks440e8oojs50krvl9oo96.apps.googleusercontent.com", 
		      ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email", 
		      "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/plus.me"]).
		    then(function(result){
		    console.log("google login success");
		    var accessToken;
		    //$location.url('/scan');
		    console.log(JSON.stringify(result));
		    accessToken = JSON.stringify(result);
		    alert(accessToken);
		    console.log(result.access_token);
		    console.log(typeof(result.access_token));
	      //getting profile info of the user
	        $http({method:"GET", url:"https://www.googleapis.com/plus/v1/people/me?access_token="+result.access_token}).
		    success(function(response){
		        console.log(response);
		        var param = {
		            provider: 'google',
		    	        google: {
		                    uid: response["id"],
		                    provider: 'google',
		                    first_name: response["name"]["givenName"],
		                    last_name: response["name"]["familyName"],
		                    email: response.emails[0]["value"],
		                    image: response.image.url
		                }
		        };
		        console.log(param);
		    }, function(error) {
		      console.log(error);
		    });

		  }, function(error){
		    console.log(error);
		  });
		}
 		*/
 		//----------------------------------------------------------------------------------------------------------

 	//-------------------------------------Toast-----------------------------


 	 $scope.showToast = function(message, duration, location) {
        $cordovaToast.show(message, duration, location).then(function(success) {
            console.log("The toast was shown");
        }, function (error) {
            console.log("The toast was not shown due to " + error);
        });
    }


});