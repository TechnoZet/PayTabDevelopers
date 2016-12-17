document.addEventListener("deviceready", function ($cordovaNetwork) {

    if(window.Connection){
        if(navigator.connection.type==Connection.NONE){
            //alert("Network Connection failed.");
            $('confirm text').dialog(
			    {
			        modal:true, //Not necessary but dims the page background
			        buttons:{
			            'Save':function() {
			                //Whatever code you want to run when the user clicks save goes here
			             },
			             'Delete':function() {
			                 //Code for delete goes here
			              }
			        }
			    }
			);
        }
        else{
            //alert("Connected to Network.");
        }
    }

  }, false);


var PayTab = angular.module('PayTabDevelopers',['ngRoute','ngCordova', 'homePageController.module',
												'router.module',
												'maulikParikhController.module',
												'meetShahController.module',
												'krutarthJoshiController.module',
												'riteshPatelController.module',
												'jaimilShahController.module',
												'monilPatelController.module'
											]);








