angular.module('meetShahController.module',[]).controller('meetShahController', function($scope,$location){
	
	$scope.developerName="Meet Shah";
    
    // if(window.Connection){
    //     if(navigator.connection.type==Connection.NONE){
    //         alert("Network Connection failed.");
    //     }
    //     else{
    //         alert("Connected to Network.");
    //     }
    // }


    $('.scrollable').pullToRefresh({
        callback: function () {
            var deferred = $.Deferred();

            setTimeout(function () {
                // Simulate a refresh: add 3 items to the list
                addItems(3);
                deferred.resolve();
            }, 2000);

            return deferred.promise();
        }
    });

    
}); 