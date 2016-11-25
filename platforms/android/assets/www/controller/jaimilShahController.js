var app=angular.module('jaimilShahController.module',[]).controller('jaimilShahController', function($scope,$location){
	
	$scope.developerName="Jaimil Shah";
	 $scope.uploadme;

    $scope.uploadImage = function() {
      var fd = new FormData();
      var imgBlob = dataURItoBlob($scope.uploadme);
      fd.append('file', imgBlob);
      $http.post(
          'http://techtechnics.com/paytab/user/',
          fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }
        )
        .success(function(response) {
          console.log('success', response);
        })
        .error(function(response) {
          console.log('error', response);
        });
    }


    //you need this function to convert the dataURI
    function dataURItoBlob(dataURI) {
      var binary = atob(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
        type: mimeString
      });
    }

  });

//your directive
app.directive("fileread", [
  function() {
    return {
      scope: {
        fileread: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.fileread = loadEvent.target.result;
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }
]);