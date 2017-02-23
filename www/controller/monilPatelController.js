angular.module('monilPatelController.module',[]).controller('monilPatelController', function($timeout,$scope,$http){
  
  $scope.developerName="Monil Patel";
  $scope.clickMe = function() {
        $scope.view = true;
        $scope.toggle = function(){
          $scope.view =  $scope.view === false ? true: false;
        }
      }
    })
    // $scope.loading = true;
    // $timeout(function () {
    //  if($scope.loading){
  //     $scope.myHeader = "some error occured";
  //     $scope.loading = false;
  // }
  // }, 10000);
//    $scope.groupedUsers=[]
    /*$http.get('http://techtechnics.com/paytab/userNames.php')
    .then(function (response) {
        $scope.loading = false;
          var items = response.data.records;
          console.log(items[2].FullName);
          $scope.myName=items[2].FullName;
          var filtered = items.filter(function(item) { 
          //console.log(filtered);
            return item.name !== localStorage.userName;  
      });
    });*/

//  }
// })
/*
.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="../lib/Images/ajax_loader.gif" width="20" height="20" />LOADING...</div>',
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

*/









